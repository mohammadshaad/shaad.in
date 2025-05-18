import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create reusable transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false // Only use this in development
    }
  });

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log('Email transporter is ready');
  } catch (error) {
    console.error('Email configuration error:', error);
  }

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertMessageSchema.safeParse(req.body);

      if (!parsed.success) {
        const errorMessage = fromZodError(parsed.error);
        return res.status(400).json({ 
          message: "Invalid request data", 
          errors: errorMessage.message 
        });
      }

      const data = parsed.data;
      await storage.createMessage(data);

      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'callshaad@gmail.com',
        subject: `New Portfolio Contact: ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error: any) {
      console.error('Error:', error);
      res.status(500).json({ 
        message: "Server error, please try again",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}