import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§El panel de Kiro). Req 3.6.
export const day06: Lesson = {
  day: 6,
  slug: "panel-de-kiro",
  title: "El panel de Kiro: panorama",
  section: "MEDIO",
  estimatedMinutes: 16,
  icon: "concept-panel-kiro",
  objectives: [
    "Reconocer las cinco secciones propias del panel de Kiro que no existen en VS Code",
    "Entender para qué sirve cada sección a nivel de panorama",
    "Saber qué secciones se profundizan en los otros cursos de la serie",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Cuando abres un proyecto en Kiro, el panel lateral izquierdo tiene todo lo que ya conoces de VS Code y, además, unas secciones propias que no existen en VS Code. No hace falta dominarlas todas ahora: el objetivo de esta lección es que sepas dónde está cada una y para qué sirve.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "El panel de Kiro", icon: "concept-panel-kiro" },
        { service: "Vibe y Spec", icon: "concept-vibe-spec" },
      ],
    },
    { type: "heading", level: 2, text: "Las cinco secciones propias" },
    {
      type: "list",
      items: [
        "Specs — artefactos de desarrollo estructurado (requirements → design → tasks).",
        "Agent Hooks — automatización por eventos: se disparan al guardar archivos, ejecutar herramientas, etc.",
        "Steering — conocimiento persistente del proyecto: archivos markdown que le dicen a Kiro cómo funciona tu proyecto.",
        "Agent Skills — paquetes de instrucciones portables que Kiro activa bajo demanda.",
        "MCP Servers — integraciones de herramientas externas vía Model Context Protocol.",
      ],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "No necesitas usar todas estas secciones hoy. En este curso de introducción nos centramos en el chat y el modo Vibe. Las Specs son el primer curso de la serie; los hooks, el steering, las skills y los MCP son el tercero.",
    },
    { type: "heading", level: 2, text: "Un fragmento de steering, para situarte" },
    {
      type: "paragraph",
      text:
        "Los steering files son markdown con conocimiento del proyecto. No los vas a escribir en este curso, pero conviene ver su forma para reconocerlos cuando los encuentres en la sección Steering:",
    },
    {
      type: "code",
      lang: "markdown",
      title: "Ejemplo mínimo de steering file (solo para reconocerlo)",
      code:
        "# Convenciones del proyecto\n" +
        "\n" +
        "- Usamos TypeScript en modo estricto.\n" +
        "- Los componentes van en `components/` y son funciones.\n" +
        "- Los tests usan Vitest.",
    },
    {
      type: "checklist",
      title: "Lo que debes llevarte del panel",
      items: [
        "Sé localizar las cinco secciones: Specs, Agent Hooks, Steering, Agent Skills, MCP Servers.",
        "Entiendo para qué sirve cada una a grandes rasgos.",
        "Sé que Specs y los Powers (hooks/steering/skills/MCP) se profundizan en otros cursos.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuáles son las cinco secciones propias del panel de Kiro?",
      options: [
        "Archivos, Búsqueda, Git, Depuración y Extensiones",
        "Specs, Agent Hooks, Steering, Agent Skills y MCP Servers",
        "Terminal, Consola, Puertos, Salida y Problemas",
        "Inicio, Ajustes, Perfil, Ayuda y Acerca de",
      ],
      correctIndex: 1,
      explanation:
        "Las secciones propias de Kiro, que no existen en VS Code, son: Specs, Agent Hooks, Steering, Agent Skills y MCP Servers. Las demás son las habituales de VS Code.",
    },
    {
      question: "¿Qué contienen los steering files?",
      options: [
        "El código fuente de la aplicación",
        "Conocimiento persistente del proyecto en markdown, que le dice a Kiro cómo funciona tu proyecto",
        "Las credenciales de AWS",
        "El historial de git",
      ],
      correctIndex: 1,
      explanation:
        "La sección Steering guarda conocimiento persistente del proyecto en archivos markdown: le dicen a Kiro cómo funciona tu proyecto (convenciones, arquitectura, etc.).",
    },
    {
      question: "En este curso de introducción, ¿en qué secciones te centras?",
      options: [
        "En Specs y MCP Servers",
        "En el chat y el modo Vibe; Specs y los Powers se ven en los otros cursos",
        "En Agent Hooks y Agent Skills",
        "En ninguna: el panel no se usa",
      ],
      correctIndex: 1,
      explanation:
        "El curso de introducción se centra en el chat y el modo Vibe. Specs (primer curso) y los Powers —hooks, steering, skills, MCP— (tercer curso) se profundizan aparte.",
    },
  ],
};
