"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Server,
  Palette,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Landing pages impactantes, sistemas administrativos completos y dashboards interactivos que transforman tu presencia digital.",
    features: ["Landing Pages", "Sistemas Administrativos", "Dashboards"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Arquitecturas robustas y escalables con Laravel, Node.js, APIs REST y bases de datos optimizadas para alto rendimiento.",
    features: ["Laravel", "Node.js", "APIs REST", "Bases de Datos"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces modernas y responsivas que cautivan usuarios. Diseñamos experiencias memorables centradas en el usuario.",
    features: ["Diseño Responsive", "Interfaces Modernas", "UX Research"],
  },
  {
    icon: Settings,
    title: "Soluciones Personalizadas",
    description:
      "Automatización de procesos, sistemas internos e integraciones a medida que optimizan tu operación empresarial.",
    features: ["Automatización", "Sistemas Internos", "Integraciones"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos servicios completos de desarrollo de software adaptados a
            las necesidades específicas de tu negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 border border-border h-full hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-wine/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:glow-red-sm transition-all duration-300">
                    <service.icon size={32} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-muted-foreground border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all group/link"
                  >
                    <span>Saber más</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
