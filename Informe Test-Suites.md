# Descripción de las distintas tecnologías

## Integrantes

**Mocha:**
- Pacienzia Bruno 50235
- Pennice Lucas 50977
- Genovese María Clara 50979

**Vitest:**
- Palamidesi Elias 51881
- Libera Franco 47903
- Parisi Ramiro 51035

**Testing Library:**
- Manavella Enzo 51509
- Sandivaras Gonzalo 50819
- Morresi Facundo 50359

## Glosario

**Testing**: El Testing de Software es toda una disciplina en la ingeniería de software permite tener procesos, métodos de trabajo y herramientas para identificar defectos en el software alcanzando un proceso de estabilidad del mismo

**Test Suites**: es una colección de casos de prueba que están destinados a probar un programa de software para demostrar que tiene un conjunto específico de comportamientos.

**Pruebas Unitarias**: Se enfocan en probar unidades o componentes individuales en aislamiento.

**Pruebas de Integración**: Verifican que los componentes funcionen juntos como se espera.

**Pruebas CRUD**: Simulan interacciones de usuario y prueban el controlador que permite realizar las operaciones CRUD de una clase

**Prueba E2E**: Evalúan el sistema completo desde el punto de vista del usuario final. Simulan interacción del usuario con una aplicación web, para garantizar que los flujos de trabajo principales funcionen como se espera.

**Mock**: es un objeto simulado que se utiliza para probar el comportamiento de otro objeto. Se crea para que se comporte de una manera específica durante las pruebas, simulando respuestas y comportamientos. Se utilizan para comprobar si un método fue llamado de la forma esperada, cuántas veces fue llamado y si devolvió la respuesta esperada.

**Spy**: es un objeto que envuelve a una instancia real, permitiendo espiar y verificar las interacciones con esa instancia mientras se mantiene su comportamiento original.
A diferencia de los mocks, los spies no reemplazan el objeto real completamente, sino que pueden combinar el comportamiento real con la capacidad de monitorear las llamadas a los métodos.

**Assert**: es una herramienta utilizada para verificar que una condición específica sea verdadera durante la ejecución de un test.

## Introducción

En el presente trabajo realizamos una comparación entre diversas tecnologías de testing que son ampliamente utilizadas en el desarrollo de software actual. Para ello, llevamos a cabo un análisis detallado de las siguientes herramientas: Vitest, TestCafe, Testing Library, Jest y Mocha. Cada una de ellas ofrece diferentes enfoques y features, que las hacen más o menos adecuadas dependiendo del tipo de pruebas a realizar, ya sean unitarias, de integración o pruebas end-to-end.

A lo largo del informe, se detallan las principales fortalezas y debilidades de cada herramienta, así como su curva de aprendizaje, nivel de integración con otras bibliotecas o frameworks, y el soporte que tienen dentro a comunidad de desarrollo. Además, se ofrece una comparación directa entre ellas, destacando en qué contextos cada una resulta más conveniente. El objetivo es generar una noción clara y fundamentada de estas herramientas, con el fin de ayudar a la toma de decisiones a la hora de seleccionar la tecnología según las especificaciones y requerimientos de cada proyecto en particular.

## Vitest

Vitest es un framework de pruebas rápido, basado en Vite, que permite ejecutar pruebas unitarias, de integración y de componentes. Se destaca por su velocidad y su fácil integración con proyectos modernos de JavaScript, especialmente aquellos basados en **Vite**.

El uso de Vite dev server para transformar sus archivos durante los testing permite la creación de un corredor simple que no necesita lidiar con la complejidad de transformar archivos fuente y solo puede concentrarse en proporcionar el mejor DX durante las pruebas.

Un test runner que utiliza la misma configuración de su aplicación (a través de vite.config.js), compartiendo un proceso de transformación común durante el tiempo de desarrollo, construcción y prueba. Esto es extensible con la misma API de complemento que le permite a usted y a los mantenedores de sus herramientas proporcionar una integración de primera clase con Vite.

Una herramienta que se construye pensando en Vite desde el principio, aprovechando sus mejoras en DX, como su Hot Module Reload (HMR) instantáneo. Este es Vitest, un marco de pruebas de próxima generación impulsado por Vite.

## Test cafe

TestCafe es un de end-to-end testing framework robusto y fácil de usar. Permite a los desarrolladores escribir pruebas para aplicaciones web utilizando JavaScript o TypeScript.

Utiliza el protocolo nativo de Chrome DevTools (CDP) para automatizar navegadores locales basados en Chromium. Esta capacidad de automatización nativa permite a este simular con precisión las interacciones del usuario, proporcionando un acceso rápido y de bajo nivel al navegador.

La arquitectura híbrida cliente-servidor le permite ejecutar tanto código a nivel del sistema como código en el navegador. Una arquitectura híbrida fusiona  la flexibilidad y escalabilidad de la nube con el control y seguridad de los servidores locales.

Utiliza APIs de sistema de alto nivel para iniciar y gestionar los navegadores, lo cual es necesario para controlar el proceso de ejecución de las pruebas. Las pruebas de TestCafe son scripts de Node.js, lo que les permite lanzar servicios y aplicaciones, leer y escribir archivos del sistema, y utilizar sus bibliotecas.

La arquitectura híbrida ha permitido mejorar la estabilidad de las pruebas y ampliar las capacidades de testing del marco.

Además, TestCafe emplea un proxy inverso diseñado a medida para extender sus capacidades de automatización a otros navegadores. Esto incluye soporte para navegadores en la nube y aquellos que se ejecutan en dispositivos remotos, lo que lo hace versátil para diversos entornos de prueba.

## Testing-Library

Testing Library es un conjunto de herramientas para probar interfaces de usuario en aplicaciones web. Está diseñado para ayudar a los desarrolladores a escribir pruebas más enfocadas en cómo los usuarios interactúan con la aplicación, en lugar de detalles internos de implementación.

Testing Library facilita la simulación de acciones del usuario, como hacer clic en botones, escribir en formularios, o navegar entre elementos, y está diseñado para funcionar bien con frameworks como React, Angular, y Vue.

La filosofía de Testing Library es centrarse en la accesibilidad y en probar el comportamiento real de la aplicación desde la perspectiva del usuario final.

## Jest

Jest es un framework de pruebas completo para Javascript, que incluye un motor de pruebas, un corredor de pruebas y herramientas de aserción. Es usado tanto para pruebas unitarias como de integración. Es utilizado para testear tanto el frontend como el backend, y puede corroborar funciones simples o complejas. La Testing Library misma usa Jest como herramienta de aserción, aunque Jest en sí cubre pruebas a un nivel más amplio, no está limitado a la UI.

## Mocha

Mocha es un test Framework de JavaScript que corre en Node.js y en el bowser. Las pruebas en Mocha se ejecutan de manera secuencial, lo que permite una mayor flexibilidad y reportes precisos, a la vez que asigna las excepciones no capturadas a los casos de prueba correctos. Es compatible con una variedad de bibliotecas de aserciones (como Chai) y herramientas de "mocking" y "stubbing".

# Principales Features

## Vitest

### Velocidad

Diseñado para ser rápido, Vitest utiliza Vite, lo que permite una recarga
instantánea y una ejecución rápida de pruebas.

### Soporte para TypeScript

Integración nativa con TypeScript, facilitando pruebas en proyectos que lo
utilizan.

### Mocks y spies

Herramientas integradas para hacer mocks y spies, simplificando las pruebas
de funciones y módulos.

### Pruebas unitarias y de integración

Soporta tanto pruebas unitarias como pruebas de integración.

### Snapshot testing

Permite realizar pruebas de instantáneas para componentes y otros elementos.

### Vite UI

Impulsado por Vite, Vitest también cuenta con un servidor de desarrollo cuando se
ejecutan las pruebas. Esto permite que Vitest ofrezca una interfaz atractiva para ver
e interactuar con tus pruebas.

## TestCafe

### Pruebas en Múltiples Navegadores

Soporta todos los navegadores modernos, permitiendo que las pruebas se ejecuten sin problemas en diferentes entornos.

### Sin necesidad de WebDriver

funciona sin necesidad de WebDriver,esta es una herramienta que permite la automatización de servidores web, lo cual es lógico ya que su arquitectura, como dijimos anteriormente utiliza el protocolo nativo de Chrome DevTools, que le permite la automatización nativa de los navegadores por mismo. Esto simplifica la configuración y reduce la complejidad.

### Espera Automática

Maneja la espera de que los elementos aparezcan o de que las acciones se completen, lo que ayuda a reducir la inestabilidad en las pruebas.

### Pruebas Paralelas

Puedes ejecutar pruebas en paralelo, lo que acelera significativamente el proceso de pruebas.
CLI Potente: La interfaz de línea de comandos permite una fácil integración en pipelines de integración continua/despliegue continuo (CI/CD).

### Aplicación de Escritorio

TestCafe Studio proporciona una poderosa aplicación de escritorio para crear y gestionar pruebas, especialmente útil para personas que no son desarrolladores.

### Código Abierto

Al ser gratuito y de código abierto, fomenta la colaboración y las contribuciones de la comunidad.

## Testing-Library

### Calidad

Los test nos permiten saber que el software cumple con los requisitos y funciona según las expectativas. Nos ayuda a identificar y corregir errores, lo cual mejora la calidad y confiabilidad del producto final.

### Prevención de errores

El hacer tests a lo largo de un proyecto ocasiona que se encuentren errores inesperados y diversos problemas antes que el software salga a producción. Esto evitará que el software colapse y que ofrezca una mala experiencia al usuario final.

### Ahorro de tiempo y recursos

Puede parecer que crear tests consuma tiempo y recursos, pero es todo lo contrario. Es una inversión que te ahorra tiempo a largo plazo y también dolores de cabeza. Si se solucionan problemas en una etapa temprana del desarrollo el proceso va a ser más rápido y económico que hacerlo después.

### Facilita el mantenimiento

Un software bien probado y estructurado es más fácil de mantener y actualizar. Tener tests permite garantizar que si hay actualizaciones de librerías que se estén utilizando o cambios en los Apis y servicios que están siendo consumidos no introduzcan nuevos errores en el sistema. Esto ayuda a mantener la estabilidad del software a lo largo del tiempo.

### Satisfacción para el usuario

El resultado mejora la satisfacción del usuario final si se tiene una aplicación web quefunciona correctamente, satisface las necesidades del usuario y no tiene errores imprevistos genera una experiencia más satisfactoria en el cliente. Esto aumenta la retención de los usuarios en la plataforma, genera opiniones positivas y recomendaciones.

### Confianza en el equipo de desarrollo

Tener tests que aborden los principales problemas que pueden ocurrir así como que se aseguren de que cumplen las expectativas, a los desarrolladores les proporciona una mayor confianza en el trabajo diario. Pudiendo hacer refactoring, añadir nuevas funcionalidades sin miedo a que colapse algo.

## Jest

### Rápido y eficiente

Jest está optimizado para ejecutar pruebas de manera rápida y en paralelo. Al garantizar que sus pruebas tengan un estado global único, Jest puede ejecutar pruebas en paralelo de manera confiable. Para acelerar las cosas, Jest ejecuta primero las pruebas que fallaron anteriormente y reorganiza las ejecuciones en función de cuánto tardan los archivos de prueba.

### Soporte para mocks, spies y stubs

Incluye herramientas nativas para simular funciones y módulos.

### Cobertura de código

Integra un sistema de generación de reportes de cobertura de código sin necesidad de configuraciones externas, lo que ayuda a los desarrolladores a identificar código no probado. Genera cobertura de código agregando el indicador --coverage. No se necesita ninguna configuración adicional. Jest puede recopilar información de cobertura de código de proyectos completos, incluidos archivos no probados.

### Snapshot testing

Permite guardar representaciones de componentes UI o salidas complejas y comparar las diferencias en ejecuciones futuras.

### Soporte para pruebas asíncronas

Facilita la realización de pruebas con promesas y funciones asíncronas.

### Funcionalidad de reinicio en caliente (Hot Reloading)

Las pruebas pueden ejecutarse automáticamente al modificar el código.

### Integración con TypeScript

Se integra fácilmente con TypeScript para proyectos que usan tipado estático.

### Watch mode

Modo que ejecuta automáticamente pruebas al detectar cambios en los archivos relevantes.

### Mock

Jest permite a los desarrolladores simular dependencias, lo que hace más fácil aislar y probar componentes individuales. Utiliza un solucionador personalizado para las importaciones en sus pruebas, lo que facilita la simulación de cualquier objeto fuera del alcance de su prueba. Puede utilizar importaciones simuladas con la rica API

### Instantáneas

Jest proporciona pruebas instantáneas, lo que ayuda a garantizar que la interfaz de usuario no cambie inesperadamente.

## Mocha

### Soporte incluido para el debugger de Node

Posee soporte, pero no fue posible hacerlo funcionar luego de reiterados intentos.

### Pruebas sincrónicas y asincrónicas

Mocha soporta tanto pruebas sincrónicas como asincrónicas. Es posible manejar las pruebas asincrónicas utilizando callbacks, promesas y async/await

### Control granular de pruebas

Es posible ejecutar tests específicos o conjuntos de tests mediante palabras clave como only y skip.

### Configuración de hooks

Mocha cuenta con hooks (before, after, beforeEach, afterEach) para ejecutar código antes o después de todas las pruebas o de cada prueba individual

### Soporte para timeouts configurables

Es posible configurar timeouts a nivel de prueba, tanto para pruebas individuales como para bloques completos de pruebas, lo cual es útil para manejar pruebas que pueden demorar más de lo esperado.

### Soporte para Node.js y navegadores

Es altamente flexible, por lo que se puede ejecutar en entornos Node.js, así como en navegadores, permitiendo probar tanto aplicaciones de back-end como de front-end.

### Soporte para pruebas paralelas

En versiones más recientes, Mocha ha introducido soporte experimental para pruebas paralelas utilizando la opción --parallel, lo cual es útil para reducir el tiempo de ejecución en grandes suites de pruebas. Con nuestras pruebas no pudimos notar ninguna diferencia

### Soporte para tests dinámicos

Es posible generar y casos de test utilizando javascript. Nos permite generar casos de testing con una función. Es similar a la función de tests parametrizados de otros frameworks de test, según la documentación oficial de Mocha

# Principales sponsors y contribuidores

## Vitest

Vitest es desarrollado y mantenido por la comunidad y se basa en el trabajo
de Vite, una herramienta creada por Evan You, el creador de Vue.js.

### Vladimir Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sheremet-va/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sheremet-va/static/sponsors.svg'/>
  </a>
</p>

### Anthony Fu Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

### Patak Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/patak-dev/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/patak-dev/static/sponsors.svg'/>
  </a>
</p>

## TestCafe

TestCafe fue creado por DevExpress es una empresa de software que se especializa en crear herramientas de desarrollo y componentes de interfaz de usuario (UI) para diversas plataformas.

## Testing-Library

Testing Library no tiene sponsors tradicionales como algunas otras bibliotecas de código abierto. En su lugar, es mantenida principalmente por contribuciones de la comunidad y algunos patrocinadores individuales a través de plataformas como GitHub Sponsors.

## Jest

Jest es desarrollado y mantenido principalmente por Meta (anteriormente Facebook). Está diseñado principalmente para trabajar con proyectos de React, aunque su alcance se ha extendido a otros entornos.

## Mocha

Los principales sponsors de Mocha son las empresas Localize y Route4Me. Adicionalmente está respaldado por colaboradores financieros. Estos son los principales sponsors de Mocha:

 <p align="center">
  <a href="https://localizejs.com">
    <img src='https://mochajs.org/images/supporters/zzaxon79-3jy8gpl5-83qbrkde-mwl5v04o.png?sprite=sponsors'/>
  </a>
 </p>
 <p align="center">
     <a href="https://route4me.com/es">
    <img src='https://mochajs.org/images/supporters/3k0exgzn-m8yj64gk-jr865wao-9r7b4dlv.png?sprite=sponsors'/>
  </a>
</p>

# Curva de aprendizaje

## Vitest

La curva de aprendizaje es relativamente baja, especialmente para aquellos
que ya están familiarizados con Vite o con herramientas de pruebas como
Jest. Su sintaxis es similar a la de Jest, lo que facilita la transición.

## TestCafe

La curva de aprendizaje es relativamente baja, especialmente para aquellos que ya poseen familiaridad con lenguajes que utilizan etiquetas, como por ejemplo HTML. Dado que su sintaxis es similar a la de los scripts en JavaScript, quienes ya cuenten con conocimientos en este último encontrarán que el proceso de aprendizaje es aún más sencillo.

## Testing-Library

Testing Library en si no tiene muchas complicaciones. Depende de la experiencia del desarrollador y cuán familiarizado está con tecnologías específicas. Para aquellos que estén experimentados con Js, React, etc. La curva de aprendizaje será leve. Caso contrario para aquellos nuevos desarrolladores en las pruebas de Frontend o React.

## Jest

Baja a media: Jest tiene una curva de aprendizaje moderada. Es relativamente fácil de aprender y usar gracias a su documentación clara, configuraciones por defecto y una sintaxis sencilla para las pruebas. Sin embargo, para aprovechar al máximo todas sus características avanzadas (como mocks complejos, snapshots o pruebas asíncronas), puede requerir algo más de tiempo y experiencia.

## Mocha

Para un usuario con escaso conocimiento en testing, el utilizar Mocha se torna complejo al inicio, sobre todo si únicamente se utiliza como guía la documentación. No hay una explicación clara de sus palabras clave como ‘describe’ o ‘it’. Apoyando el contenido de la documentación con mejores ejemplos de fuentes externas a la misma, el aprendizaje es mucho más llevadero y se torna veloz.

# Repositorio y Documentación

## Vitest

El repositorio oficial de Vitest está disponible en GitHub: Vitest GitHub.
https://github.com/vitest-dev/vitest. Su documentación se encuentra en
https://vitest.dev de donde sacamos la mayoría de la información. La página te da una introducción de lo que es Vitest y porqué elegirlo sobre otras opciones. Tiene una guia para comenzar a usar el Framework y una larga carga de información sobre este, facilitando la carga de aprendizaje de los nuevos usuarios.

## TestCafe

El repositorio oficial de TestCafe está disponible en GitHub en la siguiente dirección: https://github.com/DevExpress/testcafe. Asimismo, su página oficial es https://testcafe.io/, donde se ofrece información exhaustiva sobre este framework. En este sitio, los usuarios pueden acceder a guías y documentación tanto para principiantes como para aquellos con conocimientos más avanzados que deseen aprovechar al máximo las innovaciones que ofrece el producto. Además, se incluye una sección dedicada a las novedades, donde se detallan actualizaciones y otras características recientemente implementadas.

## Testing-Library

1. GitHub: La comunidad colabora principalmente a través de GitHub, donde se puede encontrar el código fuente, reportar problemas, sugerir mejoras, y contribuir con pull requests. El repositorio principal es https://github.com/testing-library
2. Discord: Testing Library cuenta con un canal en Discord donde los desarrolladores y usuarios pueden hacer preguntas, compartir ideas y solucionar problemas. Es uno de los medios más directos para interactuar con otros miembros de la comunidad.
3. Stack Overflow: Muchos desarrolladores utilizan Stack Overflow para discutir sobre Testing Library, buscar soluciones a problemas comunes y compartir buenas prácticas. Buscar preguntas etiquetadas con `react-testing-library` o `testing-library` suele ser útil.
4. Documentación oficial: La documentación oficial de Testing Library es un excelente recurso mantenido por la comunidad, con ejemplos prácticos y guías para quienes están comenzando. Puedes consultarla en su sitio web: [testing-library.com](https://testing-library.com/).
5. Cursos y tutoriales: Algunos miembros de la comunidad han producido cursos y tutoriales que se pueden encontrar en plataformas como YouTube, Egghead.io, y Udemy.

## Jest

GitHub: [Jest Facebook GitHub Repo](https://github.com/facebook/jest), [Jest repo](https://github.com/jestjs/jest)

Documentación: [Jest Documentation](https://jestjs.io/docs/getting-started)

## Mocha

El repositorio oficial de Mocha está disponible en GitHub: [Mocha Repo](https://github.com/mochajs/mocha)

Documentación: [Mocha Documentation](https://mochajs.org)

# Soporte y actualizaciones

## Vitest

Recibe actualizaciones frecuentes debido a su naturaleza activa en la
comunidad. Las nuevas versiones suelen incluir mejoras y correcciones de
errores.

<img>![Vitest](https://img.shields.io/github/last-commit/vitest-dev/vitest)</img>
<img>![Vitest](https://img.shields.io/npm/v/vitest)</img>

En el último tiempo se han arreglado los llamados blockers en Jest que no
ayudaban en la compatibilidad entre Vitest y Jest, por lo tanto hoy en día es posible
tilizar Jest en configuraciones de Vite. Esto es posible gracias a @sodatea que
hizo vite-jest, cuyo objetivo es proporcionar integración Vite de primera clase para
Jest, por lo que esta es una opción válida para tus pruebas unitarias.

Cuenta con soporte de fragmentación, workspace, Out-of-the-box
TypeScript / JSX.

Para obtener soporte para TypeScript `import.meta.vitest`, añade `vitest/importMeta`
a tu `tsconfig.json`

Esta característica podría ser útil para:

- Pruebas unitarias para funciones o utilidades de pequeño alcance
- Prototipos
- Afirmación en línea

Se recomienda utilice archivos de prueba separados en su lugar para pruebas más
complejas como componentes o pruebas E2E.

## TestCafe

TestCafe ofrece un sólido sistema de soporte y actualizaciones, lo que garantiza que los usuarios puedan beneficiarse de las últimas mejoras y correcciones.
Centrándonos en el soporte proporciona varias vías para obtener asistencia. La comunidad activa de usuarios y desarrolladores puede ser un recurso valioso, ya que se pueden encontrar respuestas en foros y plataformas como GitHub. Además, la documentación oficial es extensa y abarca desde la instalación básica hasta guías avanzadas, lo que facilita la resolución de problemas comunes. También se pueden realizar preguntas específicas en el repositorio de GitHub, donde los desarrolladores de TestCafe están comprometidos a responder y ayudar a la comunidad.

Con respecto a las actualizaciones el equipo de desarrollo de TestCafe se dedica a lanzar actualizaciones regulares que incluyen nuevas características, mejoras de rendimiento y correcciones de errores. Estas actualizaciones son documentadas de manera clara en el repositorio, permitiendo a los usuarios estar al tanto de los cambios y nuevas incorporaciones. Además, TestCafe se esfuerza por mantenerse al día con las tendencias y necesidades del mercado, integrando funcionalidades que mejoran la experiencia del usuario y la eficacia de las pruebas automatizadas.

<img>![TestCafe](https://img.shields.io/github/last-commit/DevExpress/testcafe)</img>
<img>![TestCafe](https://img.shields.io/npm/v/testcafe)</img>

## Testing-Library

Testing Library es una herramienta de código abierto, por lo que la comunidad es la principal fuente de soporte y actualizaciones. La comunidad de Testing Library es bastante activa y está centrada en el ecosistema de JavaScript y en mejorar la experiencia de testing para aplicaciones de frontend. Testing Library tiene varias versiones específicas, como React Testing Library, Vue Testing Library, Angular Testing Library, entre otras, lo que amplía su alcance en múltiples frameworks.

<img>![Testing-Library](https://img.shields.io/github/last-commit/testing-library/testing-library-docs)</img>
<img>![Testing-Library](https://img.shields.io/npm/v/@testing-library/react)</img>

## Jest

**Frecuencia de actualizaciones:** Jest tiene un ciclo de lanzamiento activo con actualizaciones regulares que introducen mejoras de rendimiento, nuevas características y correcciones de errores.

**Mantenimiento activo:** Meta sigue respaldando Jest, y la comunidad también contribuye activamente, haciendo que el proyecto esté muy bien mantenido.

<img>![Jest](https://img.shields.io/github/last-commit/facebook/jest)</img>
<img>![Jest](https://img.shields.io/npm/v/jest)</img>

## Mocha

Mocha recibe actualizaciones frecuentemente(cada pocos meses) para arreglar bugs e implementar/mejorar ciertas características. Estas son en gran parte gracias a la comunidad (la cual es muy activa), ya que Mocha es open source.

La última versión de Mocha (10.7.3) fue desplegada el 9 de agosto del corriente año. Posee 491 contribuyentes actualmente.

<img>![Mocha](https://img.shields.io/github/last-commit/mochajs/mocha)</img>
<img>![Mocha](https://img.shields.io/npm/v/mocha)</img>

# Comunidad y popularidad

## Vitest

Vitest ha ganado popularidad rápidamente, especialmente entre los
desarrolladores que usan Vite y Vue. Gracias a que es familiar de Vite la comunidad
es activa, y se pueden encontrar discusiones y soporte en foros y en GitHub.

La [extensión](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) de VS Code tiene actualmente 192k de descargas

En github lo utilizan 311k <img>![Vitest](https://img.shields.io/github/stars/vitest-dev/vitest)</img> <img> ![Vitest](https://img.shields.io/github/forks/vitest-dev/vitest)</img> <img>![Vitest](https://img.shields.io/github/issues/vitest-dev/vitest)</img> <img>

## TestCafe

TestCafe ha visto un aumento en la demanda y el uso en el mercado de pruebas automatizadas, impulsado por varias tendencias clave en el desarrollo de software.
Su extencion en Vs https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner tiene actualmente 29,255 descargas y va en aumento

<img>![TestCafe](https://img.shields.io/github/stars/DevExpress/testcafe)</img>
<img>![TestCafe](https://img.shields.io/github/forks/DevExpress/testcafe)</img>
<img>![TestCafe](https://img.shields.io/github/issues/DevExpress/testcafe)</img>

## Testing-Library

La comunidad de Testing Library es bastante activa y está centrada en el ecosistema de JavaScript y en mejorar la experiencia de testing para aplicaciones de frontend. Testing Library tiene varias versiones específicas, como React Testing Library, Vue Testing Library, Angular Testing Library, entre otras, lo que amplía su alcance en múltiples frameworks.

<img>![Testing-Library](https://img.shields.io/github/stars/testing-library/testing-library-docs)</img>
<img>![Testing-Library](https://img.shields.io/github/forks/testing-library/testing-library-docs)</img>
<img>![Testing-Library](https://img.shields.io/github/issues/testing-library/testing-library-docs)</img>

## Jest

Gran comunidad: Al ser una de las herramientas más populares para testing en JavaScript/TypeScript, Jest cuenta con una comunidad muy activa, foros, y miles de preguntas resueltas en plataformas como Stack Overflow.

Plugins y ecosistema: Existen múltiples plugins desarrollados por la comunidad para mejorar la funcionalidad de Jest, como integraciones con linters, preprocesadores, y reportes personalizados.

<img>![Jest](https://img.shields.io/github/stars/facebook/jest)</img>
<img>![Jest](https://img.shields.io/github/forks/facebook/jest)</img>
<img>![Jest](https://img.shields.io/github/issues/facebook/jest)</img>

## Mocha

En el último tiempo, Mocha ha ido perdiendo popularidad, como se puede evidenciar en la baja de cantidad de preguntas hechas en foros como en StackOverflow, y la disminución en búsquedas de Google.

<img>![Mocha](https://img.shields.io/github/stars/mochajs/mocha)</img>
<img>![Mocha](https://img.shields.io/github/forks/mochajs/mocha)</img>
<img>![Mocha](https://img.shields.io/github/issues/mochajs/mocha)</img>

En términos de comunidad, tienen un servidor de discord en el que contestan dudas.

<a href="https://discord.gg/KeDn2uXhER">
  <img src="https://img.shields.io/badge/chat-Discord-5765F2.svg" alt="Mocha Discord">
</a>

# Demanda y uso en el mercado

## Vitest

Aunque es relativamente nuevo, su demanda está creciendo, especialmente
entre los proyectos que utilizan Vite y frameworks modernos como Vue y
React. Es cada vez más adoptado en proyectos nuevos.

<img>![Vitest](https://img.shields.io/npm/dm/vitest)</img>
<img>![Vitest](https://img.shields.io/npm/dt/vitest)</img>

## TestCafe

TestCafe ha visto un aumento en la demanda y el uso en el mercado de pruebas automatizadas, impulsado por varias tendencias clave en el desarrollo de software.
Su extencion en Vs https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner

<img>![TestCafe](https://img.shields.io/npm/dm/testcafe)</img>
<img>![TestCafe](https://img.shields.io/npm/dt/testcafe)</img>

## Testing-Library

Testing Library es una herramienta popular en la comunidad de desarrollo de JavaScript, especialmente en el ecosistema de React. Su enfoque en pruebas centradas en el usuario y en la accesibilidad ha sido bien recibido por los desarrolladores y ha llevado a una mayor adopción en proyectos de frontend.

<img>![Testing-Library](https://img.shields.io/npm/dm/@testing-library/react)</img>
<img>![Testing-Library](https://img.shields.io/npm/dt/@testing-library/react)</img>

## Jest

Alta demanda Jest es el framework de pruebas más popular en el ecosistema de JavaScript/TypeScript, utilizado extensivamente en empresas que desarrollan aplicaciones web y móviles. Su popularidad en el desarrollo frontend (especialmente con React) ha generado una alta demanda de habilidades en Jest en el mercado laboral.

<img>![Jest](https://img.shields.io/npm/dm/jest)</img>
<img>![Jest](https://img.shields.io/npm/dt/jest)</img>

## Mocha

Mocha tiene aproximadamente 8 millones de descargas semanales, número que se mantuvo constante (e incluso aumentó ligeramente) desde hace más de un año.
Sumado a eso, grandes empresas utilizan mocha en su stack de tecnologías.

<img>![Mocha](https://img.shields.io/npm/dm/mocha)</img>
<img>![Mocha](https://img.shields.io/npm/dt/mocha)</img>

# ¿Admiten end to end? / Alcance

## Vitest

Vitest no está diseñado específicamente para pruebas de extremo a extremo
(E2E). Se enfoca en pruebas unitarias y de integración. Para E2E, se suelen
usar herramientas como Cypress o Playwright.
Compatibilidad:

Vitest es compatible con proyectos que utilizan Vite y también se puede usar
en otros entornos. Funciona bien con TypeScript y JavaScript, y puede
integrarse en flujos de trabajo existentes que utilicen Jest o Mocha. En caso de
pruebas con React o angular también se complementa muy bien con Testing
Library.

## TestCafe

TestCafe es un framework de pruebas de extremo a extremo (E2E) que permite a los desarrolladores escribir pruebas para aplicaciones web utilizando JavaScript o TypeScript. Es ideal para probar la funcionalidad de una aplicación en un entorno de producción simulado, lo que garantiza que todas las partes de la aplicación funcionen correctamente juntas.

## Testing-Library

Testing Library en sí no está diseñado específicamente para pruebas end-to-end (E2E). Es principalmente una librería para pruebas unitarias y de integración enfocada en probar componentes de UI de forma aislada. Sin embargo, hay una herramienta relacionada llamada Cypress Testing Library que extiende Cypress (un framework de pruebas E2E) con los mismos principios y selectores de Testing Library.


## Jest

No está diseñado para E2E nativo: Jest se enfoca principalmente en pruebas unitarias y de integración. Aunque se puede usar en conjunto con otros frameworks (como Puppeteer o Playwright) para pruebas end-to-end, no es su propósito principal. Para E2E, herramientas especializadas como TestCafe o Cypress suelen ser preferidas.

## Mocha

Mocha se utiliza principalmente para pruebas unitarias e integradas en aplicaciones Node.js, puede ser combinado con otras herramientas que están diseñadas específicamente para pruebas E2E.

Para esto, Mocha suele necesitar ser complementado con herramientas que simulen el comportamiento de los usuarios en navegadores o entornos completos de aplicación.

## Comparativa de Rendimiento (BACKEND)

| Framework  | Tiempo de Ejecución (ms) | Cobertura de Código (%) |
| ---------- | ------------------------ | ----------------------- |
| **Vitest** | 25 ms                    | 100%                    |
| **Jest**   | 1.525 s                  | 100%                    |
| **Mocha**  | 21 ms                    | 73.03%                  |

## Comparativa de Rendimiento (FRONTEND)

| Framework           | Tiempo de Ejecución (ms) | Cobertura de Código (%) |
| ------------------- | ------------------------ | ----------------------- |
| **TestCafe**        | ms                       | %                       |
| **Testing Library** | ms                       | %                       |

# Conclusiones

## Vitest

Dado el gran nivel de adopción de Jest, Vitest ofrece una API compatible que te permite usarlo como un reemplazo directo en la mayoría de los proyectos.

También incluye las características más comunes que se requieren al configurar pruebas unitarias (mocking, snapshots, cobertura). Vitest se preocupa mucho por el rendimiento y utiliza hilos de trabajo (Worker threads) para ejecutar la mayor cantidad de tareas posibles en paralelo. En algunos casos, las pruebas se ejecutan hasta diez veces más rápido.

El modo de observación (watch mode) está habilitado por defecto, alineándose con la filosofía de Vite de priorizar una experiencia de desarrollo optimizada. Incluso con todas estas mejoras en la experiencia del desarrollador, Vitest sigue siendo ligero al seleccionar cuidadosamente sus
dependencias (o integrando directamente las partes necesarias).

Vitest busca posicionarse como la opción preferida para ejecutar pruebas en
proyectos de Vite, y como una alternativa sólida incluso para proyectos que no utilizan Vite.

## TestCafe

Concluimos que tiene una buena documentación y es intuitivo de usar, realiza rápidamente las acciones que le indicamos y los mensajes de errores son claros.

Este test es altamente efectivo y accesible dada la baja curva de aprendizaje y la amplia documentación que tiene, este tipo de test es una opción atractiva tanto para principiantes como para desarrolladores avanzados.

Las actualizaciones se adaptan a las tendencias actuales por lo que termina siendo una herramienta valiosa para las pruebas actualizadas.
Por último, su enfoque en la comunidad a través del repositorio de código abierto y soporte activo asegura que los usuarios puedan ver actualizaciones continuas y puedan aportar para mejorar.

## Testing-Library

Testing Library es una herramienta diseñada para realizar pruebas centradas en la interacción real del usuario con la interfaz de una aplicación web, dejando de lado los detalles internos de la implementación. Su filosofía se basa en probar cómo un usuario final utilizaría la aplicación, lo que lo convierte en una opción ideal para asegurar una experiencia de usuario accesible y libre de errores.

Creemos que Testing Library es una herramienta fundamental para el desarrollo de aplicaciones web. Su enfoque en cómo los usuarios interactúan con la interfaz nos permite crear pruebas más relevantes y efectivas.

Valoramos sea de facil uso y que se integre bien con frameworks populares como React, Angular y Vue. Además, cuenta con una comunidad muy activa que ofrece recursos y actualizaciones constantes, lo que simplifica su aprendizaje y uso.

En comparación con otras herramientas de pruebas como Jest o Vitest tienden a centrarse en la ejecución técnica de las pruebas, Testing Library complementa estas herramientas al poner énfasis en cómo los usuarios reales interactúan con la interfaz. En definitiva, consideramos que lo convierte en una opción esencial para garantizar que las aplicaciones sean coherentes, accesibles y funcionales en escenarios del mundo real, mejorando tanto la experiencia del usuario como la calidad del producto final.

## Jest

Jest es un marco de pruebas de JavaScript diseñado para garantizar la corrección de cualquier código base de JavaScript. Te permite escribir pruebas con una API accesible, familiar y rica en funciones que te brinda resultados rápidamente.

Jest está bien documentado, requiere poca configuración y puede ampliarse para adaptarse a sus requisitos.

En resumen, Jest es una de las herramientas más completas y populares para pruebas en el ecosistema JavaScript, con un soporte y mantenimiento sólido por parte de Meta y una comunidad activa que facilita su adopción y evolución.

## Mocha

Podemos destacar el alto grado de flexibilidad de este framework, como así también la velocidad que nos aporta poder correr tests en paralelo. Sumado a eso posee una comunidad sólida, y se están desplegando nuevas actualizaciones frecuentemente.

Ahora bien, es importante tener en cuenta que Mochajs no se encuentra respaldado por empresas extremadamente conocidas en el mundo de la tecnología, y además, posee una documentación poco amigable para el usuario.

Es por estos motivos que elegimos utilizar Mocha js exclusivamente en casos en los que la flexibilidad del testing, o la performance, sean puntos fundamentales a tener en cuenta a la hora de realizar los tests.

## Casos de uso ideal

| Tecnología      | Fortalezas                                                                        | Debilidades                                                        | Caso de Uso Ideal                                                          |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| Vitest          | Compatible con Jest, rápido (hilos de trabajo), ligera, modo watch predeterminado | Menos adoptado en proyectos que no usan Vite                       | Proyectos con Vite o que priorizan el rendimiento                          |
| TestCafe        | Fácil de usar, documentación clara, accesible, activo en la comunidad             | Limitado en pruebas unitarias                                      | Pruebas de UI, especialmente para principiantes                            |
| Testing Library | Pruebas centradas en la experiencia del usuario, simples y legibles               | Puede no ser el más adecuado para probar implementaciones internas | Proyectos que priorizan la experiencia del usuario y la calidad del código |
| Jest            | API rica en funciones, bien documentado, mantenimiento activo, ampliable          | Pesado, puede ser excesivo para pequeños proyectos                 | Grandes proyectos con amplias necesidades de testing                       |
| Mocha           | Altamente flexible, permite paralelismo, velocidad                                | Documentación menos accesible, sin respaldo corporativo fuerte     | Proyectos que requieren alta flexibilidad o rendimiento                    |
