import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Getting Started con Kiro: de la instalación al primer proyecto",
  description:
    "Curso de autoestudio sobre la introducción práctica a Kiro (instalación, autenticación, la interfaz, el modo Vibe y el primer proyecto), en una ruta de tres niveles (Básico, Medio y Avanzado) para avanzar a tu ritmo desde el celular o el escritorio.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
