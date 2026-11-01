import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§Vibe mode, §El bucle conversacional). Req 3.11.
export const day11: Lesson = {
  day: 11,
  slug: "modo-vibe-y-bucle",
  title: "El modo Vibe y el bucle conversacional",
  section: "AVANZADO",
  estimatedMinutes: 20,
  icon: "concept-vibe-spec",
  objectives: [
    "Dominar el modo Vibe en profundidad: cuándo elegirlo y cómo sacarle partido",
    "Aplicar el bucle conversacional describir → construir → iterar",
    "Corregir el rumbo en lenguaje natural cuando algo no sale como esperabas",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Ya conoces Vibe como uno de los dos tipos de sesión. Aquí lo miramos de cerca, porque es el modo con el que más vas a trabajar en el día a día. Su mecánica es un bucle simple y potente: describes lo que quieres, Kiro lo construye, y tú iteras corrigiendo en lenguaje natural.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Modo Vibe", icon: "concept-vibe-spec" },
        { service: "El primer proyecto", icon: "concept-primer-proyecto" },
      ],
    },
    { type: "heading", level: 2, text: "Cuándo elegir Vibe" },
    {
      type: "list",
      items: [
        "Andamiar un proyecto nuevo desde cero.",
        "Prototipar una idea rápido, sin comprometerte a un plan.",
        "Preguntar sobre el código existente y entender cómo funciona.",
        "Explorar soluciones cuando todavía no sabes exactamente qué quieres.",
      ],
    },
    { type: "heading", level: 2, text: "El bucle: describir → construir → iterar" },
    {
      type: "paragraph",
      text:
        "El corazón de Vibe es un ciclo de tres pasos que repites hasta quedar conforme. No hay plan rígido: avanzas por conversación.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Describir: cuentas en lenguaje natural lo que quieres (y puedes adjuntar una imagen como referencia).",
        "Construir: Kiro lee el código, lo escribe o modifica, ejecuta comandos y te muestra el resultado.",
        "Iterar: revisas, le dices qué ajustar, y el ciclo se repite.",
      ],
    },
    {
      type: "code",
      lang: "text",
      title: "Corregir el rumbo en lenguaje natural",
      code:
        "El tablero no se ve bien: las celdas deberian ser\n" +
        "mas grandes y con bordes visibles.\n" +
        "\n" +
        "La deteccion de victoria no funciona en diagonal.\n" +
        "Corrigelo.",
    },
    {
      type: "paragraph",
      text:
        "Cuando algo no sale como esperabas, no reescribes el prompt desde cero: simplemente describes el problema. Kiro lee el código existente, entiende qué falla y lo corrige. Esa es la naturaleza del bucle conversacional: describir, construir, iterar.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Vibe brilla en la exploración. Cuando el trabajo deje de ser exploratorio y necesite rigor para producción, pasa a Spec (el primer curso de la serie). No es que uno sea mejor: resuelven momentos distintos.",
    },
    {
      type: "checklist",
      title: "Sacar partido al modo Vibe",
      items: [
        "Uso Vibe para andamiar, prototipar, preguntar y explorar.",
        "Sigo el bucle describir → construir → iterar sin plan rígido.",
        "Cuando algo falla, describo el problema en lenguaje natural en vez de reescribir todo.",
        "Paso a Spec cuando el trabajo necesita rigor de producción.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es el bucle conversacional del modo Vibe?",
      options: [
        "Requirements → Design → Tasks",
        "Describir → construir → iterar",
        "Rojo → Verde → Refactor",
        "Instalar → autenticar → abrir",
      ],
      correctIndex: 1,
      explanation:
        "El modo Vibe funciona con el bucle describir → construir → iterar: describes lo que quieres, Kiro lo construye, y tú iteras corrigiendo en lenguaje natural. Requirements → Design → Tasks es el flujo del modo Spec.",
    },
    {
      question: "Cuando algo no sale bien en Vibe, ¿qué conviene hacer?",
      options: [
        "Reescribir el prompt completo desde cero cada vez",
        "Describir el problema en lenguaje natural; Kiro lee el código, entiende el fallo y lo corrige",
        "Cambiar de IDE",
        "Borrar el proyecto y empezar de nuevo",
      ],
      correctIndex: 1,
      explanation:
        "No hace falta reescribir todo: describes el problema en lenguaje natural ('la detección de victoria no funciona en diagonal, corrígelo') y Kiro lee el código existente, entiende qué falla y lo arregla. Ese es el bucle iterativo de Vibe.",
    },
    {
      question: "¿Para cuál de estos escenarios NO es el modo Vibe la mejor elección?",
      options: [
        "Andamiar un proyecto nuevo",
        "Prototipar una idea rápido",
        "Una feature compleja que va a producción y necesita rigor y artefactos revisables",
        "Explorar y preguntar sobre el código",
      ],
      correctIndex: 2,
      explanation:
        "Vibe es ideal para andamiar, prototipar, preguntar y explorar. Para una feature compleja que va a producción y necesita rigor conviene el modo Spec (el flujo estructurado del primer curso de la serie).",
    },
  ],
};
