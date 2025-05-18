import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/mohammadshaad",
    color: "hover:text-[#333] dark:hover:text-[#fff]"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/mohammadshaad",
    color: "hover:text-[#0077B5]"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/mohammadshaad",
    color: "hover:text-[#1DA1F2]"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mohammadshaad@gmail.com",
    color: "hover:text-[#EA4335]"
  }
];

export function Footer() {
  return (
    <footer className="z-50 text-foreground relative bg-gradient-to-b from-background via-primary/5 to-background border-t border-primary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Mohammad Shaad
              </motion.h3>
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                Full Stack Developer & Researcher passionate about building innovative solutions and pushing the boundaries of technology.
              </motion.p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.h4 
                className="text-lg font-semibold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Quick Links
              </motion.h4>
              <motion.ul 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                {["About", "Experience", "Works", "Contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.h4 
                className="text-lg font-semibold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h4>
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground">
                  Let's connect and discuss how we can work together to create something amazing.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 group"
                  asChild
                >
                  <a href="mailto:mohammadshaad@gmail.com">
                    <Mail className="mr-2 h-4 w-4 group-hover:text-primary" />
                    Contact Me
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground transition-colors ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center text-sm text-muted-foreground border-t border-primary/10 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} Mohammad Shaad. All rights reserved.</p>
            <p className="mt-2">
              Built with 🩵 using{" "}
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                AI
              </a>
              
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 