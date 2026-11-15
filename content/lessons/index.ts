// Catálogo_Lecciones del Curso_Kiro_Getting_Started (Getting Started con Kiro).
//
// Punto único de acceso al contenido del curso: expone el arreglo `sections`
// (los 3 Niveles: BÁSICO, MEDIO, AVANZADO), el arreglo `lessons` (las
// Lecciones day01..day16) y los helpers de navegación. Clonado del patrón
// verificado del Curso_Kiro_Spec_Driven y adaptado al temario getting-started.
//
// Trazabilidad: Req 2.1–2.6, 4.8, 4.9, 10.5, 11.5.

import type { ContentBlock, CourseSection, IconId, Lesson } from "@/lib/types";
import { PLACEHOLDER_ICON, resolveIcon } from "@/lib/iconCatalog";

import { day01 } from "./day-01";
import { day02 } from "./day-02";
import { day03 } from "./day-03";
import { day04 } from "./day-04";
import { day05 } from "./day-05";
import { day06 } from "./day-06";
import { day07 } from "./day-07";
import { day08 } from "./day-08";
import { day09 } from "./day-09";
import { day10 } from "./day-10";
import { day11 } from "./day-11";
import { day12 } from "./day-12";
import { day13 } from "./day-13";
import { day14 } from "./day-14";
import { day15 } from "./day-15";
import { day16 } from "./day-16";
import { day17 } from "./day-17";
import { day18 } from "./day-18";

// ─────────────────────────────────────────────────────────────────────────
// Niveles (sections) — 3 entradas EXACTAS según design.md.
//   BÁSICO    → day 1–5
//   MEDIO     → day 6–10
//   AVANZADO  → day 11–16
// ─────────────────────────────────────────────────────────────────────────
export const sections: CourseSection[] = [
  { title: "BÁSICO", dayRange: [1, 5], icon: "concept-nivel-basico" },
  { title: "MEDIO", dayRange: [6, 10], icon: "concept-nivel-medio" },
  { title: "AVANZADO", dayRange: [11, 18], icon: "concept-nivel-avanzado" },
];

// ─────────────────────────────────────────────────────────────────────────
// Lecciones (lessons) — las 16 Lecciones day01..day16 en orden ascendente de
// `day`. Los imports y el registro se completan al andamiar/registrar las
// Lecciones. Mientras el arreglo esté vacío, `assertCatalog()` pasa
// trivialmente (conjunto vacío válido).
export const lessons: Lesson[] = [
  day01,
  day02,
  day03,
  day04,
  day05,
  day06,
  day07,
  day08,
  day09,
  day10,
  day11,
  day12,
  day13,
  day14,
  day15,
  day16,
  day17,
  day18,
];

export function getLessonByDay(day: number): Lesson | undefined {
  return lessons.find((lesson) => lesson.day === day);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getNextLesson(day: number): Lesson | undefined {
  return getLessonByDay(day + 1);
}

export function getPreviousLesson(day: number): Lesson | undefined {
  return getLessonByDay(day - 1);
}

export const totalLessons = lessons.length;

function iconResolvesToRealEntry(id: IconId | undefined): boolean {
  if (id === undefined) return true;
  return resolveIcon(id) !== PLACEHOLDER_ICON;
}

/**
 * Valida todas las invariantes estructurales del Catálogo_Lecciones y se
 * ejecuta al cargar el módulo. Un catálogo inválido rompe `next build`
 * (Req 10.5). Con `lessons` vacío pasa trivialmente (estado temporal válido).
 */
export function assertCatalog(): void {
  for (const section of sections) {
    if (!iconResolvesToRealEntry(section.icon)) {
      throw new Error(
        `[Catálogo_Lecciones] Icono de Nivel inválido: la section "${section.title}" ` +
          `referencia el icono "${section.icon}" inexistente (resuelve al placeholder). Req 11.5.`,
      );
    }
  }

  const seenSlugs = new Set<string>();
  for (const lesson of lessons) {
    if (seenSlugs.has(lesson.slug)) {
      throw new Error(
        `[Catálogo_Lecciones] slug duplicado: "${lesson.slug}" (day ${lesson.day}). Req 4.8.`,
      );
    }
    seenSlugs.add(lesson.slug);
  }

  const seenDays = new Set<number>();
  for (const lesson of lessons) {
    if (seenDays.has(lesson.day)) {
      throw new Error(
        `[Catálogo_Lecciones] day duplicado: ${lesson.day} (slug "${lesson.slug}"). Req 4.9.`,
      );
    }
    seenDays.add(lesson.day);
  }
  for (let expected = 1; expected <= lessons.length; expected += 1) {
    if (!seenDays.has(expected)) {
      throw new Error(
        `[Catálogo_Lecciones] secuencia de days con huecos: falta el day ${expected}. Req 4.9.`,
      );
    }
  }

  const orderedSections = [...sections].sort((a, b) => a.dayRange[0] - b.dayRange[0]);
  for (const section of orderedSections) {
    const [start, end] = section.dayRange;
    if (start > end) {
      throw new Error(
        `[Catálogo_Lecciones] dayRange inválido en "${section.title}": [${start}, ${end}]. Req 2.4.`,
      );
    }
  }
  for (let i = 1; i < orderedSections.length; i += 1) {
    const prev = orderedSections[i - 1];
    const curr = orderedSections[i];
    if (prev.dayRange[1] + 1 !== curr.dayRange[0]) {
      throw new Error(
        `[Catálogo_Lecciones] dayRange no contiguos entre "${prev.title}" y "${curr.title}". Req 2.4.`,
      );
    }
  }

  for (const lesson of lessons) {
    const matches = sections.filter((s) => s.title === lesson.section);
    if (matches.length !== 1) {
      throw new Error(
        `[Catálogo_Lecciones] section no coincidente: slug "${lesson.slug}" (day ${lesson.day}) ` +
          `declara section "${lesson.section}" (coincide con ${matches.length}, se requiere 1). Req 2.5.`,
      );
    }
    const [start, end] = matches[0].dayRange;
    if (lesson.day < start || lesson.day > end) {
      throw new Error(
        `[Catálogo_Lecciones] day fuera de rango: slug "${lesson.slug}" (day ${lesson.day}) ` +
          `en section "${lesson.section}" con dayRange [${start}, ${end}]. Req 2.6.`,
      );
    }
  }

  for (let i = 1; i < lessons.length; i += 1) {
    if (lessons[i].day <= lessons[i - 1].day) {
      throw new Error(
        `[Catálogo_Lecciones] orden de days no estrictamente creciente en day ${lessons[i].day}. Req 2.6.`,
      );
    }
  }

  for (const lesson of lessons) {
    if (!iconResolvesToRealEntry(lesson.icon)) {
      throw new Error(
        `[Catálogo_Lecciones] Icono de Lección inválido: slug "${lesson.slug}" (day ${lesson.day}) ` +
          `referencia "${lesson.icon}" inexistente. Req 11.5.`,
      );
    }
    for (const block of lesson.blocks) {
      if ((block as ContentBlock).type !== "serviceIcon") continue;
      const serviceIconBlock = block as Extract<ContentBlock, { type: "serviceIcon" }>;
      for (const item of serviceIconBlock.items) {
        if (!iconResolvesToRealEntry(item.icon)) {
          throw new Error(
            `[Catálogo_Lecciones] Icono de servicio inválido: slug "${lesson.slug}" ` +
              `servicio "${item.service}" referencia "${item.icon}" inexistente. Req 11.5.`,
          );
        }
      }
    }
  }
}

assertCatalog();
