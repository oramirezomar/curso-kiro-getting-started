import type { Lesson } from "@/lib/types";

// Cierre del curso. Fuente: docs-referencia/kiro-getting-started/
// 01-instalacion-y-setup.md (§Verificar, §Kiro CLI, §Credenciales). Req 3.16, 3.17.
export const day16: Lesson = {
  day: 16,
  slug: "verificar-setup-y-cli",
  title: "Verificar el setup y Kiro CLI",
  section: "AVANZADO",
  estimatedMinutes: 18,
  icon: "concept-cli",
  objectives: [
    "Verificar que el proyecto quedó bien configurado preguntándole a Kiro en el chat",
    "Conectar credenciales (p. ej. aws configure) cuando una herramienta lo necesite",
    "Conocer Kiro CLI como superficie complementaria al IDE y cerrar el recorrido de la serie",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Cerramos el curso atando cabos: cómo confirmar que tu setup está bien, cómo conectar credenciales cuando haga falta, y qué es Kiro CLI. Con esto tienes el cuadro completo de la introducción práctica a Kiro.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Kiro CLI", icon: "concept-cli" },
        { service: "Abrir e inicializar proyecto", icon: "concept-abrir-proyecto" },
      ],
    },
    { type: "heading", level: 2, text: "Verificar el setup desde el chat" },
    {
      type: "paragraph",
      text:
        "La forma más directa de comprobar que todo cargó es preguntárselo a Kiro en el propio chat. Por ejemplo, qué steering files están cargados: si acabas de inicializar el proyecto, dirá que ninguno todavía, lo cual es correcto.",
    },
    {
      type: "code",
      lang: "text",
      title: "Verificar en el chat",
      code: "¿Que steering files estan cargados para este proyecto?",
    },
    { type: "heading", level: 2, text: "Conectar credenciales cuando aplique" },
    {
      type: "paragraph",
      text:
        "Algunas herramientas (ciertos servidores MCP o skills) necesitan acceso a APIs externas, por ejemplo de AWS. Las credenciales se configuran como lo harías para la AWS CLI; Kiro las hereda de tu entorno de shell y de ~/.aws/credentials. No hace falta pegar credenciales dentro de Kiro.",
    },
    {
      type: "code",
      lang: "bash",
      title: "Configurar credenciales de AWS (si una herramienta lo requiere)",
      code:
        "# Perfil de AWS (recomendado para desarrollo local)\n" +
        "aws configure --profile mi-sandbox\n" +
        "\n" +
        "# o inicio de sesion SSO\n" +
        "aws sso login --profile mi-org-sso",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Kiro hereda las credenciales de tu shell y de ~/.aws/credentials: no tienes que pegarlas en Kiro. Esto solo aplica cuando una herramienta concreta necesita acceso a una API externa; para el trabajo de código normal no hace falta.",
    },
    { type: "heading", level: 2, text: "Kiro CLI: la superficie complementaria" },
    {
      type: "paragraph",
      text:
        "Además del IDE, existe Kiro CLI: un agente de código que vive en tu terminal. Lee tu código, escribe código, ejecuta comandos y pide confirmación antes de hacer algo destructivo. Es una superficie complementaria al IDE: muchas capacidades de specs están disponibles en el IDE, la CLI y la web, aunque algunas features difieren por superficie.",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Con esto cierras la introducción práctica a Kiro: instalación, autenticación, la interfaz, el chat, Vibe vs Spec, el modo Vibe en profundidad y un primer proyecto de principio a fin. Ya tienes la base para trabajar con soltura en el día a día.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Siguientes pasos en la serie: el modo Spec (desarrollo guiado por especificaciones) es el primer curso, y los Powers de Kiro —hooks, steering, MCP y skills— son el tercero. Las secciones del panel que aquí solo asomamos se profundizan allí.",
    },
    {
      type: "checklist",
      title: "Cierre del getting started",
      items: [
        "Sé verificar el setup preguntándole a Kiro en el chat.",
        "Sé conectar credenciales (aws configure) cuando una herramienta lo requiera, sin pegarlas en Kiro.",
        "Conozco Kiro CLI como superficie complementaria al IDE.",
        "Sé qué cubren los otros dos cursos de la serie (specs y Powers).",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es la forma más directa de verificar que tu proyecto quedó bien configurado?",
      options: [
        "Reinstalar Kiro",
        "Preguntárselo a Kiro en el chat (p. ej. qué steering files están cargados)",
        "Editar a mano el settings.json",
        "Abrir un ticket de soporte",
      ],
      correctIndex: 1,
      explanation:
        "La vía más directa es preguntárselo a Kiro en el chat: por ejemplo, qué steering files están cargados. Si acabas de inicializar, responderá que ninguno todavía, lo cual es lo esperado.",
    },
    {
      question: "¿Cómo obtiene Kiro las credenciales de AWS cuando una herramienta las necesita?",
      options: [
        "Hay que pegarlas dentro de Kiro en texto plano",
        "Las hereda de tu entorno de shell y de ~/.aws/credentials; se configuran como para la AWS CLI (p. ej. aws configure)",
        "Kiro no puede usar credenciales de AWS",
        "Se introducen en el navegador cada vez",
      ],
      correctIndex: 1,
      explanation:
        "Kiro hereda las credenciales de tu shell y de ~/.aws/credentials, configuradas como para la AWS CLI (aws configure, aws sso login). No hace falta pegarlas dentro de Kiro, y solo se necesitan cuando una herramienta concreta accede a una API externa.",
    },
    {
      question: "¿Qué es Kiro CLI?",
      options: [
        "Un reemplazo del IDE que lo deja obsoleto",
        "Un agente de código que vive en la terminal, como superficie complementaria al IDE; pide confirmación antes de acciones destructivas",
        "Un servicio de pago aparte sin relación con Kiro",
        "Una extensión de terceros no oficial",
      ],
      correctIndex: 1,
      explanation:
        "Kiro CLI es un agente de código que vive en la terminal: lee y escribe código, ejecuta comandos y pide confirmación antes de algo destructivo. Es una superficie complementaria al IDE; muchas capacidades de specs están en IDE, CLI y web, aunque algunas features difieren por superficie.",
    },
  ],
};
