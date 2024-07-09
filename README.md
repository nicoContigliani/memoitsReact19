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
.<br/>
├── index.html <br/>
├── package.json<br/>
├── package-lock.json<br/>
├── public<br/>
│   └── vite.svg<br/>
├── README.md<br/>
├── src
│   ├── App.css<br/>
│   ├── App.scss<br/>
│   ├── App.tsx<br/>
│   ├── assets<br/>
│   │   ├── react.svg<br/>
│   │   └── styles<br/>
│   │       └── main.scss<br/>
│   ├── components<br/>
│   │   ├── Buttons<br/>
│   │   │   ├──  buttons.sass<br/>
│   │   │   └── Button.tsx<br/>
│   │   ├── cards<br/>
│   │   ├── checkbox<br/>
│   │   │   └── Checkbox.tsx<br/>
│   │   ├── checkboxmaps<br/>
│   │   │   └── Checkbox.tsx<br/>
│   │   ├── FloatButtons<br/>
│   │   │   └── Floatbutton.tsx<br/>
│   │   ├── inputs<br/>
│   │   │   └── Inputs.tsx<br/>
│   │   └── Map<br/>
│   │       ├── Asks<br/>
│   │       │   └── Asks.tsx<br/>
│   │       ├── Aswers<br/>
│   │       ├── Maps.tsx<br/>
│   │       └── Selects<br/>
│   │           └── Selects.tsx<br/>
│   ├── index.css<br/>
│   ├── main.tsx<br/>
│   ├── services<br/>
│   ├── utils<br/>
│   │   └── generateNumberRandom.utils.ts<br/>
│   ├── virtualDb<br/>
│   │   ├── virtualJSON copy.json<br/>
│   │   └── virtualJSON.json<br/>
│   └── vite-env.d.ts<br/>
├── tsconfig.app.json<br/>
├── tsconfig.json<br/>
├── tsconfig.node.json<br/>
└── vite.config.ts<br/>