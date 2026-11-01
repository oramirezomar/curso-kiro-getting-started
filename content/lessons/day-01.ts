import type { Lesson } from "@/lib/types";

// Contenido redactado. Fuente: docs-referencia/kiro-getting-started/
// 01-instalacion-y-setup.md y 02-interfaz-chat-primer-proyecto.md. Req 3.1.
export const day01: Lesson = {
  day: 1,
  slug: "que-es-kiro-intro",
  title: "Qué es Kiro y por qué",
  section: "BÁSICO",
  estimatedMinutes: 16,
  icon: "concept-que-es-kiro-intro",
  objectives: [
    "Explicar qué es Kiro: un IDE agéntico de AWS construido sobre Code OSS, familiar para quien viene de VS Code",
    "Entender el recorrido de 'vibe coding' a producción y por qué Kiro va más allá de un simple chat",
    "Reconocer qué cubre este curso (la introducción práctica) y qué dejan los otros dos cursos de la serie",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Kiro es un IDE agéntico de AWS construido sobre Code OSS, la misma base abierta que VS Code. Eso significa que al abrirlo te resulta familiar de inmediato: tus temas, tus atajos de teclado y la mayoría de tus extensiones se conservan. La diferencia está en lo que añade encima: un conjunto de capacidades para trabajar con IA de forma estructurada, no solo conversando.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Qué es Kiro", icon: "concept-que-es-kiro-intro" },
        { service: "El panel de chat", icon: "concept-chat" },
        { service: "Vibe y Spec", icon: "concept-vibe-spec" },
      ],
    },
    { type: "heading", level: 2, text: "De vibe coding a producción" },
    {
      type: "paragraph",
      text:
        "Kiro es excelente para el 'vibe coding': describir en lenguaje natural lo que quieres y verlo cobrar forma. Pero su propuesta va más allá de prototipar: está pensado para llevar ese trabajo a producción, con features que dan estructura y rigor cuando el proyecto lo necesita. En este curso nos quedamos en la introducción práctica; la metodología estructurada (specs) es el primer curso de la serie.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Kiro no te obliga a elegir entre rapidez y rigor: empiezas conversando (modo Vibe) y, cuando el trabajo lo pide, pasas a un flujo estructurado (modo Spec). Este curso te da la base para moverte con soltura en el día a día.",
    },
    { type: "heading", level: 2, text: "Qué vas a aprender aquí" },
    {
      type: "list",
      items: [
        "BÁSICO: qué es Kiro, instalarlo, autenticarte, el agente por defecto, y abrir e inicializar un proyecto.",
        "MEDIO: la interfaz — el panel de Kiro, el panel de chat, Vibe vs Spec, el selector de modelo y Autopilot vs Supervised.",
        "AVANZADO: el modo Vibe en profundidad, entrada por imagen, dev servers, visibilidad de cambios y el recorrido de un primer proyecto real.",
      ],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Los otros dos cursos de la serie cubren lo que aquí solo mencionamos: las specs (desarrollo guiado por especificaciones) y los Powers de Kiro (hooks, steering, MCP y skills).",
    },
    {
      type: "quote",
      text:
        "Está construido sobre Code OSS, la misma base de VS Code: tus temas, atajos y la mayoría de extensiones viajan contigo.",
      author: "Documentación de Kiro",
    },
  ],
  selfCheck: [
    {
      question: "¿Sobre qué base está construido Kiro y qué implica?",
      options: [
        "Sobre un editor propietario desde cero, por lo que hay que reaprenderlo todo",
        "Sobre Code OSS (la base de VS Code), por lo que temas, atajos y la mayoría de extensiones se conservan",
        "Sobre un navegador web, por lo que solo funciona online",
        "Sobre la terminal, sin interfaz gráfica",
      ],
      correctIndex: 1,
      explanation:
        "Kiro es un IDE agéntico de AWS construido sobre Code OSS, la base abierta de VS Code. Por eso resulta familiar de inmediato: conserva tus temas, atajos de teclado y la mayoría de extensiones.",
    },
    {
      question: "¿Qué describe mejor la propuesta de Kiro respecto al 'vibe coding'?",
      options: [
        "Solo sirve para prototipos y no puede llevar nada a producción",
        "Es bueno para vibe coding, pero su fuerza es llevar ese trabajo a producción con estructura cuando hace falta",
        "Prohíbe el vibe coding y obliga siempre a usar specs",
        "Es un chat sin capacidad de escribir ni ejecutar código",
      ],
      correctIndex: 1,
      explanation:
        "Kiro es excelente para vibe coding (describir y construir conversando), pero va más allá: está pensado para llevar prototipos a producción, ofreciendo estructura y rigor cuando el proyecto lo necesita.",
    },
    {
      question: "¿Qué cubre este curso de la serie?",
      options: [
        "La metodología de specs en profundidad",
        "Los Powers (hooks, steering, MCP, skills) en profundidad",
        "La introducción práctica a Kiro: instalación, interfaz, modo Vibe y primer proyecto",
        "La administración de la organización en AWS",
      ],
      correctIndex: 2,
      explanation:
        "Este es el curso de introducción práctica (getting started): instalar, autenticarse, conocer la interfaz, el modo Vibe y recorrer un primer proyecto. Las specs y los Powers son los otros dos cursos de la serie.",
    },
  ],
};
