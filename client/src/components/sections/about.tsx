import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiBehance, SiDribbble } from "react-icons/si";
import { Download } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/mohammadshaad"
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/mohammad-shaad-shaikh"
  },
  {
    name: "Behance",
    icon: SiBehance,
    url: "https://behance.net/mohammadshaad"
  },
  {
    name: "Dribbble",
    icon: SiDribbble,
    url: "https://dribbble.com/mohammadshaad"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="backdrop-blur-sm bg-background/50 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-8">
              <motion.p 
                className="text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm a Computer Science student at Vellore Institute of Technology (2021-2025) with a passion for creating beautiful and functional web applications.
              </motion.p>
              <motion.p 
                className="text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Currently, I'm working as a Golang Backend Intern at Zocket and a PRISM Developer at Samsung India. I'm also a Beta Microsoft Learn Student Ambassador.
              </motion.p>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Education
                  </h3>
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-muted-foreground">
                    Vellore Institute of Technology (2021-2025)
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Languages
                  </h3>
                  <p className="font-medium">Urdu, English, Hindi</p>
                  <p className="text-muted-foreground">
                    French (learning)
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Connect with me
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 
                               transition-all duration-300 hover:scale-105 transform"
                      whileHover={{ y: -2 }}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button 
                  asChild 
                  className="gap-2 bg-primary/10 hover:bg-primary/20 text-foreground hover:scale-105 transform transition-all duration-300"
                >
                  <a href="/Mohammad_Shaad_Resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}