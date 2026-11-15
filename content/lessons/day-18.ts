import type { Lesson } from "@/lib/types";
// Complemento del curso oficial "Kiro: Getting Started" (AWS Skill Builder).
export const day18: Lesson = {
  day: 18,
  slug: "demo-primera-spec",
  title: "Demo: tu primera spec y su implementación",
  section: "AVANZADO",
  estimatedMinutes: 20,
  icon: "concept-primer-proyecto",
  objectives: [
    "Crear una spec desde cero describiendo un proyecto en lenguaje natural",
    "Revisar y refinar requisitos, diseño y tareas con puertas de aprobación",
    "Entender las opciones de confianza de comandos al implementar",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Esta demo del curso oficial construye un script de terminal que muestra la temperatura actual y la probabilidad de lluvia para un código postal, con un argumento para cambiarlo al viajar. Recorre dos momentos: generar la spec e implementarla.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Proyecto", icon: "concept-abrir-proyecto" },
        { service: "Spec", icon: "concept-vibe-spec" },
        { service: "Primer proyecto", icon: "concept-primer-proyecto" },
      ],
    },
    { type: "heading", level: 2, text: "Antes de empezar: confianza en la carpeta" },
    {
      type: "paragraph",
      text:
        "Al abrir la carpeta, Kiro pide el nivel de confianza, porque puede ejecutar archivos automáticamente en ella. Si el código viene de un tercero (un repositorio git o algo copiado de un sitio web), inspecciónalo antes de confiar. En la demo Kiro escribe el código, así que se elige confiar en los autores.",
    },
    { type: "heading", level: 2, text: "Parte 1: generar la spec" },
    {
      type: "list",
      ordered: true,
      items: [
        "En el panel de chat, con el modo Spec seleccionado, describe el proyecto con el mayor detalle posible: entradas, salidas esperadas y formatos.",
        "Si conoces el lenguaje, indícalo. Si no, di que aceptas sugerencias.",
        "Termina la petición pidiendo preguntas aclaratorias para que Kiro discuta opciones antes de asumir.",
        "Abre requirements.md: introducción, y cada requisito como historia de usuario con criterios de aceptación.",
        "Pide una función adicional en el chat; Kiro hará preguntas para fijarla bien.",
        "Pulsa pasar a la fase de diseño, revisa design.md (arquitectura, componentes, modelos de datos).",
        "Pulsa pasar al plan de implementación y revisa tasks.md. Finaliza la lista de tareas.",
      ],
    },
    {
      type: "code",
      lang: "text",
      title: "Ejemplo de petición (redacción propia)",
      code: "Quiero planear un script de terminal que muestre la temperatura\nactual y la probabilidad de lluvia de mi código postal.\nDebe aceptar un argumento para cambiar el código postal.\nDebe funcionar en macOS, Windows y Linux sin muchos cambios.\nNo tengo preferencia de lenguaje.\nHaz tus preguntas aclaratorias.",
    },
    {
      type: "code",
      lang: "text",
      title: "Segunda petición: ampliar los requisitos",
      code: "Añade un requisito: si hay alertas en mi zona (calor, frío, viento),\nmuéstralas junto con los demás datos. Haz tus preguntas aclaratorias.",
    },
    { type: "heading", level: 2, text: "Parte 2: implementar la spec" },
    {
      type: "paragraph",
      text:
        "Selecciona el proyecto en el panel de Specs y dile a Kiro que estás listo para construir. Revisa los documentos y empieza por la tarea 1, que muestra el estado En progreso. Cuando Kiro necesita ejecutar un comando, lo muestra en el chat con cuatro opciones.",
    },
    {
      type: "list",
      items: [
        "Modificar comando.",
        "Rechazar comando.",
        "Aceptar comando: se ejecuta solo esta vez.",
        "Confiar en el comando y aceptar: añade el comando a la lista de aprobación automática.",
      ],
    },
    { type: "heading", level: 3, text: "Niveles al confiar en un comando" },
    {
      type: "code",
      lang: "text",
      title: "De más estricto a más amplio",
      code: "Comando completo   solo cuando el comando es idéntico\nParcial            el mismo comando con cualquier argumento\nBase               todos los comandos de esa herramienta (p. ej. python)",
    },
    {
      type: "callout",
      variant: "warning",
      text:
        "Elige con cuidado, sobre todo con comandos que ejecutan código como python. Base autoriza cualquier script de ese intérprete. Ante la duda, usa Comando completo.",
    },
    {
      type: "paragraph",
      text:
        "Tras cada tarea Kiro prueba el script con varias entradas, resume los resultados y espera tu aprobación (por ejemplo, un simple continúa) para seguir. Al final muestra un resumen de finalización y el programa queda listo.",
    },
  ],
  selfCheck: [
    {
      question: "¿Por qué terminar la petición pidiendo preguntas aclaratorias?",
      options: [
        "Para que Kiro no responda",
        "Para que Kiro discuta opciones y confirme la intención antes de asumir",
        "Para acortar el documento",
        "Es obligatorio por la interfaz",
      ],
      correctIndex: 1,
      explanation: "Le da a Kiro la oportunidad de aclarar la intención de tus requisitos antes de generarlos.",
    },
    {
      question: "¿Qué nivel de confianza es el más restrictivo?",
      options: ["Base", "Parcial", "Comando completo", "Todos son iguales"],
      correctIndex: 2,
      explanation: "Comando completo solo aprueba automáticamente el comando idéntico.",
    },
    {
      question: "¿Qué haces antes de confiar en una carpeta con código de terceros?",
      options: [
        "Confiar sin revisar",
        "Inspeccionar el código para entender qué hace y con qué interactuará",
        "Borrar la carpeta",
        "Nada, Kiro lo valida",
      ],
      correctIndex: 1,
      explanation: "Kiro puede ejecutar archivos de la carpeta, así que hay que revisar el código ajeno antes de confiar.",
    },
  ],
};
