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
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                I'm a Computer Science student at Vellore Institute of Technology (2021-2025) with a passion for creating beautiful and functional web applications.
              </p>
              <p className="text-lg mb-4">
                Currently, I'm working as a Golang Backend Intern at Zocket and a PRISM Developer at Samsung India. I'm also a Beta Microsoft Learn Student Ambassador.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p>B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">
                    Vellore Institute of Technology (2021-2025)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <p>Urdu, English, Hindi</p>
                  <p className="text-sm text-muted-foreground">
                    French (learning)
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Connect with me</h3>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full
                               hover:bg-primary/20 transition-colors duration-200"
                    >
                      <social.icon className="h-4 w-4" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button asChild className="gap-2">
                  <a href="/Mohammad_Shaad_Resume.pdf" download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}