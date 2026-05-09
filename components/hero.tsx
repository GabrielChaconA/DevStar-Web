"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/particles-background";

const stats = [
  { value: "50+", label: "Proyectos" },
  { value: "3", label: "Expertos" },
  { value: "100%", label: "Dedicación" },
];

const badges = [
  { icon: Code2, label: "Full Stack" },
  { icon: Database, label: "Backend" },
  { icon: Sparkles, label: "UI/UX" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <ParticlesBackground />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-wine/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary"
              >
                <badge.icon size={16} />
                {badge.label}
              </motion.div>
            ))}
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Dev</span>
            <span className="text-primary text-glow-red">Star</span>
            <span className="text-foreground"> Labs</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-balance"
          >
            Desarrollo de software web, backend y soluciones tecnológicas a medida.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-red px-8 py-6 text-lg"
            >
              <a href="#proyectos" className="flex items-center gap-2">
                Ver Proyectos
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary px-8 py-6 text-lg"
            >
              <a href="#contacto">Contáctanos</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary text-glow-red mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-wine/20 to-primary/20 rounded-2xl blur-2xl" />
            
            {/* Dashboard Mockup */}
            <div className="relative glass rounded-2xl border border-border/50 p-6 gradient-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <div className="w-3 h-3 rounded-full bg-wine/60" />
                <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-32 rounded-lg bg-secondary/50 flex items-center justify-center">
                  <Code2 size={40} className="text-primary/50" />
                </div>
                <div className="space-y-4">
                  <div className="h-14 rounded-lg bg-primary/10 border border-primary/20" />
                  <div className="h-14 rounded-lg bg-wine/10 border border-wine/20" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-16 rounded-lg bg-secondary/30 border border-border/30"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
