import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Golang Backend Intern",
    company: "Zocket",
    period: "Sep 2024 – Present"
  },
  {
    role: "PRISM Developer",
    company: "Samsung India",
    period: "Sep 2023 – Present"
  },
  {
    role: "Beta Microsoft Learn Student Ambassador",
    company: "Microsoft",
    period: "May 2023 – Present"
  },
  {
    role: "Product Development Intern",
    company: "Ministry of Electronics and Information Technology",
    period: "Aug 2023 – Apr 2024"
  },
  {
    role: "Full Stack Developer",
    company: "GIZMOLAB",
    period: "Aug 2023 – Jan 2024"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4">
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
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left md:translate-x-1/2'
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
                        <motion.h3 
                          className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {exp.role}
                        </motion.h3>
                        <motion.p 
                          className="text-foreground/80 font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {exp.company}
                        </motion.p>
                        <motion.p 
                          className="text-sm text-muted-foreground mt-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {exp.period}
                        </motion.p>
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