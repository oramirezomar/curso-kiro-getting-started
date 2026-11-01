import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§Vibe mode, §Session type picker). Req 3.8.
export const day08: Lesson = {
  day: 8,
  slug: "vibe-vs-spec",
  title: "Vibe vs Spec: los dos tipos de sesión",
  section: "MEDIO",
  estimatedMinutes: 18,
  icon: "concept-vibe-spec",
  objectives: [
    "Distinguir los dos tipos de sesión de Kiro: Vibe (flujo libre) y Spec (estructurada)",
    "Saber para qué es ideal el modo Vibe y cuándo conviene pasar a Spec",
    "Elegir el tipo de sesión desde el selector del panel de chat",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El selector de tipo de sesión, en la parte superior del chat, decide cómo trabaja Kiro: de forma conversacional y libre (Vibe) o de forma estructurada con artefactos (Spec). No es una configuración que fijas para siempre: eliges el tipo según lo que vayas a hacer en cada momento.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Vibe y Spec", icon: "concept-vibe-spec" }],
    },
    { type: "heading", level: 2, text: "Vibe: conversacional y libre" },
    {
      type: "paragraph",
      text:
        "El modo Vibe es la forma conversacional y de flujo libre de trabajar con Kiro, sin estructura formal ni specs. Es el modo con el que más vas a empezar, y es ideal para:",
    },
    {
      type: "list",
      items: [
        "Andamiar proyectos nuevos.",
        "Prototipado rápido.",
        "Hacer preguntas sobre el código.",
        "Codificación exploratoria sin un plan rígido.",
      ],
    },
    { type: "heading", level: 2, text: "Spec: estructurada" },
    {
      type: "paragraph",
      text:
        "El modo Spec es la sesión estructurada: convierte una idea en requisitos, diseño y tareas antes de implementar. Es el flujo spec-driven, y se usa cuando quieres más rigor — típicamente para trabajo que va a producción o que otra persona mantendrá. La metodología completa de Spec es el primer curso de la serie.",
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Vibe (flujo libre)",
        code:
          "Conversas y construyes.\n" +
          "Sin estructura formal.\n\n" +
          "Ideal para:\n" +
          "- andamiar\n" +
          "- prototipar\n" +
          "- preguntar\n" +
          "- explorar",
      },
      after: {
        title: "Spec (estructurada)",
        code:
          "Requirements -> Design -> Tasks.\n" +
          "Artefactos revisables.\n\n" +
          "Ideal para:\n" +
          "- features complejas\n" +
          "- codigo a produccion\n" +
          "- trabajo en equipo\n" +
          "(primer curso de la serie)",
      },
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Regla práctica: empieza en Vibe para explorar y prototipar; cuando el trabajo necesite rigor y vaya a sobrevivir, cambia a Spec. Ambos conviven: eliges el tipo de sesión según la tarea.",
    },
    {
      type: "checklist",
      title: "Elegir el tipo de sesión",
      items: [
        "Explorar, prototipar, preguntar: Vibe.",
        "Feature compleja, código de producción, trabajo en equipo: Spec.",
        "El tipo se elige en el selector superior del chat y puede cambiarse.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Para qué es ideal el modo Vibe?",
      options: [
        "Para features complejas que van a producción con máximo rigor",
        "Para andamiar proyectos, prototipar rápido, preguntar sobre el código y explorar sin un plan rígido",
        "Para administrar la organización en AWS",
        "Para escribir los requisitos formales de una feature",
      ],
      correctIndex: 1,
      explanation:
        "Vibe es la forma conversacional y de flujo libre: ideal para andamiar proyectos nuevos, prototipado rápido, hacer preguntas sobre el código y codificación exploratoria sin plan rígido.",
    },
    {
      question: "¿Cuándo conviene pasar del modo Vibe al modo Spec?",
      options: [
        "Nunca: Vibe sirve para todo por igual",
        "Cuando el trabajo necesita rigor —features complejas, código a producción, trabajo en equipo— y quieres artefactos revisables",
        "Solo si falla la conexión a internet",
        "Cuando quieres desactivar la IA",
      ],
      correctIndex: 1,
      explanation:
        "Spec es la sesión estructurada (requirements → design → tasks). Conviene cuando el trabajo necesita rigor: features complejas, código que va a producción o que mantendrá un equipo. La metodología Spec es el primer curso de la serie.",
    },
    {
      question: "¿Dónde eliges el tipo de sesión?",
      options: [
        "En los ajustes globales del sistema operativo",
        "En el selector de tipo de sesión, en la parte superior del panel de chat",
        "En un archivo de configuración que hay que editar a mano",
        "No se puede elegir: siempre es Spec",
      ],
      correctIndex: 1,
      explanation:
        "El tipo de sesión (Vibe o Spec) se elige con el session type picker, en la parte superior del panel de chat, y puede cambiarse según la tarea.",
    },
  ],
};
