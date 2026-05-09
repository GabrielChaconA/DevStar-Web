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
      title: "Sistema de Reservaciones",
      description:
        "Plataforma completa de gestión de reservas con calendario interactivo, notificaciones automáticas y panel de administración.",
      techs: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
      color: "from-primary/20 to-wine/20",
      image: "/projects/reservaciones.png",
      video: null,
    },
    {
      title: "Catálogo de Películas",
      description:
        "Aplicación web para explorar y descubrir películas con filtros avanzados, reseñas y sistema de favoritos.",
      techs: ["React", "Node.js", "MongoDB", "API REST"],
      color: "from-wine/20 to-primary/20",
      image: "/projects/peliculas.png",
      video: null,
    },
    {
      title: "Dashboard Administrativo",
      description:
        "Panel de control empresarial con analíticas en tiempo real, gestión de usuarios y reportes automatizados.",
      techs: ["Next.js", "PostgreSQL", "Charts", "Auth"],
      color: "from-primary/20 to-wine/20",
      image: "/projects/dashboard.png",
      video: "/projects/dashboard-demo.mp4",
    },
    {
      title: "Página para Negocio Local",
      description:
        "Sitio web profesional para negocio local con catálogo de productos, formulario de contacto y integración con redes sociales.",
      techs: ["Vue.js", "Laravel", "Stripe", "SEO"],
      color: "from-wine/20 to-primary/20",
      image: "/projects/negocio.png",
      video: null,
    },
  ];

  const visibleProjects = projects.slice(0, 3);

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
            visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
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
                      >
                        <Github size={16} className="mr-2" />
                        GitHub
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
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

