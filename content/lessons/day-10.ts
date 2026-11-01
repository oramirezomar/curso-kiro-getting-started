import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§Autopilot vs Supervised). Req 3.10.
export const day10: Lesson = {
  day: 10,
  slug: "autopilot-vs-supervised",
  title: "Autopilot vs Supervised",
  section: "MEDIO",
  estimatedMinutes: 16,
  icon: "concept-autopilot",
  objectives: [
    "Distinguir los dos modos de ejecución del chat: Autopilot y Supervised",
    "Entender qué hace Kiro en cada modo y qué control conservas tú",
    "Elegir el modo adecuado según la tarea: andamiar frente a revisar con cuidado",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Dentro del panel de chat hay un toggle llamado Autopilot que decide cuánta autonomía tiene Kiro al aplicar cambios. No cambia lo que Kiro puede hacer, sino cuándo te pide permiso. Son dos modos, y elegir bien ahorra tanto clics como sustos.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Autopilot y Supervised", icon: "concept-autopilot" }],
    },
    { type: "heading", level: 2, text: "Autopilot (por defecto)" },
    {
      type: "paragraph",
      text:
        "En Autopilot, Kiro trabaja de forma autónoma: crea archivos, escribe código, ejecuta comandos y toma decisiones sin pedir permiso en cada paso. Siempre puedes ver los cambios, revertirlos o interrumpir la ejecución. Es el modo por defecto y el más cómodo para avanzar rápido.",
    },
    { type: "heading", level: 2, text: "Supervised" },
    {
      type: "paragraph",
      text:
        "En Supervised, Kiro se pausa tras cada conjunto de ediciones y te muestra los cambios como 'hunks' individuales. Aceptas, rechazas o discutes cada uno antes de que continúe. Es el modo para cuando quieres revisar con lupa lo que se está cambiando.",
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Autopilot (por defecto)",
        code:
          "Kiro trabaja autonomo:\n" +
          "crea, escribe y ejecuta\n" +
          "sin pedir permiso en cada paso.\n\n" +
          "Siempre puedes ver cambios,\n" +
          "revertir o interrumpir.\n\n" +
          "Ideal para: andamiar, avanzar rapido.",
      },
      after: {
        title: "Supervised",
        code:
          "Kiro se pausa tras cada set\n" +
          "de ediciones y muestra los\n" +
          "cambios como hunks.\n\n" +
          "Aceptas, rechazas o discutes\n" +
          "cada uno antes de continuar.\n\n" +
          "Ideal para: revisar con cuidado.",
      },
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Regla práctica: para andamiar un proyecto nuevo deja Autopilot (avanzas sin fricción). Cuando toques código sensible o quieras entender cada cambio, pasa a Supervised y revisa hunk a hunk.",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "En ambos modos conservas el control: Autopilot no es 'sin red' —puedes ver los diffs, revertir e interrumpir en cualquier momento—; Supervised solo adelanta ese control al momento previo a aplicar cada cambio.",
    },
    {
      type: "checklist",
      title: "Elegir el modo de ejecución",
      items: [
        "Andamiar o avanzar rápido: Autopilot (por defecto).",
        "Revisar con cuidado código sensible: Supervised.",
        "En ambos puedo ver cambios, revertir e interrumpir.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué hace Kiro en modo Autopilot?",
      options: [
        "Se pausa tras cada edición y pide permiso para cada hunk",
        "Trabaja de forma autónoma (crea, escribe, ejecuta) sin pedir permiso en cada paso, aunque siempre puedes ver, revertir o interrumpir",
        "No puede ejecutar comandos de terminal",
        "Solo responde preguntas, sin modificar archivos",
      ],
      correctIndex: 1,
      explanation:
        "En Autopilot (el modo por defecto) Kiro actúa de forma autónoma: crea archivos, escribe código y ejecuta comandos sin pedir permiso en cada paso. Conservas el control porque puedes ver los cambios, revertir o interrumpir.",
    },
    {
      question: "¿Qué caracteriza al modo Supervised?",
      options: [
        "Kiro no muestra los cambios hasta el final",
        "Kiro se pausa tras cada conjunto de ediciones y presenta los cambios como hunks para que aceptes, rechaces o discutas cada uno",
        "Kiro trabaja más rápido que en Autopilot",
        "Desactiva por completo la generación de código",
      ],
      correctIndex: 1,
      explanation:
        "En Supervised, Kiro se pausa tras cada conjunto de ediciones y muestra los cambios como hunks individuales; tú aceptas, rechazas o discutes cada uno antes de que continúe.",
    },
    {
      question: "¿Qué modo conviene para andamiar un proyecto nuevo, y cuál para revisar código sensible?",
      options: [
        "Supervised para andamiar; Autopilot para revisar",
        "Autopilot para andamiar (avanzar rápido); Supervised para revisar con cuidado",
        "Siempre el mismo modo, da igual la tarea",
        "Ninguno: el modo no afecta al trabajo",
      ],
      correctIndex: 1,
      explanation:
        "Para andamiar o avanzar rápido conviene Autopilot (sin fricción). Para revisar con lupa código sensible conviene Supervised, que te deja aceptar o rechazar cada hunk antes de aplicarlo.",
    },
  ],
};
