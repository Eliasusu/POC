# Investigación de Test Suites 🧪

## Descripción General 
Este repositorio está dedicado a la exploración, comparación y evaluación de diferentes frameworks y test suites utilizados en el desarrollo de software. Nuestro objetivo es investigar cómo se desempeñan, su facilidad de uso y su efectividad en escenarios del mundo real. Nos enfocaremos en tecnologías de pruebas unitarias, integración y end-to-end en aplicaciones web.

## Tabla de Contenidos 
- [Tecnologías Investigadas](#tecnologías-investigadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Usar](#cómo-usar)
- [Instalación](#instalación)
- [Casos de Prueba](#casos-de-prueba)

## Tecnologías Investigadas

| Framework                  | Lenguaje      | Tipo                | Descripción                                             |
|----------------------------|---------------|---------------------|---------------------------------------------------------|
| **Jest**                   | JavaScript    | Unitarias/Integración| Framework para pruebas en aplicaciones JavaScript, fácil de configurar y usar. |
| **Vitest**                 | TypeScript    | Unitarias/Integración| Rápido framework de pruebas basado en Vite para aplicaciones modernas. |
| **Mocha**                  | TypeScript    | Pruebas Unitarias    | Framework flexible de pruebas para JavaScript que permite diversas configuraciones. |
| **Mock Service Worker**     | JavaScript    | Simulación de APIs   | Herramienta para simular servicios y APIs en aplicaciones, útil para pruebas de integración. |
| **Testing Library**         | JavaScript    | Pruebas Unitarias/Integración| Conjunto de herramientas para probar la interacción con la interfaz de usuario. |
| **TestCafe**               | JavaScript    | Pruebas E2E          | Framework para pruebas end-to-end de aplicaciones web, fácil de usar y configurar. |

## Estructura del Proyecto

```bash
.
├── README.md                # Descripción general y detalles del proyecto
├── technologies/            # Investigación y configuraciones de test suites
│   ├── jest/                # Pruebas y ejemplos relacionados con Jest
│   ├── vitest/              # Pruebas y ejemplos relacionados con Vitest
│   ├── mocha/               # Pruebas y ejemplos relacionados con Mocha
│   ├── msw/                 # Pruebas y ejemplos relacionados con Mock Service Worker
│   ├── testing-library/     # Pruebas y ejemplos relacionados con Testing Library
│   ├── testcafe/            # Pruebas y ejemplos relacionados con TestCafe
├── docs/                    # Documentación para cada test suite
└── results/                 # Resultados de pruebas de rendimiento y comparaciones

```

## Cómo Usar

Cada directorio dentro de technologies/ contiene ejemplos y configuraciones para una suite de pruebas específica. Sigue las instrucciones en el directorio correspondiente para ejecutar las pruebas de cada framework. 

### Ejecutando un Ejemplo de Test Suite

1. Navega al directorio de la tecnología deseada:

```bash

cd technologies/jest

```

2. Instala las dependencias para esa suite:

```bash

npm install

``` 
3. Ejecuta los casos de prueba:


```bash

npm test

```

## Instalación

Clona el repositorio e instala las dependencias de cada suite de pruebas que desees explorar.

```bash

git clone git@github.com:tu-usuario/POC.git

```

Luego, navega al directorio de la tecnología específica y sigue las instrucciones de configuración.

## Casos de Prueba

Hemos incluido casos de prueba que cubren diferentes tipos de pruebas:

- Pruebas Unitarias: Se enfocan en probar unidades o componentes individuales en aislamiento.
- Pruebas de Integración: Verifican que los componentes funcionen juntos como se espera.
- Pruebas CRUD: Simulan interacciones de usuario y prueban el controlador que permite realizar las operaciones CRUD de una clase
