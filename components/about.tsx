"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { Target, Eye, Heart, Code2, Palette, Server, Github } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Crear soluciones tecnológicas innovadoras que impulsen el éxito de nuestros clientes, combinando creatividad y excelencia técnica.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser reconocidos como un referente en desarrollo de software, destacando por nuestra calidad, innovación y compromiso.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Integridad, innovación constante, trabajo en equipo, y un enfoque inquebrantable en la satisfacción del cliente.",
  },
];

const team = [
  {
    name: "Gabriel Chacón",
    role: "Project Manager & Backend Lead",
    description:
      "Lidera proyectos con visión estratégica y expertise técnico en arquitecturas backend robustas.",
    icon: Server,
    techs: ["Python", "Java", "JavaScript", "PostgreSQL", "MariaDB", "SQL Server", "MongoDB"],
    github: "https://github.com/GabrielChaconA",
    image: "/team/gabo.jpg",
  },
  {
    name: "Israel Ramírez",
    role: "Frontend Developer & UI Designer",
    description:
      "Crea interfaces elegantes y experiencias de usuario memorables con atención al detalle.",
    icon: Palette,
    techs: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/IsraelRamirezMorales",
    image: "/team/isra.jpg",
  },
  {
    name: "André García",
    role: "Backend Developer & Technical Advisor",
    description:
      "Aporta soluciones técnicas innovadoras y arquitecturas escalables para proyectos complejos.",
    icon: Code2,
    techs: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/NestorGXD",
    image: "/team/andre.jpg",
  },
];

function MemberAvatar({ member }: { member: any }) {
  const [error, setError] = React.useState(false);

  return (
    <div className="relative w-24 h-24 mx-auto mb-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-wine rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
      <div className="relative w-full h-full bg-secondary rounded-2xl flex items-center justify-center overflow-hidden">
        {!error ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={() => setError(true)}
          />
        ) : (
          <member.icon size={36} className="text-primary" />
        )}
      </div>
    </div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Sobre Nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Construimos el Futuro Digital
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            DevStar Labs nació de la pasión por crear software excepcional.
            Somos un equipo de desarrolladores comprometidos con la innovación y
            la excelencia técnica.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 border border-border h-full hover:border-primary/50 transition-all duration-300 gradient-border">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-foreground">Nuestro Equipo</h3>
          <p className="text-muted-foreground mt-4">
            Profesionales apasionados por la tecnología
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center h-full flex flex-col">
                {/* Avatar */}
                <MemberAvatar member={member} />

                <h4 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="mt-auto pt-4 border-t border-border flex justify-center gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Github size={20} />
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
