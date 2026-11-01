import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§El panel de chat). Req 3.7.
export const day07: Lesson = {
  day: 7,
  slug: "panel-de-chat",
  title: "El panel de chat",
  section: "MEDIO",
  estimatedMinutes: 16,
  icon: "concept-chat",
  objectives: [
    "Abrir el panel de chat con el atajo correcto según tu sistema operativo",
    "Entender que escribes en lenguaje natural y Kiro lee, escribe y ejecuta código por ti",
    "Reconocer los dos controles de la parte superior del chat: el tipo de sesión y el modelo",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El panel de chat es el centro de operaciones de Kiro: es donde hablas con él. Escribes en lenguaje natural y Kiro lee tu código, lo escribe y ejecuta comandos por ti, manteniendo el contexto completo del proyecto. Puedes preguntar sobre tu código, pedir explicaciones de lógica compleja, generar features, depurar errores y automatizar tareas repetitivas.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "El panel de chat", icon: "concept-chat" }],
    },
    { type: "heading", level: 2, text: "Abrir el chat" },
    {
      type: "code",
      lang: "text",
      title: "Atajo para abrir el panel de chat",
      code:
        "Mac:              Cmd + L\n" +
        "Windows / Linux:  Ctrl + L",
      highlightLines: [1, 2],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "El chat mantiene el contexto completo del proyecto: no tienes que pegar archivos ni explicar la estructura cada vez. Kiro ya ve tu código y trabaja sobre él.",
    },
    { type: "heading", level: 2, text: "Los dos controles de la parte superior" },
    {
      type: "paragraph",
      text:
        "Arriba del chat hay dos controles que conviene conocer desde el principio, porque definen cómo trabaja Kiro en cada interacción. Los veremos en detalle en las próximas lecciones:",
    },
    {
      type: "list",
      items: [
        "Session type picker — elige entre sesión Vibe (flujo libre) y sesión Spec (estructurada).",
        "Model picker — elige qué modelo de IA usar. Auto es el valor por defecto y el recomendado.",
      ],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Para qué sirve cada cosa: escribes lenguaje natural, eliges si quieres flujo libre o estructura (Vibe/Spec) y qué modelo responde (Model picker). Con eso ya puedes empezar a trabajar; el resto del nivel MEDIO desmenuza cada control.",
    },
    {
      type: "checklist",
      title: "Lo esencial del panel de chat",
      items: [
        "Abro el chat con Cmd+L (Mac) o Ctrl+L (Windows/Linux).",
        "Escribo en lenguaje natural; Kiro lee, escribe y ejecuta con el contexto del proyecto.",
        "Reconozco los dos controles superiores: tipo de sesión y modelo.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es el atajo para abrir el panel de chat de Kiro?",
      options: [
        "Cmd/Ctrl + P",
        "Cmd + L (Mac) o Ctrl + L (Windows/Linux)",
        "Cmd/Ctrl + S",
        "F5",
      ],
      correctIndex: 1,
      explanation:
        "El panel de chat se abre con Cmd+L en Mac y Ctrl+L en Windows/Linux. Es donde escribes en lenguaje natural y Kiro lee, escribe y ejecuta código por ti.",
    },
    {
      question: "¿Qué ventaja tiene que el chat mantenga el contexto completo del proyecto?",
      options: [
        "Que tienes que pegar cada archivo manualmente",
        "Que no hace falta pegar archivos ni explicar la estructura cada vez: Kiro ya ve tu código",
        "Que solo funciona con un archivo abierto",
        "Que desactiva la terminal",
      ],
      correctIndex: 1,
      explanation:
        "Al mantener el contexto completo del proyecto, no necesitas pegar archivos ni explicar la estructura en cada mensaje: Kiro ya conoce tu código y trabaja sobre él.",
    },
    {
      question: "¿Cuáles son los dos controles de la parte superior del chat?",
      options: [
        "Zoom y tema",
        "El selector de tipo de sesión (Vibe/Spec) y el selector de modelo (Model picker)",
        "Guardar y deshacer",
        "Idioma y fuente",
      ],
      correctIndex: 1,
      explanation:
        "Arriba del chat están el session type picker (Vibe vs Spec) y el model picker (qué modelo de IA usar, con Auto por defecto). Ambos definen cómo trabaja Kiro en cada interacción.",
    },
  ],
};
