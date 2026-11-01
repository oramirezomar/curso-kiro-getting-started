import type { Lesson } from "@/lib/types";

// Fuente: docs-referencia/kiro-getting-started/01-instalacion-y-setup.md
// (§Autenticación). Req 3.3.
export const day03: Lesson = {
  day: 3,
  slug: "autenticacion",
  title: "Autenticación: proveedores y organización",
  section: "BÁSICO",
  estimatedMinutes: 18,
  icon: "concept-autenticacion",
  objectives: [
    "Elegir un proveedor de inicio de sesión: GitHub, Google o AWS Builder ID",
    "Entender la vía de organización (AWS IAM Identity Center o IdP externo como Okta/Entra ID), incluida GovCloud",
    "Confirmar que no se necesita una cuenta de AWS para empezar a usar Kiro",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "En la pantalla de bienvenida eliges cómo autenticarte. Kiro te redirige a tu navegador por defecto para completar el inicio de sesión y, al volver, ya estás dentro. Hay dos caminos: proveedores personales o la vía de organización.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Autenticación", icon: "concept-autenticacion" }],
    },
    { type: "heading", level: 2, text: "Proveedores personales" },
    {
      type: "list",
      items: [
        "GitHub — autentícate y autoriza la app de Kiro (aparece como kirodotdev).",
        "Google — inicia sesión con tu cuenta de Google.",
        "AWS Builder ID — una identidad personal de AWS, gratuita e independiente de una cuenta de AWS.",
      ],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "No necesitas una cuenta de AWS para empezar. El AWS Builder ID es gratuito y no requiere una cuenta de AWS; también puedes entrar con Google o GitHub.",
    },
    { type: "heading", level: 2, text: "Vía de organización" },
    {
      type: "paragraph",
      text:
        "Si tu cuenta de Kiro la gestiona un administrador, eliges 'Tu organización'. Hay dos opciones, y en ambas tu admin te da los datos necesarios:",
    },
    {
      type: "list",
      items: [
        "AWS IAM Identity Center — necesitas la Start URL y la región de AWS que aloja tu directorio de identidad.",
        "Proveedor de identidad externo (Okta, Microsoft Entra ID) — introduces tu correo de trabajo o la Kiro Start URL de tu admin. Es también la vía para las regiones AWS GovCloud (US).",
      ],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "El flujo arranca igual en todos los casos: en la pantalla de bienvenida eliges tu inicio de sesión y Kiro abre tu navegador por defecto para completarlo. La diferencia está en qué datos necesitas (los personales no requieren nada extra; la organización requiere los datos del admin).",
    },
    {
      type: "checklist",
      title: "Elegir tu vía de autenticación",
      items: [
        "Uso personal o prueba: GitHub, Google o AWS Builder ID (gratis, sin cuenta AWS).",
        "Entorno corporativo con admin: 'Tu organización' con IAM Identity Center o IdP externo.",
        "AWS GovCloud (US): vía de proveedor de identidad externo con la Kiro Start URL.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Necesitas una cuenta de AWS para empezar a usar Kiro?",
      options: [
        "Sí, es obligatoria y de pago",
        "No: puedes entrar con GitHub, Google o un AWS Builder ID gratuito",
        "Sí, pero solo la versión GovCloud",
        "No se puede autenticar de ninguna forma sin AWS",
      ],
      correctIndex: 1,
      explanation:
        "No hace falta una cuenta de AWS. Puedes autenticarte con GitHub, Google o un AWS Builder ID, que es gratuito e independiente de una cuenta de AWS.",
    },
    {
      question: "Para la vía de organización con AWS IAM Identity Center, ¿qué datos necesitas?",
      options: [
        "Solo tu correo personal",
        "La Start URL y la región de AWS que aloja tu directorio de identidad, provistas por tu admin",
        "Una tarjeta de crédito",
        "Nada: se configura solo",
      ],
      correctIndex: 1,
      explanation:
        "Con AWS IAM Identity Center necesitas la Start URL y la región de AWS que aloja tu directorio de identidad, datos que te proporciona tu administrador.",
    },
    {
      question: "¿Cuál es la vía indicada para las regiones AWS GovCloud (US)?",
      options: [
        "GitHub",
        "Google",
        "El proveedor de identidad externo, introduciendo la Kiro Start URL de tu admin",
        "AWS Builder ID",
      ],
      correctIndex: 2,
      explanation:
        "La vía para AWS GovCloud (US) es la de proveedor de identidad externo, donde introduces tu correo de trabajo o la Kiro Start URL que te da tu administrador.",
    },
  ],
};
