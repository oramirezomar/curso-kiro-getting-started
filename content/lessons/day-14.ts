import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§Visibilidad de cambios). Req 3.14.
export const day14: Lesson = {
  day: 14,
  slug: "visibilidad-de-cambios",
  title: "Visibilidad de cambios: diffs y terminal",
  section: "AVANZADO",
  estimatedMinutes: 14,
  icon: "concept-cambios",
  objectives: [
    "Auditar lo que Kiro hace mediante 'View all changes' y los diffs de código",
    "Observar los comandos de terminal que Kiro ejecuta en vivo",
    "Reconocer la creación multi-archivo y por qué esta visibilidad da confianza",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Que Kiro trabaje de forma autónoma no significa que trabaje a ciegas para ti. Mientras construye, tienes visibilidad completa de lo que hace: qué comandos ejecuta, qué archivos crea y qué líneas cambia. Esa transparencia es lo que te permite confiar y, a la vez, controlar.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Visibilidad de cambios", icon: "concept-cambios" }],
    },
    { type: "heading", level: 2, text: "Qué puedes observar mientras Kiro trabaja" },
    {
      type: "list",
      items: [
        "Comandos de terminal en vivo: ves la salida de npm install, npm run build, etc., a medida que ocurre.",
        "Creación multi-archivo: componentes, estilos y lógica creados de una vez, todo a la vista.",
        "Comprensión de imagen: cuando partes de una imagen, ves cómo genera los componentes que la reproducen.",
      ],
    },
    { type: "heading", level: 2, text: "View all changes: el diff completo" },
    {
      type: "paragraph",
      text:
        "En el chat, la opción 'View all changes' te muestra el diff de todo lo que Kiro creó o modificó. Puedes revisar exactamente qué líneas cambiaron antes de darlo por bueno, igual que revisarías un pull request. Es el mecanismo de auditoría del modo Autopilot: Kiro avanza solo, pero tú puedes ver y revertir todo.",
    },
    {
      type: "code",
      lang: "text",
      title: "Flujo de revisión de cambios",
      code:
        "1. Kiro construye (crea archivos, ejecuta comandos).\n" +
        "2. En el chat: 'View all changes'.\n" +
        "3. Revisas el diff archivo por archivo.\n" +
        "4. Aceptas, o pides ajustes / reviertes.",
      highlightLines: [2],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Esta visibilidad es la contraparte del modo Autopilot: como Kiro actúa sin pedir permiso en cada paso, la forma de mantener el control es ver los diffs y la salida de terminal, y revertir si algo no te convence. En Supervised, en cambio, revisas antes de aplicar.",
    },
    {
      type: "checklist",
      title: "Mantener el control con visibilidad",
      items: [
        "Observo los comandos de terminal en vivo mientras Kiro trabaja.",
        "Uso 'View all changes' para ver el diff completo de lo creado/modificado.",
        "Reviso archivo por archivo antes de dar por bueno el trabajo.",
        "Revierto si algún cambio no me convence.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué muestra la opción 'View all changes' del chat?",
      options: [
        "El historial de git del repositorio",
        "El diff de todo lo que Kiro creó o modificó, para revisarlo antes de darlo por bueno",
        "La lista de extensiones instaladas",
        "El consumo de créditos",
      ],
      correctIndex: 1,
      explanation:
        "'View all changes' muestra el diff completo de lo que Kiro creó o modificó, para que lo revises archivo por archivo (como un pull request) antes de aceptarlo.",
    },
    {
      question: "Además del diff, ¿qué más puedes observar mientras Kiro trabaja?",
      options: [
        "Nada más: solo el diff final",
        "Los comandos de terminal en vivo (npm install, build…) y la creación multi-archivo",
        "El tráfico de red de otras apps",
        "El código fuente de Kiro",
      ],
      correctIndex: 1,
      explanation:
        "Puedes ver los comandos de terminal ejecutándose en vivo (npm install, npm run build, etc.) y la creación multi-archivo (componentes, estilos, lógica) a medida que ocurre, además del diff con 'View all changes'.",
    },
    {
      question: "¿Cómo se relaciona la visibilidad de cambios con el modo Autopilot?",
      options: [
        "Son incompatibles",
        "Es su contraparte: como Autopilot actúa sin pedir permiso en cada paso, ves los diffs y la terminal y puedes revertir para mantener el control",
        "Solo funciona en modo Spec",
        "Desactiva el modo Autopilot",
      ],
      correctIndex: 1,
      explanation:
        "La visibilidad de cambios es la contraparte de Autopilot: Kiro avanza de forma autónoma, y tú conservas el control viendo los diffs y la salida de terminal, con la posibilidad de revertir. En Supervised, en cambio, revisas antes de aplicar cada hunk.",
    },
  ],
};
