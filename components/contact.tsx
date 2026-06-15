"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { Mail, MessageCircle, Linkedin, Facebook, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "gabochack7@gmail.com",
    href: "mailto:gabochack7@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 442 193 2657",
    href: "https://wa.me/524421932657",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "DevStar Labs",
    href: "https://www.linkedin.com/company/116010531/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "DevStar Labs",
    href: "https://www.facebook.com/profile.php?id=61589430981129",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contacto" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-primary text-sm font-medium">
              Comencemos algo increíble
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Construyamos tu{" "}
            <span className="text-primary text-glow-red">próximo proyecto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos listos para convertir tus ideas en realidad. Contáctanos y
            empecemos a trabajar juntos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:glow-red-sm transition-all">
                  <link.icon size={28} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                  <p className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-primary font-medium">
                ¿Listo para empezar?
              </span>{" "}
              Estamos a solo un clic de distancia. Contáctanos por cualquiera de
              estos medios y te responderemos en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
