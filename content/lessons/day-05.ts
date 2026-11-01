import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/01-instalacion-y-setup.md
// (§Abrir un proyecto, §Inicializar, §Verificar). Req 3.5.
export const day05: Lesson = {
  day: 5,
  slug: "abrir-e-inicializar-proyecto",
  title: "Abrir e inicializar un proyecto (.kiro/)",
  section: "BÁSICO",
  estimatedMinutes: 18,
  icon: "concept-abrir-proyecto",
  objectives: [
    "Abrir un proyecto en Kiro desde File > Open Folder o desde la terminal con kiro /ruta",
    "Entender el escaneo del directorio .kiro/ y qué pasa si existe o no",
    "Inicializar el proyecto y reconocer .kiro/ como un artefacto de equipo que se commitea",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Para trabajar con un proyecto, lo abres en Kiro como en cualquier editor. Pero hay un detalle propio de Kiro: al abrir una carpeta, escanea el directorio .kiro/ en la raíz. Ese directorio es donde vive el contexto del proyecto (steering y ajustes), y conviene entender cómo se crea y por qué se comparte.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Abrir e inicializar proyecto", icon: "concept-abrir-proyecto" }],
    },
    { type: "heading", level: 2, text: "Abrir el proyecto" },
    {
      type: "code",
      lang: "text",
      title: "Dos formas de abrir una carpeta",
      code:
        "File > Open Folder > /ruta/a/tu/repo\n" +
        "\n" +
        "# o desde la terminal:",
    },
    {
      type: "code",
      lang: "bash",
      title: "Abrir desde la terminal",
      code: "kiro /ruta/a/tu/repo",
    },
    {
      type: "paragraph",
      text:
        "Al abrir, Kiro escanea el directorio .kiro/ en la raíz. Si lo encuentra, carga automáticamente los steering files y la configuración del proyecto. Si no existe, te ofrece inicializarlo.",
    },
    { type: "heading", level: 2, text: "Inicializar el proyecto" },
    {
      type: "paragraph",
      text:
        "Si empiezas de cero, ejecutas el comando de inicialización desde la paleta de comandos:",
    },
    {
      type: "code",
      lang: "text",
      title: "Inicializar con la paleta de comandos",
      code: 'Cmd/Ctrl+Shift+P > "Kiro: Initialize Project"',
    },
    {
      type: "paragraph",
      text:
        "Esto crea la estructura base del directorio .kiro/, con una carpeta steering (vacía, que poblarás después) y un archivo de ajustes:",
    },
    {
      type: "code",
      lang: "text",
      title: "Estructura creada por la inicialización",
      code:
        ".kiro/\n" +
        "  steering/        <- directorio vacio que poblaras\n" +
        "  settings.json    <- servidores MCP, ajustes de agente",
      highlightLines: [2, 3],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "El directorio .kiro/ es un artefacto de EQUIPO, no un archivo de preferencia personal. Conviene commitearlo a git: así todo el que abra el repo en Kiro obtiene el mismo contexto (steering y ajustes) automáticamente.",
    },
    { type: "heading", level: 2, text: "Verificar el setup" },
    {
      type: "paragraph",
      text:
        "Para comprobar que todo cargó, abre el panel de chat (Cmd/Ctrl+L) y pregunta, por ejemplo, qué steering files están cargados. Si acabas de inicializar, Kiro dirá que no hay ninguno todavía — es lo esperado; los añadirás más adelante (ese es tema del tercer curso de la serie).",
    },
    {
      type: "checklist",
      title: "Abrir e inicializar, paso a paso",
      items: [
        "Abrí el proyecto con File > Open Folder o kiro /ruta.",
        "Kiro escaneó .kiro/: si existía, cargó steering y ajustes; si no, me ofreció inicializar.",
        "Inicialicé con 'Kiro: Initialize Project' si empezaba de cero.",
        "Commiteé .kiro/ a git para compartir el contexto con el equipo.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "Al abrir una carpeta, ¿qué directorio escanea Kiro y para qué?",
      options: [
        "node_modules/, para instalar dependencias",
        ".kiro/, para cargar los steering files y la configuración del proyecto",
        ".git/, para leer el historial",
        "dist/, para servir el build",
      ],
      correctIndex: 1,
      explanation:
        "Kiro escanea el directorio .kiro/ en la raíz. Si lo encuentra, carga automáticamente los steering files y los ajustes; si no existe, te ofrece inicializarlo.",
    },
    {
      question: "¿Qué crea el comando 'Kiro: Initialize Project'?",
      options: [
        "Un repositorio git nuevo",
        "La estructura .kiro/ con una carpeta steering/ y un settings.json",
        "Un proyecto Next.js completo",
        "Una cuenta de AWS",
      ],
      correctIndex: 1,
      explanation:
        "La inicialización crea el directorio .kiro/ con una carpeta steering/ (vacía, para poblar después) y un settings.json (servidores MCP y ajustes de agente).",
    },
    {
      question: "¿Por qué conviene commitear el directorio .kiro/ a git?",
      options: [
        "Porque contiene secretos que deben versionarse",
        "Porque es un artefacto de equipo: así todos los que abran el repo obtienen el mismo contexto (steering y ajustes)",
        "Porque Kiro no funciona si no está en git",
        "Porque reduce el tamaño del repositorio",
      ],
      correctIndex: 1,
      explanation:
        ".kiro/ es un artefacto de equipo, no una preferencia personal. Commitearlo asegura que cualquier integrante que abra el repo en Kiro cargue el mismo steering y los mismos ajustes automáticamente.",
    },
  ],
};
