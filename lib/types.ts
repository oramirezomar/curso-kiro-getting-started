// Modelo de contenido tipado. Cada lección es un array de "blocks",
// no un string de markdown, para tener control total del render.
//
// Clonado del Curso_Kiro_Spec_Driven (su lib/types.ts) para el
// Curso_Kiro_Getting_Started, con iconografía neutra propia por concepto y
// lenguajes de código orientados al dominio getting-started de Kiro.

// Identificador estable de icono resuelto por el Catálogo_Iconos.
export type IconId = string;

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "code";
      // (Req 5.1, 5.2) Lenguajes del dominio getting-started de Kiro: text para
      // atajos de teclado, árboles de archivos de .kiro/ y salidas de terminal;
      // bash para comandos (kiro /ruta, npm run dev, aws configure); json para
      // settings.json de .kiro/; ts/js para snippets del proyecto de ejemplo;
      // markdown para fragmentos de steering files. Igual que el hermano
      // spec-driven: markdown sí, python no.
      lang: "js" | "ts" | "text" | "bash" | "json" | "markdown";
      title?: string;
      code: string;
      highlightLines?: number[];
    }
  | { type: "callout"; variant: "info" | "warning" | "success"; text: string }
  | {
      type: "comparison";
      before: { title: string; code: string };
      after: { title: string; code: string };
      lang?: "js" | "ts" | "text" | "markdown";
    }
  | { type: "checklist"; title?: string; items: string[] }
  // Bloque_Icono (Req 4.7, 11.3)
  | { type: "serviceIcon"; items: { service: string; icon: IconId }[] };

export interface Lesson {
  day: number;
  slug: string;
  title: string;
  section: string;
  estimatedMinutes: number;
  objectives: string[];
  blocks: ContentBlock[];
  icon?: IconId; // icono principal de la lección (Req 11.2)
  selfCheck?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface CourseSection {
  title: string;
  dayRange: [number, number];
  icon?: IconId; // icono de la capa temática (Req 11.1)
}

// Catálogo_Iconos
export interface IconEntry {
  id: IconId; // id estable (p. ej. "concept-instalacion")
  path: string; // ruta local bajo /public (empieza por "/")
  defaultLabel: string; // nombre neutro del concepto/área
}

export type IconCatalog = Record<IconId, IconEntry>;
