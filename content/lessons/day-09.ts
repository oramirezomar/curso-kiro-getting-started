import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§Model picker). Req 3.9.
export const day09: Lesson = {
  day: 9,
  slug: "model-picker",
  title: "El Model picker y el consumo de créditos",
  section: "MEDIO",
  estimatedMinutes: 14,
  icon: "concept-modelos",
  objectives: [
    "Usar el Model picker para elegir qué modelo de IA responde en cada interacción",
    "Entender por qué Auto es el valor por defecto y el recomendado",
    "Gestionar el tradeoff coste/calidad: un modelo más barato para preguntas simples, uno más potente para trabajo complejo",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El Model picker, junto al selector de sesión, elige qué modelo de IA usa Kiro en cada interacción. La opción por defecto es Auto, y es la recomendada: enruta cada petición al modelo óptimo según la tarea, sin que tengas que decidirlo tú.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Model picker", icon: "concept-modelos" }],
    },
    { type: "heading", level: 2, text: "Auto: la opción recomendada" },
    {
      type: "paragraph",
      text:
        "Con Auto, Kiro elige el modelo más adecuado por tarea: uno rápido y económico para una pregunta simple, uno más potente para un andamiaje o un razonamiento complejo. Para la mayoría de los casos, dejar Auto es lo correcto y lo más eficiente.",
    },
    { type: "heading", level: 2, text: "El tradeoff coste/calidad" },
    {
      type: "paragraph",
      text:
        "Si quieres controlar el gasto, puedes cambiar de modelo manualmente. Un modelo más barato basta para una pregunta puntual; uno más potente rinde mejor en un andamiaje grande. Cambiar de modelo afecta el consumo de créditos, que puedes observar en tu panel de uso. Tú controlas el equilibrio coste/calidad en cada interacción.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Idea clave: el control es por interacción, no global. Puedes usar un modelo económico para una consulta rápida y, en el siguiente mensaje, subir a uno más potente para una tarea exigente. El consumo de créditos cambia en consecuencia.",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Si no quieres pensar en esto, deja Auto: enruta al modelo óptimo por tarea y es la recomendación por defecto. El ajuste manual es para cuando quieres optimizar coste conscientemente.",
    },
    {
      type: "checklist",
      title: "Usar bien el Model picker",
      items: [
        "Por defecto dejo Auto (enruta al modelo óptimo por tarea).",
        "Para una pregunta simple puedo bajar a un modelo más barato.",
        "Para un andamiaje o razonamiento complejo, subo a uno más potente.",
        "Observo el consumo de créditos en el panel de uso.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es el valor por defecto y recomendado del Model picker?",
      options: [
        "El modelo más caro, siempre",
        "Auto, que enruta cada petición al modelo óptimo según la tarea",
        "El modelo más barato, siempre",
        "Ningún modelo hasta que elijas uno manualmente",
      ],
      correctIndex: 1,
      explanation:
        "Auto es el valor por defecto y el recomendado: enruta cada interacción al modelo óptimo según la tarea, sin que tengas que decidirlo manualmente.",
    },
    {
      question: "¿Qué efecto tiene cambiar de modelo manualmente?",
      options: [
        "Ninguno: todos los modelos cuestan y rinden igual",
        "Cambia el tradeoff coste/calidad y el consumo de créditos: más barato para tareas simples, más potente para las complejas",
        "Desactiva el chat",
        "Cambia el idioma de la interfaz",
      ],
      correctIndex: 1,
      explanation:
        "Cambiar de modelo ajusta el equilibrio coste/calidad por interacción y afecta el consumo de créditos: un modelo económico para preguntas simples y uno potente para trabajo complejo.",
    },
    {
      question: "El control del modelo en Kiro es…",
      options: [
        "Global: se fija una vez para toda la cuenta",
        "Por interacción: puedes usar un modelo distinto en cada mensaje según la tarea",
        "Imposible de cambiar",
        "Exclusivo de administradores",
      ],
      correctIndex: 1,
      explanation:
        "El control es por interacción: puedes usar un modelo económico para una consulta rápida y subir a uno más potente en el siguiente mensaje, con el consumo de créditos ajustándose en cada caso.",
    },
  ],
};
