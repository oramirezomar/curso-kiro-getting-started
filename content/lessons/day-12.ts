import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§Entrada por imagen). Req 3.12.
export const day12: Lesson = {
  day: 12,
  slug: "entrada-por-imagen",
  title: "Entrada por imagen",
  section: "AVANZADO",
  estimatedMinutes: 14,
  icon: "concept-imagen",
  objectives: [
    "Usar una imagen arrastrada al chat como especificación visual",
    "Entender que Kiro lee el layout de la UI desde la imagen y genera los componentes que lo reproducen",
    "Reconocer qué tipos de imagen sirven: captura, boceto, wireframe",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Una de las capacidades más llamativas de Kiro es que puedes darle una imagen como especificación. En vez de describir con palabras cómo debe verse una interfaz, arrastras una imagen al chat y le pides que construya lo que ve. Kiro lee el layout de la UI desde la imagen y genera los componentes que lo reproducen.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Entrada por imagen", icon: "concept-imagen" }],
    },
    { type: "heading", level: 2, text: "Qué imagen sirve" },
    {
      type: "list",
      items: [
        "Una captura de pantalla de una interfaz que quieres replicar.",
        "Un boceto en papel que fotografías.",
        "Un wireframe o cualquier referencia visual del resultado deseado.",
      ],
    },
    { type: "heading", level: 2, text: "Cómo se usa" },
    {
      type: "paragraph",
      text:
        "Arrastras la imagen al campo del chat (o usas el icono de adjuntar) y escribes un prompt que la tome como referencia. La imagen se convierte, de hecho, en la especificación de lo que quieres construir.",
    },
    {
      type: "code",
      lang: "text",
      title: "Prompt con una imagen como especificación",
      code:
        "Construye lo que ves en esta imagen.\n" +
        "Usa React con Vite y TypeScript.\n" +
        "Incluye la logica y un boton de reinicio.",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Kiro entiende la imagen: lee la disposición de la UI (una cuadrícula, marcadores, un indicador de estado, botones) y genera componentes que coinciden con ella. La imagen es tu especificación completa para ese paso.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "La entrada por imagen encaja con el bucle de Vibe: la imagen es el 'describir' visual. Luego Kiro construye y tú iteras en lenguaje natural igual que con cualquier otro prompt.",
    },
    {
      type: "checklist",
      title: "Usar entrada por imagen",
      items: [
        "Preparo una referencia visual: captura, boceto fotografiado o wireframe.",
        "La arrastro al chat (o uso el icono de adjuntar).",
        "Pido construir lo que ve, indicando el stack si quiero (p. ej. React + Vite + TS).",
        "Itero en lenguaje natural sobre el resultado.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué hace Kiro cuando le das una imagen de una interfaz como entrada?",
      options: [
        "La guarda sin procesarla",
        "Lee el layout de la UI desde la imagen y genera los componentes que lo reproducen",
        "La convierte en un PDF",
        "Solo describe la imagen con palabras, sin generar código",
      ],
      correctIndex: 1,
      explanation:
        "Kiro entiende la imagen: lee la disposición de la interfaz (cuadrículas, marcadores, indicadores, botones) y genera los componentes que la reproducen. La imagen funciona como especificación visual.",
    },
    {
      question: "¿Qué tipos de imagen sirven como especificación?",
      options: [
        "Solo capturas de pantalla de alta resolución",
        "Una captura, un boceto en papel fotografiado o un wireframe: cualquier referencia visual",
        "Solo imágenes generadas por IA",
        "Ninguna: Kiro no acepta imágenes",
      ],
      correctIndex: 1,
      explanation:
        "Sirve cualquier referencia visual del resultado deseado: una captura de pantalla, un boceto en papel que fotografías o un wireframe. Esa imagen se usa como especificación de lo que quieres construir.",
    },
    {
      question: "¿Cómo encaja la entrada por imagen con el modo Vibe?",
      options: [
        "No tienen relación",
        "La imagen es el 'describir' visual del bucle; luego Kiro construye y tú iteras en lenguaje natural",
        "Obliga a pasar a modo Spec",
        "Solo funciona en modo Supervised",
      ],
      correctIndex: 1,
      explanation:
        "La entrada por imagen encaja en el bucle de Vibe (describir → construir → iterar): la imagen es el 'describir' visual, Kiro construye a partir de ella y tú iteras en lenguaje natural como con cualquier prompt.",
    },
  ],
};
