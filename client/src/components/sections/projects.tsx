import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import { useState } from "react";

const researchPapers = [
  {
    title: "Early Detection of Retinopathy of Prematurity",
    description: "Research paper focusing on early detection methods for Retinopathy of Prematurity using advanced image processing and machine learning techniques.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    paper: "https://arxiv.org/abs/your-paper-id",
    tech: ["Deep Learning", "Image Processing", "Medical Imaging", "Python", "TensorFlow"]
  },
  {
    title: "Hyperspectral Image Classification using State of the Art Mamba LLMs",
    description: "Novel approach to hyperspectral image classification leveraging the power of Mamba Language Models for improved accuracy and efficiency.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    paper: "https://arxiv.org/abs/your-paper-id",
    tech: ["Mamba LLMs", "Hyperspectral Imaging", "Deep Learning", "Computer Vision"]
  },
  {
    title: "Spatial Audio Research",
    description: "Presented a unique approach to spatial audio processing, developing a comprehensive database of impulse responses that enhanced research efficiency by 30%.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    paper: "https://arxiv.org/abs/your-paper-id",
    tech: ["Audio Processing", "DSP", "MATLAB", "Python", "Signal Processing"]
  }
];

const projects = [
  {
    title: "Image Compression and Product Management Platform",
    description: "Designed a scalable platform to manage product lifecycles with Kafka for message queues. Enhanced storage efficiency with AWS S3 integration and implemented Redis caching to reduce query response time by 40%.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    github: "https://github.com/mohammadshaad/product-management",
    demo: null,
    tech: ["Golang", "Kafka", "AWS S3", "Redis", "Docker", "PostgreSQL"]
  },
  {
    title: "Job Search Platform",
    description: "Developed a platform enabling seamless job matching for seekers and employers. Implemented secure authentication with Auth0, real-time data management, and dynamic filtering for an improved search experience.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    github: "https://github.com/mohammadshaad/job-platform",
    demo: "https://job-platform.vercel.app",
    tech: ["Next.js", "TypeScript", "PRISMA", "MongoDB", "Auth0"]
  },
  {
    title: "EMart Microservices",
    description: "Developed a microservices app that reduced response time by 35% through optimized service orchestration. Improved system reliability by 25% with fault-tolerant microservices and containerized deployment.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
    github: "https://github.com/mohammadshaad/emart",
    demo: null,
    tech: ["Nginx", "Docker", "Java", "Python", "Node.js"]
  }
];

export function Projects() {
  const [activeSection, setActiveSection] = useState<'research' | 'projects'>('research');

  return (
    <section id="works" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Works
          </h2>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex items-center p-1 bg-primary/10 rounded-full">
              <motion.div
                className="absolute h-[calc(100%-8px)] bg-primary rounded-full"
                initial={false}
                animate={{
                  left: activeSection === 'research' ? '4px' : 'calc(100% - 40% - 4px)',
                  width: activeSection === 'research' ? '60%' : '40%'
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              <button
                onClick={() => setActiveSection('research')}
                className={`relative px-8 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeSection === 'research' ? 'text-primary-foreground' : 'text-primary'
                }`}
              >
                Research Papers
              </button>
              <button
                onClick={() => setActiveSection('projects')}
                className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeSection === 'projects' ? 'text-primary-foreground' : 'text-primary'
                }`}
              >
                Projects
              </button>
            </div>
          </div>

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            {activeSection === 'research' ? (
              <motion.div
                key="research"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {researchPapers.map((paper, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group h-full"
                  >
                    <Card className="overflow-hidden h-full border-0 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-all duration-300 hover:shadow-primary/20 flex flex-col">
                      <div className="aspect-video relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                        <img
                          src={paper.image}
                          alt={paper.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader className="relative z-20 -mt-12 pt-0">
                        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                          {paper.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-20 flex-1 flex flex-col">
                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {paper.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {paper.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                          asChild
                        >
                          <a href={paper.paper} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Read Paper
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group h-full"
                  >
                    <Card className="overflow-hidden h-full border-0 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-all duration-300 hover:shadow-primary/20 flex flex-col">
                      <div className="aspect-video relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader className="relative z-20 -mt-12 pt-0">
                        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-20 flex-1 flex flex-col">
                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2 mt-auto">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                          {project.demo && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                              asChild
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}