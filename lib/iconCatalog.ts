// Catálogo_Iconos del Curso_Kiro_Getting_Started (Getting Started con Kiro).
//
// Mapa que asocia un identificador estable (IconId, en kebab-case con prefijo
// de categoría, p. ej. "concept-instalacion") con su archivo SVG local bajo
// /public/concept-icons/** y el nombre neutro del concepto o Nivel.
//
// Reglas conforme al design.md y a los Requisitos 11.1–11.6:
//  - Toda `path` empieza por "/" (asset local) y NUNCA es una URL externa
//    (http/https) — sin hotlinking ni marca (Req 11.4).
//  - Cada icono se referencia por un `id` estable resuelto por este catálogo.
//  - `resolveIcon` degrada de forma controlada al PLACEHOLDER_ICON si el id es
//    undefined o no existe; nunca lanza (Req 11.6).

import type { IconCatalog, IconEntry, IconId } from "./types";

// Icono neutro usado como degradación controlada (Req 11.6).
export const PLACEHOLDER_ICON: IconEntry = {
  id: "__placeholder__",
  path: "/concept-icons/_placeholder.svg",
  defaultLabel: "Concepto de Getting Started con Kiro",
};

export const iconCatalog: IconCatalog = {
  // ─── Niveles (3) ─────────────────────────────────────────────────────────
  "concept-nivel-basico": {
    id: "concept-nivel-basico",
    path: "/concept-icons/levels/basico.svg",
    defaultLabel: "Nivel BÁSICO",
  },
  "concept-nivel-medio": {
    id: "concept-nivel-medio",
    path: "/concept-icons/levels/medio.svg",
    defaultLabel: "Nivel MEDIO",
  },
  "concept-nivel-avanzado": {
    id: "concept-nivel-avanzado",
    path: "/concept-icons/levels/avanzado.svg",
    defaultLabel: "Nivel AVANZADO",
  },

  // ─── Conceptos / Áreas (neutros, sin marca) ──────────────────────────────
  "concept-que-es-kiro-intro": {
    id: "concept-que-es-kiro-intro",
    path: "/concept-icons/concepts/que-es-kiro-intro.svg",
    defaultLabel: "Qué es Kiro",
  },
  "concept-instalacion": {
    id: "concept-instalacion",
    path: "/concept-icons/concepts/instalacion.svg",
    defaultLabel: "Instalación",
  },
  "concept-autenticacion": {
    id: "concept-autenticacion",
    path: "/concept-icons/concepts/autenticacion.svg",
    defaultLabel: "Autenticación",
  },
  "concept-abrir-proyecto": {
    id: "concept-abrir-proyecto",
    path: "/concept-icons/concepts/abrir-proyecto.svg",
    defaultLabel: "Abrir e inicializar proyecto",
  },
  "concept-panel-kiro": {
    id: "concept-panel-kiro",
    path: "/concept-icons/concepts/panel-kiro.svg",
    defaultLabel: "El panel de Kiro",
  },
  "concept-chat": {
    id: "concept-chat",
    path: "/concept-icons/concepts/chat.svg",
    defaultLabel: "El panel de chat",
  },
  "concept-vibe-spec": {
    id: "concept-vibe-spec",
    path: "/concept-icons/concepts/vibe-spec.svg",
    defaultLabel: "Vibe y Spec",
  },
  "concept-modelos": {
    id: "concept-modelos",
    path: "/concept-icons/concepts/modelos.svg",
    defaultLabel: "Model picker",
  },
  "concept-autopilot": {
    id: "concept-autopilot",
    path: "/concept-icons/concepts/autopilot.svg",
    defaultLabel: "Autopilot y Supervised",
  },
  "concept-imagen": {
    id: "concept-imagen",
    path: "/concept-icons/concepts/imagen.svg",
    defaultLabel: "Entrada por imagen",
  },
  "concept-dev-servers": {
    id: "concept-dev-servers",
    path: "/concept-icons/concepts/dev-servers.svg",
    defaultLabel: "Dev Servers",
  },
  "concept-cambios": {
    id: "concept-cambios",
    path: "/concept-icons/concepts/cambios.svg",
    defaultLabel: "Visibilidad de cambios",
  },
  "concept-primer-proyecto": {
    id: "concept-primer-proyecto",
    path: "/concept-icons/concepts/primer-proyecto.svg",
    defaultLabel: "El primer proyecto",
  },
  "concept-cli": {
    id: "concept-cli",
    path: "/concept-icons/concepts/cli.svg",
    defaultLabel: "Kiro CLI",
  },
};

/**
 * Resuelve un IconId contra el Catálogo_Iconos.
 *
 * Degradación controlada (Req 11.6): devuelve PLACEHOLDER_ICON cuando el `id`
 * es `undefined` o no existe en el catálogo. Nunca lanza.
 */
export function resolveIcon(id: IconId | undefined): IconEntry {
  if (!id) return PLACEHOLDER_ICON;
  return iconCatalog[id] ?? PLACEHOLDER_ICON;
}
