import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
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
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'callshaad@gmail.com',
        subject: `New Portfolio Contact: ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
        `
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: "Server error, please try again" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}