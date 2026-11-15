import type { Lesson } from "@/lib/types";
// Complemento del curso oficial "Kiro: Getting Started" (AWS Skill Builder).
export const day17: Lesson = {
  day: 17,
  slug: "capacidades-del-curso-oficial",
  title: "Capacidades de Kiro: visión del curso oficial",
  section: "AVANZADO",
  estimatedMinutes: 16,
  icon: "concept-que-es-kiro-intro",
  objectives: [
    "Resumir las capacidades principales de Kiro tal como las presenta el curso oficial de AWS",
    "Reconocer los conceptos técnicos previos: ingeniería de peticiones, IDE, terminal",
    "Ubicar seguridad, privacidad, colaboración y compatibilidad con extensiones",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El curso oficial describe Kiro como un IDE con IA, construido sobre Visual Studio Code, que acompaña el trabajo desde el prototipo hasta la producción. Su núcleo es el desarrollo basado en especificaciones: guía la transformación de ideas de alto nivel en requisitos estructurados, diseños y tareas de implementación.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Kiro", icon: "concept-que-es-kiro-intro" },
        { service: "Chat", icon: "concept-chat" },
        { service: "Autopilot", icon: "concept-autopilot" },
        { service: "Vibe y Spec", icon: "concept-vibe-spec" },
      ],
    },
    { type: "heading", level: 2, text: "Tres piezas que lo distinguen" },
    {
      type: "list",
      items: [
        "Interfaz de chat: conversas en lenguaje natural con agentes de IA. Sirve para preguntar, pedir explicaciones, refactorizar, optimizar o generar componentes, con contexto de tu base de código.",
        "Steering: conocimiento del proyecto que persiste entre sesiones, definido en archivos markdown.",
        "Agent Hooks: automatizaciones que se disparan con eventos como guardar o crear un archivo.",
      ],
    },
    { type: "heading", level: 2, text: "Autopilot y Supervised" },
    {
      type: "paragraph",
      text:
        "En modo Autopilot, Kiro trabaja de forma autónoma en varios archivos y aplica cambios relacionados sin pedir aprobación paso a paso. Es útil para tareas rutinarias o patrones bien definidos. En modo Supervised revisas y apruebas cada cambio antes de aplicarlo, con revisión de cambios y la posibilidad de revertir. Un sistema de comandos de confianza define qué operaciones pueden ejecutarse solas y cuáles exigen aprobación explícita. Cambias de modo con el interruptor de Autopilot del panel de chat.",
    },
    { type: "heading", level: 2, text: "Conceptos técnicos de apoyo" },
    {
      type: "list",
      items: [
        "Ingeniería de peticiones: estructura tus consultas con objetivo claro, contexto relevante y restricciones, y refínalas iterando sobre las respuestas.",
        "Conceptos de IDE: finalización de código, resaltado de sintaxis y depuración integrada siguen disponibles.",
        "Terminal: Kiro puede generar y ejecutar comandos, e interpretar sus resultados para sugerir los siguientes pasos.",
      ],
    },
    { type: "heading", level: 2, text: "Seguridad, colaboración e integración" },
    {
      type: "list",
      items: [
        "Seguridad y privacidad: construido sobre infraestructura de AWS, con cifrado de datos en tránsito y en reposo, varios métodos de autenticación y opciones configurables de datos y telemetría. El aislamiento de espacios de trabajo separa proyectos y equipos.",
        "Colaboración: los equipos comparten specs y estándares con control de versiones para mantener patrones consistentes entre proyectos.",
        "Integración: terminal, control de versiones y proveedores de autenticación. Es compatible con extensiones de VS Code a través de OpenVSX.",
      ],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Steering y MCP se presentan aquí a vuelo de pájaro. El tercer curso de la serie (Powers) los trata en detalle.",
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es el núcleo del enfoque de Kiro según el curso oficial?",
      options: [
        "Autocompletar líneas de código",
        "Convertir ideas de alto nivel en requisitos, diseño y tareas (desarrollo basado en especificaciones)",
        "Alojar servidores",
        "Traducir código entre lenguajes",
      ],
      correctIndex: 1,
      explanation: "El desarrollo basado en especificaciones transforma ideas en requisitos estructurados, diseños y tareas.",
    },
    {
      question: "¿Qué diferencia a Supervised de Autopilot?",
      options: [
        "Supervised pide revisar y aprobar cada cambio antes de aplicarlo",
        "Supervised no usa IA",
        "Autopilot no modifica archivos",
        "Son idénticos",
      ],
      correctIndex: 0,
      explanation: "Autopilot aplica cambios de forma autónoma; Supervised exige aprobación de cada cambio.",
    },
    {
      question: "¿Cómo accede Kiro a extensiones de VS Code?",
      options: ["No es compatible", "A través de OpenVSX", "Solo con licencia aparte", "Solo por terminal"],
      correctIndex: 1,
      explanation: "La compatibilidad con extensiones de VS Code llega a través de OpenVSX.",
    },
  ],
};
