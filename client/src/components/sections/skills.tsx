import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Golang", "Node.js", "Python", "Java"]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud", "AWS", "Docker", "Kubernetes", "Jenkins", "Ansible"]
  },
  {
    title: "Design & UX",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Interface Design"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20 bg-gradient-to-br from-background to-primary/5">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium backdrop-blur-sm 
                                   hover:bg-primary/20 transition-colors duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}