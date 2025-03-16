import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      <div className="container px-4 py-32 md:py-40 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/10"
          >
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Mohammad Shaad"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hello, I'm Mohammad Shaad
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Full Stack Developer & UX Designer
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 hover:bg-primary/5 transition-colors"
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce hover:bg-primary/5"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}