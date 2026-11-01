import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§Dev Servers). Req 3.13.
export const day13: Lesson = {
  day: 13,
  slug: "dev-servers",
  title: "Dev Servers en segundo plano",
  section: "AVANZADO",
  estimatedMinutes: 14,
  icon: "concept-dev-servers",
  objectives: [
    "Entender qué son los Dev Servers de Kiro: procesos de larga duración que corren en segundo plano",
    "Reconocer que puedes seguir chateando mientras el servidor sirve la app",
    "Saber cómo arrancar el dev server del proyecto de ejemplo",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Un servidor de desarrollo (como el que levanta npm run dev) es un proceso que no termina: se queda corriendo para servir tu app mientras programas. En muchas herramientas eso bloquea la terminal. En Kiro no: la feature de Dev Servers ejecuta esos procesos de larga duración en segundo plano sin bloquear el chat.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Dev Servers", icon: "concept-dev-servers" }],
    },
    { type: "heading", level: 2, text: "Procesos que no bloquean" },
    {
      type: "paragraph",
      text:
        "Kiro puede arrancar y mantener un dev server en segundo plano. Si Kiro lo levantó durante el build, lo verás ya corriendo, y puedes seguir conversando con él mientras la app se sirve. No tienes que elegir entre 'tener la app corriendo' y 'seguir trabajando con Kiro': ocurren a la vez.",
    },
    {
      type: "code",
      lang: "bash",
      title: "Arrancar el dev server del proyecto de ejemplo",
      code: "npm run dev",
    },
    {
      type: "paragraph",
      text:
        "Una vez arrancado, abres la URL que te indica (típicamente http://localhost:5173 en un proyecto Vite) y pruebas la app en el navegador mientras sigues iterando en el chat.",
    },
    {
      type: "code",
      lang: "text",
      title: "Salida típica al arrancar un dev server de Vite",
      code:
        "VITE ready in 420 ms\n" +
        "Local:   http://localhost:5173/",
      highlightLines: [2],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "La ventaja práctica: no se te congela la conversación. Mientras el dev server sirve la app, le sigues pidiendo cambios a Kiro, y ves el resultado recargando el navegador. El proceso de larga duración vive en segundo plano.",
    },
    {
      type: "checklist",
      title: "Trabajar con Dev Servers",
      items: [
        "Sé que Kiro corre procesos de larga duración (dev servers) en segundo plano.",
        "Si Kiro arrancó el server en el build, lo veo ya corriendo.",
        "Abro la URL (p. ej. http://localhost:5173) y pruebo mientras sigo chateando.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué permite la feature de Dev Servers de Kiro?",
      options: [
        "Desplegar la app a producción automáticamente",
        "Ejecutar procesos de larga duración (como npm run dev) en segundo plano sin bloquear el chat",
        "Convertir la app en un ejecutable de escritorio",
        "Desactivar la terminal para ahorrar memoria",
      ],
      correctIndex: 1,
      explanation:
        "Los Dev Servers son procesos de larga duración (como npm run dev) que Kiro ejecuta en segundo plano sin bloquear el chat, de modo que puedes seguir conversando mientras la app se sirve.",
    },
    {
      question: "Mientras el dev server corre en segundo plano, ¿qué puedes hacer?",
      options: [
        "Nada: la conversación con Kiro queda congelada hasta que lo detengas",
        "Seguir chateando con Kiro y pedir cambios mientras la app se sirve",
        "Solo ver logs, sin interactuar",
        "Cambiar de proveedor de autenticación",
      ],
      correctIndex: 1,
      explanation:
        "Como el dev server vive en segundo plano, puedes seguir conversando con Kiro y pidiendo cambios mientras la app se sirve; ves el resultado recargando el navegador. No se bloquea la conversación.",
    },
    {
      question: "En un proyecto Vite, ¿en qué URL sueles abrir la app tras arrancar el dev server?",
      options: [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:8080",
        "No hay URL: se abre sola en el IDE",
      ],
      correctIndex: 1,
      explanation:
        "En un proyecto Vite, el dev server suele servir en http://localhost:5173. Abres esa URL en el navegador y pruebas la app mientras sigues iterando en el chat.",
    },
  ],
};
