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
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left md:translate-x-1/2'
                  }`}
                >
                  {/* Timeline dot */}
                  <div 
                    className={`absolute left-0 md:left-1/2 top-5 w-4 h-4 rounded-full bg-primary transform 
                      md:-translate-x-1/2 transition-transform duration-300 hover:scale-150`}
                  />

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {exp.period}
                        </p>
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