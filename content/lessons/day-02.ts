import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/01-instalacion-y-setup.md. Req 3.2.
export const day02: Lesson = {
  day: 2,
  slug: "plataformas-e-instalacion",
  title: "Plataformas e instalación",
  section: "BÁSICO",
  estimatedMinutes: 14,
  icon: "concept-instalacion",
  objectives: [
    "Conocer las plataformas soportadas por Kiro y comprobar que tu sistema es compatible",
    "Instalar Kiro como una aplicación de escritorio normal",
    "Entender que, al estar sobre VS Code, la interfaz es inmediatamente familiar",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Instalar Kiro es tan sencillo como instalar cualquier aplicación de escritorio: se descarga de kiro.dev y se instala con el instalador de tu sistema. Como está construido sobre VS Code, en cuanto lo abres la interfaz te resulta familiar.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Instalación", icon: "concept-instalacion" }],
    },
    { type: "heading", level: 2, text: "Plataformas soportadas" },
    {
      type: "list",
      items: [
        "macOS (Intel y Apple Silicon)",
        "Windows 10 y 11 (64 bits)",
        "Linux (Ubuntu 24+ y equivalentes)",
      ],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Comprueba primero que tu sistema entra en la matriz de plataformas. En Windows se requiere la edición de 64 bits; en Linux, Ubuntu 24 o superior (o una distribución equivalente).",
    },
    { type: "heading", level: 2, text: "Descargar e instalar" },
    {
      type: "paragraph",
      text:
        "Descarga el instalador desde kiro.dev e instálalo como cualquier app de escritorio. No hay pasos exóticos: el flujo es el habitual de tu sistema operativo (arrastrar a Aplicaciones en macOS, ejecutar el instalador en Windows, el paquete correspondiente en Linux).",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Al abrir Kiro por primera vez verás una pantalla de bienvenida que te pide iniciar sesión. La autenticación es el tema de la siguiente lección; aquí basta con tener Kiro instalado y abriéndose.",
    },
    {
      type: "checklist",
      title: "Antes de pasar a la siguiente lección",
      items: [
        "Verifiqué que mi sistema está en la lista de plataformas soportadas.",
        "Descargué Kiro desde kiro.dev.",
        "Lo instalé como una app de escritorio y abre la pantalla de bienvenida.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuáles son las plataformas soportadas por Kiro?",
      options: [
        "Solo macOS con Apple Silicon",
        "macOS (Intel y Apple Silicon), Windows 10/11 de 64 bits, y Linux (Ubuntu 24+ y equivalentes)",
        "Solo Windows 11",
        "Únicamente mediante navegador web, sin instalación",
      ],
      correctIndex: 1,
      explanation:
        "Kiro soporta macOS (Intel y Apple Silicon), Windows 10/11 de 64 bits y Linux (Ubuntu 24+ y equivalentes). Se instala como una aplicación de escritorio.",
    },
    {
      question: "¿Por qué la interfaz de Kiro resulta familiar nada más abrirlo?",
      options: [
        "Porque es idéntica a un navegador web",
        "Porque está construido sobre VS Code (Code OSS)",
        "Porque copia la interfaz de la terminal",
        "Porque no tiene interfaz gráfica",
      ],
      correctIndex: 1,
      explanation:
        "Kiro está construido sobre VS Code (Code OSS), así que su interfaz es inmediatamente familiar para quien ya usa VS Code, y conserva temas, atajos y la mayoría de extensiones.",
    },
    {
      question: "Tras instalar Kiro y abrirlo por primera vez, ¿qué ocurre?",
      options: [
        "Empieza a programar solo sin pedir nada",
        "Muestra una pantalla de bienvenida que pide iniciar sesión",
        "Exige configurar una cuenta de AWS de pago antes de abrir",
        "Se cierra hasta que instales extensiones",
      ],
      correctIndex: 1,
      explanation:
        "Al abrir Kiro por primera vez aparece una pantalla de bienvenida que pide autenticarse. La instalación solo deja Kiro listo para ese primer inicio de sesión, que es el tema de la siguiente lección.",
    },
  ],
};
