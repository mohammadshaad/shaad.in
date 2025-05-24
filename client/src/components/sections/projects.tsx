import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Code2, Database, Server, Cpu, Cloud, Terminal, Layers } from "lucide-react";
import { useState } from "react";

// Icon mapping for technologies
const techIcons: { [key: string]: any } = {
  "Golang": Code2,
  "Kafka": Server,
  "AWS S3": Cloud,
  "Redis": Database,
  "Docker": Terminal,
  "PostgreSQL": Database,
  "Next.js": Code2,
  "TypeScript": Code2,
  "PRISMA": Database,
  "MongoDB": Database,
  "Auth0": Server,
  "Nginx": Server,
  "Java": Code2,
  "Python": Code2,
  "Node.js": Code2,
  "Deep Learning": Cpu,
  "Image Processing": Layers,
  "Medical Imaging": Layers,
  "TensorFlow": Cpu,
  "Mamba LLMs": Cpu,
  "Hyperspectral Imaging": Layers,
  "Computer Vision": Layers,
  "Signal Processing": Cpu,
  "MATLAB": Code2
};

const researchPapers = [
  {
    title: "Early Detection of Retinopathy of Prematurity",
    description: "Research paper focusing on early detection methods for Retinopathy of Prematurity using advanced image processing and machine learning techniques.",
    image: "https://educate.choroida.com/wp-content/uploads/2024/05/Retinopathy-of-Prematurity4.jpg",
    paper: "https://ieeexplore.ieee.org/document/10895897",
    tech: ["Deep Learning", "Image Processing", "Medical Imaging", "Python", "TensorFlow"],
    isUnderPublication: false
  },
  {
    title: "Hyperspectral Image Classification using Ensemble Learning and SOTA LLMs",
    description: "This paper presents a novel approach to hyperspectral image classification using ensemble learning and state-of-the-art language models. The proposed method combines the strengths of multiple classifiers to achieve improved accuracy and efficiency.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    paper: "",
    tech: ["Mamba LLMs", "Hyperspectral Imaging", "Deep Learning", "Computer Vision"],
    isUnderPublication: true
  },
  {
    title: "DUAL-PATH CNN BASED ANGLE OF ARRIVAL PREDICTION",
    description: "This paper presents a novel approach to angle of arrival (AOA) prediction using dual-path convolutional neural networks (CNNs). The proposed method leverages the strengths of both single-path and dual-path CNNs to achieve improved accuracy and efficiency.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    paper: "",
    tech: ["Deep Learning", "Computer Vision", "Signal Processing", "MATLAB", "Python"],
    isUnderPublication: true
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
                      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
                        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-4 p-4">
                            {paper.tech.slice(0, 6).map((tech, i) => {
                              const Icon = techIcons[tech] || Code2;
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center justify-center"
                                >
                                  <Icon className="w-8 h-8 text-primary/80" />
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <CardHeader className="relative z-20 -mt-12 pt-0">
                        <div className="flex flex-col gap-2">
                          <CardTitle className="text-xl font-bold text-foreground">
                            {paper.title}
                          </CardTitle>
                          {paper.isUnderPublication && (
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 shadow-sm">
                                Under Publication
                              </span>
                            </div>
                          )}
                        </div>
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
                        {!paper.isUnderPublication && paper.paper && (
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
                        )}
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
                      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
                        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-4 p-4">
                            {project.tech.slice(0, 6).map((tech, i) => {
                              const Icon = techIcons[tech] || Code2;
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center justify-center"
                                >
                                  <Icon className="w-8 h-8 text-primary/80" />
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <CardHeader className="relative z-20 -mt-12 pt-0">
                        <CardTitle className="text-xl font-bold text-foreground">
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