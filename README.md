# Sistema de Memorización de Preguntas sobre Tecnologías

Este es un sistema de memorización de preguntas sobre tecnologías desarrollado con React 19, Vite y TypeScript. La aplicación está diseñada para ayudar a los usuarios a memorizar preguntas y respuestas en diferentes niveles de dificultad.

## Características

- **Cuatro niveles de dificultad**: La aplicación ofrece cuatro niveles de preguntas para adaptarse al nivel de conocimiento del usuario.
- **Interfaz amigable**: Diseño intuitivo y fácil de usar para mejorar la experiencia del usuario.
- **Desarrollado con React 19 y TypeScript**: Aprovecha las últimas características de React y la seguridad de tipos de TypeScript.
- **Configurado con Vite**: Utiliza Vite para un entorno de desarrollo rápido y eficiente.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn (versión 1 o superior)

### Pasos de instalación

1. Clona el repositorio
   git clone https://github.com/nicoContigliani/memoitsReact19

2. Navega al directorio del proyecto    
   cd nombre-repositorio

3. Instala las dependencias
   npm install
   o
   yarn install

4. Inicia el servidor de desarrollo
   npm run dev

## Estructura del Proyecto
<!-- .
├── index.html 
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.scss
│   ├── App.tsx
│   ├── assets
│   │   ├── react.svg
│   │   └── styles
│   │       └── main.scss
│   ├── components
│   │   ├── Buttons
│   │   │   ├──  buttons.sass
│   │   │   └── Button.tsx
│   │   ├── cards
│   │   ├── checkbox
│   │   │   └── Checkbox.tsx
│   │   ├── checkboxmaps
│   │   │   └── Checkbox.tsx
│   │   ├── FloatButtons
│   │   │   └── Floatbutton.tsx
│   │   ├── inputs
│   │   │   └── Inputs.tsx
│   │   └── Map
│   │       ├── Asks
│   │       │   └── Asks.tsx
│   │       ├── Aswers
│   │       ├── Maps.tsx
│   │       └── Selects
│   │           └── Selects.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── services
│   ├── utils
│   │   └── generateNumberRandom.utils.ts
│   ├── virtualDb
│   │   ├── virtualJSON copy.json
│   │   └── virtualJSON.json
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts -->
.
├── index.html       # Entry point for the application
├── package.json     # Project dependencies and scripts
├── package-lock.json # Lock file for installed dependencies
├── public            # Public assets accessible directly
│   └── vite.svg      # Example public asset
├── README.md         # This file (project documentation)
├── src               # Source code for your application
│   ├── App.css        # Base styles for the app
│   ├── App.scss       # Optional SCSS styles (if using)
│   ├── App.tsx        # Main application component
│   ├── assets         # Project assets
│   │   ├── react.svg  # Example asset
│   │   └── styles     # Project-specific styles
│   │       └── main.scss # Main SCSS styles (if using)
│   ├── components     # Reusable UI components
│   │   ├── Buttons     # Button components
│   │   │   ├── buttons.sass # Styles for button components (if using)
│   │   │   └── Button.tsx    # Button component code
│   │   ├── cards        # Card components
│   │   ├── checkbox     # Checkbox components
│   │   │   └── Checkbox.tsx # Checkbox component code
│   │   ├── checkboxmaps # Checkbox maps (unclear purpose)
│   │   │   └── Checkbox.tsx # Checkbox component code (duplicate?)
│   │   ├── FloatButtons  # Floating button components
│   │   │   └── Floatbutton.tsx # Floating button component code
│   │   ├── inputs        # Input components
│   │   │   └── Inputs.tsx   # Input component code
│   │   └── Map           # Map component (unclear purpose)
│   │       ├── Asks        # Asks subcomponent (within Map?)
│   │       │   └── Asks.tsx   # Asks code
│   │       ├── Aswers       # Aswers subcomponent (within Map?)
│   │       ├── Maps.tsx     # Map component code
│   │       └── Selects     # Selects subcomponent (within Map?)
│   │           └── Selects.tsx # Selects code
│   ├── index.css      # Additional styles for the app (if using)
│   ├── main.tsx        # Main application entry point
│   ├── services       # Project-specific services (if applicable)
│   ├── utils          # Utility functions
│   │   └── generateNumberRandom.utils.ts # Example utility function
│   ├── virtualDb        # Virtual database files (if applicable)
│   │   ├── virtualJSON copy.json # Example virtual JSON file
│   │   └── virtualJSON.json     # Example virtual JSON file
│   └── vite-env.d.ts     # TypeScript environment variables (if using)
├── tsconfig.app.json  # TypeScript configuration for the application
├── tsconfig.json     # Base TypeScript configuration
├── tsconfig.node.json # TypeScript configuration f