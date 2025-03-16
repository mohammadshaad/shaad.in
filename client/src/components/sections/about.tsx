import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
