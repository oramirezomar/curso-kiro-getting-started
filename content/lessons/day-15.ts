import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/02-interfaz-chat-primer-proyecto.md
// (§El primer proyecto, §El bucle conversacional). Req 3.15.
export const day15: Lesson = {
  day: 15,
  slug: "primer-proyecto",
  title: "Recorrido del primer proyecto en modo Vibe",
  section: "AVANZADO",
  estimatedMinutes: 22,
  icon: "concept-primer-proyecto",
  objectives: [
    "Recorrer de principio a fin la construcción de una app simple en modo Vibe",
    "Encadenar todo lo aprendido: chat, Autopilot, entrada por imagen, dev servers y visibilidad de cambios",
    "Iterar sobre el resultado corrigiendo en lenguaje natural hasta quedar conforme",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Esta lección junta todo lo anterior en un recorrido real: construir una app simple (por ejemplo, un tres en raya / tic-tac-toe) de principio a fin, en modo Vibe. No introduce conceptos nuevos; muestra cómo encajan el chat, Autopilot, la entrada por imagen, los dev servers y la visibilidad de cambios en un flujo único.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "El primer proyecto", icon: "concept-primer-proyecto" },
        { service: "Modo Vibe", icon: "concept-vibe-spec" },
        { service: "Dev Servers", icon: "concept-dev-servers" },
      ],
    },
    { type: "heading", level: 2, text: "El recorrido, paso a paso" },
    {
      type: "list",
      ordered: true,
      items: [
        "Abre el panel de chat (Cmd/Ctrl+L) y confirma sesión Vibe con Autopilot activado.",
        "Da el objetivo (texto o una imagen arrastrada como referencia).",
        "Kiro andamia el proyecto (npm create vite@latest), crea los componentes, implementa la lógica, instala dependencias y verifica el build.",
        "Arranca el dev server (npm run dev) y abre la URL (típicamente http://localhost:5173).",
        "Pruebas la app en el navegador e iteras: describes lo que falla y Kiro lo corrige.",
      ],
    },
    {
      type: "code",
      lang: "text",
      title: "Prompt inicial del recorrido",
      code:
        "Construye un tres en raya que se vea como esta imagen.\n" +
        "Usa React con Vite y TypeScript.\n" +
        "Incluye la logica (deteccion de victoria, empate, turnos\n" +
        "alternos entre X y O) y un boton de reinicio.",
    },
    {
      type: "paragraph",
      text:
        "Mientras Kiro trabaja, observas los comandos de terminal en vivo (npm install, build), la creación multi-archivo (componentes, estilos, lógica) y, con 'View all changes', el diff completo. Si usaste una imagen, ves cómo Kiro reproduce el layout que lee de ella.",
    },
    {
      type: "code",
      lang: "bash",
      title: "Arrancar y probar la app",
      code: "npm run dev",
    },
    {
      type: "paragraph",
      text:
        "Con la app corriendo (el dev server vive en segundo plano, así que el chat no se bloquea), la pruebas y, si algo no cuadra, lo dices en lenguaje natural. Ese es el cierre del bucle describir → construir → iterar aplicado a un proyecto entero.",
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Lo que tú haces",
        code:
          "- Describes el objetivo\n" +
          "  (texto o imagen).\n" +
          "- Pruebas la app.\n" +
          "- Dices que ajustar en\n" +
          "  lenguaje natural.",
      },
      after: {
        title: "Lo que hace Kiro",
        code:
          "- Andamia el proyecto.\n" +
          "- Crea componentes y logica.\n" +
          "- Instala y verifica el build.\n" +
          "- Corre el dev server y\n" +
          "  aplica tus correcciones.",
      },
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Si el trabajo pasa de prototipo a algo que irá a producción, aquí es donde cambiarías a modo Spec para darle rigor. Vibe te llevó del cero a una app funcionando; Spec la lleva a producción con estructura (primer curso de la serie).",
    },
    {
      type: "checklist",
      title: "El recorrido completo",
      items: [
        "Abrí el chat en sesión Vibe con Autopilot.",
        "Di el objetivo por texto o imagen.",
        "Kiro andamió, creó, instaló y verificó; yo observé terminal y diffs.",
        "Arranqué el dev server y probé la app sin bloquear el chat.",
        "Iteré en lenguaje natural hasta quedar conforme.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "En el recorrido del primer proyecto en modo Vibe, ¿qué hace Kiro tras recibir el objetivo?",
      options: [
        "Nada hasta que escribes todo el código tú mismo",
        "Andamia el proyecto, crea los componentes, implementa la lógica, instala dependencias y verifica el build",
        "Despliega directamente a producción",
        "Solo responde con texto explicativo",
      ],
      correctIndex: 1,
      explanation:
        "Tras recibir el objetivo (texto o imagen), Kiro andamia el proyecto (p. ej. npm create vite@latest), crea los componentes, implementa la lógica, instala dependencias y verifica el build, mientras tú observas terminal y diffs.",
    },
    {
      question: "¿Por qué puedes probar la app y seguir pidiéndole cambios a Kiro al mismo tiempo?",
      options: [
        "Porque el dev server bloquea el chat hasta terminar",
        "Porque el dev server corre en segundo plano (feature de Dev Servers), sin bloquear la conversación",
        "Porque Kiro deja de responder mientras pruebas",
        "Porque hay que reiniciar Kiro entre cada cambio",
      ],
      correctIndex: 1,
      explanation:
        "El dev server es un proceso de larga duración que Kiro corre en segundo plano (Dev Servers), así que la conversación no se bloquea: pruebas la app y sigues pidiendo cambios a la vez.",
    },
    {
      question: "Si el proyecto deja de ser un prototipo y va a producción, ¿qué paso natural sigue?",
      options: [
        "Seguir en Vibe exactamente igual",
        "Cambiar a modo Spec para darle rigor con requisitos, diseño y tareas (primer curso de la serie)",
        "Borrar el proyecto",
        "Desactivar Autopilot para siempre",
      ],
      correctIndex: 1,
      explanation:
        "Vibe te lleva del cero a una app funcionando. Cuando el trabajo va a producción y necesita rigor, el paso natural es cambiar a modo Spec (requirements → design → tasks), que es el tema del primer curso de la serie.",
    },
  ],
};
