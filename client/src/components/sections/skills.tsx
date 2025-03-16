import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiGo, SiNodedotjs, SiPython, SiOpenjdk, SiReact, SiNextdotjs, 
         SiJavascript, SiTypescript, SiHtml5, SiCss3, SiPostgresql, 
         SiMongodb, SiMysql, SiGooglecloud, SiAmazon, SiDocker, 
         SiKubernetes, SiJenkins, SiAnsible, SiFigma, SiAdobecreativecloud } from "react-icons/si";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Golang", icon: SiGo },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "AWS", icon: SiAmazon },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Ansible", icon: SiAnsible }
    ]
  },
  {
    title: "Design & UX",
    skills: [
      { name: "Figma", icon: SiFigma },
      { name: "Adobe Creative Suite", icon: SiAdobecreativecloud },
      { name: "User Research" },
      { name: "Interface Design" }
    ]
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
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-2 bg-primary/10 rounded-full text-sm font-medium backdrop-blur-sm 
                                   hover:bg-primary/20 transition-colors duration-200 cursor-default
                                   flex items-center gap-2"
                        >
                          {skill.icon && <skill.icon className="h-4 w-4" />}
                          {skill.name}
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