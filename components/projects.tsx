"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import {
  Calendar,
  Film,
  LayoutDashboard,
  Store,
  ExternalLink,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "SYS-GEST-CLINIC",
      description:
        "Sistema premium de gestión y control de citas clínicas, expedientes de pacientes y Business Intelligence (BI) optimizado para clínicas de rehabilitación.",
      techs: ["React", "FastAPI", "PostgreSQL", "Docker"],
      color: "from-wine/20 to-primary/20",
      image: "/respository images/Gestion clinica/logoSysGesCli.jpg",
      video: null,
      github: "https://github.com/IsraelRamirezMorales/SYS-GEST-CLINIC.git",
      demo: "/proyectos/sys-gest-clinic",
    },
  ];

  const visibleProjects = projects;

  return (
    <section id="proyectos" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una muestra de nuestro trabajo. Cada proyecto refleja nuestra
            dedicación a la calidad y la innovación.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.length > 0 ? (
            <>
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                    {/* Project Preview */}
                    <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.color}`}>
                      {project.video ? (
                        <video 
                          src={project.video} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                      ) : (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                      )}
                      
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,80,80,0.1),transparent_70%)]" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-border hover:border-primary/50 hover:bg-primary/5"
                          asChild
                        >
                          <a
                            href={project.github || "#"}
                            target={project.github && project.github !== "#" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                          >
                            <Github size={16} className="mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                          asChild
                        >
                          <a
                            href={project.demo || "#"}
                            target={project.demo && project.demo.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Next Project Placeholder Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass rounded-2xl border border-dashed border-border hover:border-primary/50 transition-all duration-500 h-full flex flex-col items-center justify-center p-8 text-center min-h-[350px]"
              >
                <div className="size-12 rounded-full border border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground mb-4 bg-secondary/5">
                  <span className="text-xl font-light">+</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  Next Project
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
                  Planning and designing the next major software project. Stay tuned!
                </p>
              </motion.div>
            </>
          ) : (
            <div className="col-span-full py-20 text-center glass rounded-2xl border border-dashed border-border/50">
              <p className="text-muted-foreground text-lg">
                Próximamente más proyectos...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

