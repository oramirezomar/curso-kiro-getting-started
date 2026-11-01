import Link from "next/link";
import { totalLessons } from "@/content/lessons";

// Página de presentación (home) del curso. Clona el patrón verificado de
// curso-kiro-spec-driven/app/page.tsx y adapta los textos al dominio
// getting-started de Kiro. Usa totalLessons real del catálogo. Se prerenderiza
// como página estática en la raíz "/" para evitar el 404/401 al entrar por raíz.
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-200">
        Curso de autoestudio — {totalLessons} lecciones
      </span>
      <h1 className="max-w-2xl text-4xl font-bold text-slate-900 sm:text-5xl dark:text-slate-50">
        Getting Started con Kiro: de la instalación al primer proyecto
      </h1>
      <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
        Una ruta de aprendizaje en tres niveles (Básico, Medio y Avanzado) sobre
        la introducción práctica a Kiro: qué es y por qué, instalación y
        autenticación, la interfaz y el panel de chat, el modo Vibe y el recorrido
        del primer proyecto. Avanzá a tu ritmo, tu progreso se guarda
        automáticamente en este dispositivo.
      </p>
      <Link
        href="/curso"
        className="mt-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-600"
      >
        Empezar el curso
      </Link>
    </main>
  );
}
