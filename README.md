# Miguel Tattoo 🖋️

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel&logoColor=white)](https://miguel-tattoo.vercel.app/)

**Landing page moderna para el portafolio y captación de clientes de un estudio de tatuajes ubicado en La Habana, Cuba.**

> 🌐 **Demo en vivo:** [https://miguel-tattoo.vercel.app/](https://miguel-tattoo.vercel.app/)

![Descripción](src/public/miguell-tattoo.png)

---

## ¿De qué va este proyecto?

Este repositorio contiene el sitio web oficial de **Miguel Tattoo**, un tatuador profesional con estudio en el barrio de 10 de Octubre, La Habana, Cuba.

El sitio es una **Single Page Application (SPA)** construida con React + Vite que funciona como:

- 🎨 **Portafolio visual** — galería de trabajos realizados con ampliación en modal.
- 📣 **Landing de captación** — llamados a la acción directos hacia WhatsApp e Instagram.
- 🖥️ **Presentación de servicios** — secciones de Sobre mí, Trabajos, Servicios y Contacto.

---

## Características principales

- Hero principal con llamado a la acción.
- Menú responsive (desktop + móvil con hamburguesa animada).
- Secciones informativas: Sobre mí, Trabajos, Servicios y Contacto.
- Galería interactiva con ampliación de imágenes en modal.
- Animaciones de entrada y scroll con Motion.
- Diseño responsive y estilado con Tailwind CSS v4.
- Componente reutilizable para fallback de imágenes.

## Stack tecnológico

- React 18
- Vite 6
- TypeScript (entrypoint y configuración)
- Tailwind CSS v4
- Motion
- Lucide React (íconos)

## Requisitos

- Node.js 18+ (recomendado)
- pnpm (recomendado, el proyecto incluye `pnpm-lock.yaml`)

## Instalación y ejecución local

```bash
pnpm install
pnpm dev
```

La app estará disponible en `http://localhost:5173`.

## Scripts disponibles

- `pnpm dev`: inicia el servidor de desarrollo con Vite.
- `pnpm build`: genera la build de producción.

## Estructura del proyecto

```text
.
├── index.html
├── package.json
├── vite.config.ts
└── src
    ├── main.tsx
    ├── app
    │   ├── App.tsx
    │   └── components
    │       ├── ImageWithFallback.tsx
    │       ├── figma
    │       └── ui
    └── styles
        ├── index.css
        ├── tailwind.css
        ├── theme.css
        └── fonts.css
```

## Flujo de despliegue

Este repositorio está desplegado en Vercel:

- URL: https://miguel-tattoo.vercel.app/
- Build command: `pnpm build`
- Output directory: `dist`

## Contacto en la landing

- Instagram: `@migue_ltatto`
- WhatsApp: enlace directo en el botón de reserva de consulta
- Ubicación mostrada: 10 de Octubre, La Habana, Cuba

## Licencia

Si deseas publicar este repositorio, puedes añadir una licencia (por ejemplo, MIT) según tus necesidades.
