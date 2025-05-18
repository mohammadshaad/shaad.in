import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Golang Backend Developer Intern",
    company: "Zocket",
    location: "Chennai",
    period: "Jan. 2025 – Present",
    type: "Internship",
    achievements: [
      "Designed and implemented Schedule-Based Automation Rules to enable dynamic and time-triggered marketing workflows",
      "Engineered the complete backend system for Business Manager Creation and integrated AI-powered blog generation",
      "Reduced execution history load time from 14s to 3s by leveraging Goroutines and optimizing concurrency patterns",
      "Solely built the end-to-end system architecture, including API development, database schema design, and service orchestration"
    ],
    tech: ["Golang", "PostgreSQL", "Redis", "Docker", "Kubernetes", "gRPC"]
  },
  {
    role: "PRISM Developer Intern",
    company: "Samsung",
    location: "Chennai",
    period: "Sept. 2023 – Oct. 2024",
    type: "Internship",
    achievements: [
      "Aligned with the team on developing a database of impulse responses to enhance spatial audio research, boosting efficiency by 30%",
      "Authored and maintained detailed technical documentation to support audio research and innovation",
      "Assisted in the integration of new research tools and workflows into existing audio frameworks"
    ],
    tech: ["Python", "MATLAB", "DSP", "Audio Processing", "Signal Processing"]
  },
  {
    role: "Full Stack Web3 Developer Intern",
    company: "Gizmolab",
    location: "Remote",
    period: "Aug. 2023 – Jan. 2024",
    type: "Internship",
    achievements: [
      "Engineered Web3 applications using Golang and TypeScript, enhancing user satisfaction by 20% & system performance by 35% through improved UI designs",
      "Collaborated with cross-functional teams to ensure alignment with organizational goals and technical requirements",
      "Integrated blockchain technology into existing platforms using Golang APIs, streamlining decentralized operations"
    ],
    tech: ["Golang", "TypeScript", "Web3", "Blockchain", "React", "Solidity"]
  },
  {
    role: "Freelance Software Developer",
    company: "Influcon",
    location: "Remote",
    period: "Jan. 2023 – Jun. 2023",
    type: "Freelance",
    achievements: [
      "Led the development of custom software solutions using Node.js & React.js, catering to diverse client needs",
      "Designed & implemented backend services optimized for performance & security, resulted 20% improvement in system efficiency",
      "Developed an e-learning platform for ISD Technology, increasing employee training and engagement metrics by 20%"
    ],
    tech: ["Node.js", "React.js", "MongoDB", "Express", "AWS", "Docker"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden w-screen">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-left md:translate-x-1/2'
                  }`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 md:left-1/2 top-5 w-4 h-4 rounded-full bg-primary transform 
                      md:-translate-x-1/2 transition-transform duration-300 hover:scale-150 z-10
                      shadow-lg shadow-primary/20`}
                  />

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <Card className="backdrop-blur-sm bg-background/50 border border-primary/10 hover:border-primary/20 
                                   transition-all duration-300 hover:scale-105 transform hover:shadow-lg shadow-primary/5">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                          <motion.h3 
                            className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {exp.role}
                          </motion.h3>
                          <Badge variant="outline" className="w-fit">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <motion.div 
                          className="flex items-center gap-2 text-muted-foreground mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="font-medium text-foreground">{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </motion.div>

                        <motion.ul 
                          className="space-y-2 mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </motion.ul>

                        <motion.div 
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {exp.tech.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}