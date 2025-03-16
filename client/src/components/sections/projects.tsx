import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real-Time Data Sync",
    description: "System for real-time synchronization of data between Google Sheets and PostgreSQL with CRUD operations",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8"
  },
  {
    title: "Women's Safety Product",
    description: "Built a system suggesting the safest path for users with CCTV monitoring dashboard",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "Turn-Based Chess Game",
    description: "Chess-like strategy game with unique character movements on a 5x5 grid",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007"
  },
  {
    title: "Polkadot Node Setup",
    description: "Ansible Playbook for setting up Polkadot full nodes with Nginx reverse proxy",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279"
  },
  {
    title: "KlubMingle",
    description: "University club task management app focused on task visibility and collaboration",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
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
