import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/01-instalacion-y-setup.md
// (§El agente por defecto y los agentes de workflow). Req 3.4.
export const day04: Lesson = {
  day: 4,
  slug: "agentes-por-defecto-y-workflow",
  title: "El agente por defecto y los agentes de workflow",
  section: "BÁSICO",
  estimatedMinutes: 14,
  icon: "concept-abrir-proyecto",
  objectives: [
    "Entender qué es el agente por defecto con el que empieza cada sesión",
    "Saber que puedes seleccionar un agente de workflow integrado de antemano",
    "Reconocer que puedes cambiar de agente durante una misma sesión",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Cada sesión de Kiro empieza con el agente por defecto: un asistente de código de propósito general. No tienes que configurar nada para empezar — abres el chat y ya puedes trabajar con conversación de flujo libre. Pero si sabes de antemano qué tipo de trabajo vas a hacer, puedes elegir un agente de workflow integrado desde el principio.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "El agente por defecto", icon: "concept-abrir-proyecto" },
        { service: "El panel de chat", icon: "concept-chat" },
      ],
    },
    { type: "heading", level: 2, text: "Empezar con el agente por defecto" },
    {
      type: "paragraph",
      text:
        "El agente por defecto es de propósito general: sirve para preguntar, explorar, generar código o depurar sin ceremonia. Es el punto de partida natural: puedes empezar a conversar de inmediato y dejar la elección de un agente más especializado para cuando la necesites.",
    },
    { type: "heading", level: 2, text: "Agentes de workflow y cambio en caliente" },
    {
      type: "list",
      items: [
        "Puedes seleccionar un agente de workflow integrado de antemano, si ya sabes qué tipo de tarea vas a abordar.",
        "Puedes cambiar de agente durante una sesión, sin tener que reiniciar nada.",
        "El agente por defecto siempre está disponible como opción de propósito general.",
      ],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "La flexibilidad es la idea clave: no tienes que decidir el agente perfecto antes de empezar. Arrancas con el por defecto y cambias de agente sobre la marcha según lo que esté pidiendo la tarea.",
    },
    {
      type: "checklist",
      title: "Lo esencial sobre agentes",
      items: [
        "Cada sesión arranca con el agente por defecto (propósito general).",
        "Puedes elegir un agente de workflow de antemano si ya sabes qué harás.",
        "Puedes cambiar de agente a mitad de sesión.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Con qué agente empieza cada sesión de Kiro?",
      options: [
        "Con un agente especializado que debes configurar antes",
        "Con el agente por defecto, un asistente de código de propósito general",
        "Sin ningún agente hasta que instales uno",
        "Con un agente que solo responde preguntas, sin escribir código",
      ],
      correctIndex: 1,
      explanation:
        "Cada sesión empieza con el agente por defecto: un asistente de código de propósito general con el que puedes trabajar de inmediato en conversación de flujo libre.",
    },
    {
      question: "¿Puedes cambiar de agente una vez iniciada la sesión?",
      options: [
        "No: el agente queda fijado al empezar",
        "Sí: puedes cambiar de agente durante la sesión",
        "Solo si reinicias Kiro por completo",
        "Solo con permisos de administrador",
      ],
      correctIndex: 1,
      explanation:
        "Sí. Puedes empezar con el agente por defecto y cambiar a un agente de workflow (o entre agentes) durante la misma sesión, sin reiniciar.",
    },
    {
      question: "¿Qué ventaja da poder elegir un agente de workflow de antemano?",
      options: [
        "Es obligatorio para poder usar el chat",
        "Permite arrancar ya enfocado en un tipo de tarea concreto si sabes qué vas a hacer",
        "Desactiva el agente por defecto para siempre",
        "Reduce el número de plataformas soportadas",
      ],
      correctIndex: 1,
      explanation:
        "Seleccionar un agente de workflow de antemano te deja arrancar enfocado si ya sabes qué tarea vas a abordar; pero no es obligatorio: el agente por defecto permite empezar sin configurar nada.",
    },
  ],
};
