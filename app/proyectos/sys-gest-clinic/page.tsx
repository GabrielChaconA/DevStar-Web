"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  LayoutDashboard,
  Terminal,
  CheckCircle2,
  FolderGit,
  Users,
  Github,
  Check,
  Copy,
  AlertTriangle,
  FileText,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SysGestClinicPage() {
  const images = [
    {
      src: "/respository images/Gestion clinica/LOGIN.png",
      alt: "Acceso Seguro (Login) - Autenticación con cifrado Bcrypt y roles.",
    },
    {
      src: "/respository images/Gestion clinica/HOME PAGE.png",
      alt: "Panel Principal (Home Page) - Vista general rápida para terapeutas.",
    },
    {
      src: "/respository images/Gestion clinica/CALENDARIO.png",
      alt: "Calendario de Citas - Prevención automática de empalme de horarios.",
    },
    {
      src: "/respository images/Gestion clinica/REGISTROS.png",
      alt: "Business Intelligence (BI) - Reportes de rendimiento y pacientes.",
    },
    {
      src: "/respository images/Gestion clinica/Agregar un paciente.png",
      alt: "Registro de Pacientes - Formulario interactivo con validaciones.",
    },
    {
      src: "/respository images/Gestion clinica/vista de todos mis pacientes.png",
      alt: "Búsqueda de Pacientes - Listado y filtrado global de expedientes.",
    },
    {
      src: "/respository images/Gestion clinica/mis pacientes.png",
      alt: "Mis Pacientes - Listado filtrado del especialista autenticado.",
    },
    {
      src: "/respository images/Gestion clinica/Notas iniciales del paciente.png",
      alt: "Historial Clínico - Registro de notas de evolución y estado del paciente.",
    },
    {
      src: "/respository images/Gestion clinica/Cambiar foto de perfil.png",
      alt: "Perfil del Terapeuta - Actualización de foto de perfil y datos.",
    },
    {
      src: "/respository images/Gestion clinica/manejo de errores.png",
      alt: "Control de Errores - Validación visual en tiempo real de colisión de citas.",
    },
    {
      src: "/respository images/Gestion clinica/ventana emergente de pdf.png",
      alt: "Configurador de PDF - Configuración previa de los datos a exportar.",
    },
    {
      src: "/respository images/Gestion clinica/pdf exportado.png",
      alt: "PDF Generado - Documento profesional listo para imprimir o enviar.",
    },
  ];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("docker-compose up --build -d");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,rgba(220,80,80,0.1),transparent_60%)] pointer-events-none z-0" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors">
            DevStar<span className="text-primary">.</span>Labs
          </Link>
          <Button variant="outline" size="sm" className="border-border hover:border-primary/50" asChild>
            <Link href="/#proyectos">
              <ArrowLeft className="size-4 mr-2" />
              Volver a Proyectos
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        
        {/* Project Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-2 mb-6"
          >
            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">FastAPI</span>
            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">React</span>
            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">PostgreSQL</span>
            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">Docker</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-primary to-wine bg-clip-text text-transparent"
          >
            SYS-GEST-CLINIC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed text-balance"
          >
            Una solución digital integral y premium diseñada para optimizar y automatizar el control de agendas, expedientes de pacientes y reportes operativos en clínicas de fisioterapia y rehabilitación física.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button variant="outline" className="border-border hover:border-primary/50 text-foreground font-semibold" asChild>
              <a href="https://github.com/IsraelRamirezMorales/SYS-GEST-CLINIC.git" target="_blank" rel="noopener noreferrer">
                <Github className="size-4 mr-2" />
                Repositorio en GitHub
              </a>
            </Button>
            <Button variant="ghost" className="hover:bg-secondary/50 text-muted-foreground hover:text-foreground" asChild>
              <Link href="/#proyectos">
                <ArrowLeft className="size-4 mr-2" />
                Volver a Proyectos
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Media & Descriptions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Screenshot Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass border border-border rounded-3xl p-4 shadow-xl relative overflow-hidden"
            >
              {/* Main Image Container (Ensures vertical mobile screenshots fit fully) */}
              <div className="h-[550px] w-full flex items-center justify-center bg-secondary/10 rounded-2xl border border-border overflow-hidden relative">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-full w-auto object-contain transition-all duration-300"
                />
              </div>

              {/* Subcaption */}
              <p className="text-center text-xs text-muted-foreground mt-3 italic font-medium px-4">
                {activeImage.alt}
              </p>

              {/* Thumbnails list */}
              <div className="flex justify-center gap-3 mt-4 overflow-x-auto py-1">
                {images.map((img) => (
                  <button
                    key={img.src}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-secondary/20 relative ${
                      activeImage.src === img.src
                        ? "border-primary shadow-md shadow-primary/25 opacity-100 scale-102"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img src={img.src} alt="" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Description & Purpose */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <LayoutDashboard className="text-primary size-6" />
                Propósito del Proyecto
              </h3>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  <strong>SYS-GEST-CLINIC</strong> nació con el objetivo de apoyar a <strong>micro, pequeñas y medianas empresas (MiPyMEs)</strong> del sector salud a dar el salto hacia la transformación digital. Muchas clínicas operan con registros manuales en papel u hojas de cálculo propensas a errores de duplicidad.
                </p>
                <p>
                  El sistema proporciona una plataforma centralizada y accesible diseñada bajo altos estándares de usabilidad móvil (Mobile First) y directrices de minimalismo utilitario oscuro que:
                </p>
                <ul className="space-y-3 pt-2 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary size-5 shrink-0 mt-0.5" />
                    <span>Previene la duplicidad y el empalme de citas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary size-5 shrink-0 mt-0.5" />
                    <span>Automatiza el cálculo de cobros y adeudos por paciente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary size-5 shrink-0 mt-0.5" />
                    <span>Facilita la toma de decisiones administrativas mediante estadísticas visuales de rendimiento.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary size-5 shrink-0 mt-0.5" />
                    <span>Simplifica la administración diaria del personal clínico y administrativo en un solo lugar.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modules details */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <Calendar className="text-primary size-6" />
                Módulos y Funcionalidades Detalladas
              </h3>
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="glass border border-border/60 rounded-xl p-5 space-y-2">
                  <h4 className="font-bold text-foreground">Autenticación y Perfiles</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Acceso con roles diferenciados para Médicos Directores y Fisioterapeutas. Migración automática de contraseñas de texto plano a Bcrypt en el primer inicio de sesión.
                  </p>
                </div>
                <div className="glass border border-border/60 rounded-xl p-5 space-y-2">
                  <h4 className="font-bold text-foreground">Gestión de Expedientes</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Registro de aseguradoras, médico remitente, contacto e indicaciones especiales. Historial de notas rápido y actualización automática del adeudo total.
                  </p>
                </div>
                <div className="glass border border-border/60 rounded-xl p-5 space-y-2">
                  <h4 className="font-bold text-foreground">Agenda Inteligente</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Permite agendar Consultas, Terapias y Sesiones de Alberca. Su algoritmo de colisión valida de forma automática los horarios para prevenir sobrecupos.
                  </p>
                </div>
                <div className="glass border border-border/60 rounded-xl p-5 space-y-2">
                  <h4 className="font-bold text-foreground">Reportes BI Clínicos</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Gráficos circulares que indican el volumen de asistencias y tipos de tratamientos. Desglose comparativo de pacientes atendidos por cada especialista.
                  </p>
                </div>
              </div>
            </div>

            {/* Ventanas e Interfaces del Sistema */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <Layers className="text-primary size-6" />
                Ventanas e Interfaces del Sistema
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                El sistema cuenta con una arquitectura de vistas diseñada bajo la filosofía <strong>Mobile-First</strong>, permitiendo a los terapeutas gestionar la clínica de forma ágil desde cualquier dispositivo móvil o de escritorio:
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="border border-border/40 rounded-xl p-4 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <h4 className="font-semibold text-sm text-foreground mb-1">Acceso &amp; Perfiles</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Vistas de <strong>Login</strong> de alta seguridad y panel de <strong>Mi Perfil</strong> para cambiar foto y datos personales.
                  </p>
                </div>
                <div className="border border-border/40 rounded-xl p-4 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <h4 className="font-semibold text-sm text-foreground mb-1">Panel de Control &amp; Agenda</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong>Dashboard / Home Page</strong> interactivo y <strong>Calendario Clínico</strong> dinámico por terapeuta.
                  </p>
                </div>
                <div className="border border-border/40 rounded-xl p-4 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <h4 className="font-semibold text-sm text-foreground mb-1">Búsqueda &amp; Listado</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Vista global de <strong>Todos mis pacientes</strong> con filtros avanzados y vista personalizada de <strong>Mis pacientes</strong>.
                  </p>
                </div>
                <div className="border border-border/40 rounded-xl p-4 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <h4 className="font-semibold text-sm text-foreground mb-1">Expedientes &amp; Fichas</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Ventanas de <strong>Agregar Paciente</strong> y vista detallada de <strong>Notas Iniciales</strong> para el historial clínico.
                  </p>
                </div>
              </div>
            </div>

            {/* Manejo de Errores */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <AlertTriangle className="text-primary size-6" />
                Manejo de Errores y Resiliencia
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Para garantizar la integridad de los datos y evitar confusiones operativas en la clínica, se implementó un control de errores robusto en tiempo real:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary size-5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Validación de Colisiones:</strong> El backend de FastAPI y triggers en PostgreSQL impiden empalmar citas de un mismo terapeuta o en una misma sala.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary size-5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Notificaciones Visuales:</strong> Como se observa en la captura <em>Manejo de Errores</em>, el sistema presenta alertas emergentes interactivas con detalles de validaciones de campos y accesos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary size-5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Integridad Relacional:</strong> Restricciones automáticas de base de datos impiden eliminar pacientes con adeudos o citas activas sin la debida confirmación administrativa.
                  </span>
                </li>
              </ul>
            </div>

            {/* Exportación a PDF */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <FileText className="text-primary size-6" />
                Módulo de Exportación a PDF
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                El sistema facilita el intercambio de información médica y administrativa con aseguradoras y pacientes mediante un flujo de generación de documentos interactivo:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border/40 rounded-xl p-4 bg-secondary/5">
                  <h4 className="font-semibold text-sm text-foreground mb-1">Configuración Previa</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Al solicitar un reporte, se despliega una <strong>ventana emergente</strong> interactiva para seleccionar qué notas de evolución e historial clínico incluir.
                  </p>
                </div>
                <div className="border border-border/40 rounded-xl p-4 bg-secondary/5">
                  <h4 className="font-semibold text-sm text-foreground mb-1">Formato Formal Limpio</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    El backend genera un documento <strong>PDF formal</strong> que incluye la marca del consultorio, detalles del paciente, notas de evolución y firmas correspondientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Developers / Team */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <Users className="text-primary size-6" />
                Equipo de Desarrollo
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border/20 pb-3 gap-2">
                  <div>
                    <h4 className="font-bold text-foreground">Gabriel Chacón Arellano</h4>
                    <p className="text-xs text-muted-foreground">Desarrollo Backend &amp; Arquitectura</p>
                  </div>
                  <span className="text-xs text-primary font-medium px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    PostgreSQL, FastAPI, Docker
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-1 gap-2">
                  <div>
                    <h4 className="font-bold text-foreground">Israel Ramírez Morales</h4>
                    <p className="text-xs text-muted-foreground">Desarrollo Frontend &amp; UI/UX</p>
                  </div>
                  <span className="text-xs text-primary font-medium px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    React, Tailwind UI, Performance
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar Specs & Setup */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Specs */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold border-b border-border/40 pb-4">
                Especificaciones Técnicas
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground mb-1">Arquitectura Backend</dt>
                  <dd className="font-semibold text-foreground">Python 3.12, FastAPI, Uvicorn, Bcrypt</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Arquitectura Frontend</dt>
                  <dd className="font-semibold text-foreground">React 18, Vite, CSS Vanilla Premium, Lucide Icons</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Base de Datos</dt>
                  <dd className="font-semibold text-foreground">PostgreSQL 15 (Triggers y restricciones relacionales)</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground mb-1">Despliegue</dt>
                  <dd className="font-semibold text-foreground">Docker &amp; Docker Compose</dd>
                </div>
              </dl>
            </div>

            {/* Docker Commands */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <Terminal className="text-primary size-5" />
                Despliegue Local
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La aplicación está dockerizada para evitar conflictos de puertos o dependencias locales en tu equipo.
              </p>
              
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground font-mono">Paso 1: Levantar servicios con Docker Compose</label>
                <div className="flex items-center justify-between bg-black/60 border border-border rounded-xl p-4 font-mono text-sm overflow-x-auto gap-3">
                  <span className="text-glow-red text-[#98c379] font-medium shrink-0">
                    docker-compose up --build -d
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className={`p-2 rounded-lg border transition-all shrink-0 hover:bg-primary/10 ${
                      copied
                        ? "bg-green-950/20 border-green-500/50 text-green-400"
                        : "bg-secondary/20 border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                  Esto creará la base de datos local <code>sysgest_db</code>, compilará el backend en el puerto <code>8001</code> y el frontend de React en el puerto <code>5174</code> de forma automática, ejecutando scripts de semilla SQL en el arranque.
                </p>
              </div>
            </div>

            {/* Project Folder Structure */}
            <div className="glass border border-border rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3 border-b border-border/40 pb-4">
                <FolderGit className="text-primary size-5" />
                Estructura del Repositorio
              </h3>
              <div className="bg-black/60 border border-border rounded-xl p-4 font-mono text-xs overflow-x-auto leading-relaxed text-[#b4c2d4]">
                <div className="text-amber-500 font-bold">SYS-GEST-CLINIC/</div>
                <div>├── <span className="text-amber-500 font-bold">backend/</span> <span className="text-[#5c6370] italic">// Servicio FastAPI</span></div>
                <div>│   ├── <span className="text-amber-500 font-bold">app/</span> <span className="text-[#5c6370] italic">// API principal</span></div>
                <div>│   └── <span className="text-amber-500 font-bold">database/</span> <span className="text-[#5c6370] italic">// Esquemas y SQL seeds</span></div>
                <div>├── <span className="text-amber-500 font-bold">frontend/</span> <span className="text-[#5c6370] italic">// Interfaz React</span></div>
                <div>│   ├── <span className="text-amber-500 font-bold">src/</span> <span className="text-[#5c6370] italic">// Vistas y componentes</span></div>
                <div>│   └── <span className="text-amber-500 font-bold">public/</span> <span className="text-[#5c6370] italic">// Recursos estáticos</span></div>
                <div>├── <span className="text-blue-400">docker-compose.yml</span></div>
                <div>└── <span className="text-blue-400">README.md</span></div>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/10 py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; 2026 DevStar Labs. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
