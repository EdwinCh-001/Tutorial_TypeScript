---
name: unit-testing-react-typescript
description: Create, run, and maintain unit tests for this React, TypeScript, and Vite project. Use when asked to test a component, page, utility, or other isolated behavior.
---

# Pruebas unitarias para React + TypeScript

Esta habilidad crea y ejecuta pruebas unitarias enfocadas en el comportamiento del proyecto, informa con claridad los resultados y corrige únicamente los problemas relacionados con la solicitud.

## Contexto del proyecto

- La aplicación usa React, TypeScript, Vite y React Router.
- El código fuente está en `src/`; las páginas están en `src/pages/` y las utilidades en `src/utils/`.
- TypeScript tiene `strict` habilitado. Conserva los tipos y evita `any` y aserciones innecesarias.
- Los comandos actuales son `npm run lint` y `npm run build`. `package.json` no define aún un ejecutor de pruebas.
- Antes de escribir pruebas, inspecciona `package.json`, la configuración existente y el código objeto de prueba. Si ya hay una herramienta de pruebas configurada, úsala en lugar de introducir otra.

## Procedimiento

1. Identifica el comportamiento solicitado y revisa el módulo y sus dependencias inmediatas. No reestructures código de producción solo para facilitar una prueba si puede probarse tal como está.
2. Si no existe infraestructura de pruebas, configura Vitest integrado con Vite, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom` y `jsdom`, siempre que sean compatibles con las versiones de React, TypeScript y Vite instaladas. Añade los paquetes necesarios a `devDependencies`, configura el entorno y prepara comandos npm para ejecutar las pruebas. No reemplaces ni elimines scripts existentes.
3. Escribe pruebas junto al código probado, siguiendo la convención ya presente. Si no hay una convención, usa archivos `*.test.ts` para utilidades y `*.test.tsx` para componentes, ubicados junto al módulo probado.
4. Prueba resultados observables: entradas, salidas, interacción del usuario, contenido accesible y cambios visibles. Para componentes, prefiere consultas accesibles de Testing Library (`getByRole`, `getByLabelText`, `getByText`) y `userEvent` frente a selectores CSS o detalles internos de React.
5. Cubre el caso normal y los casos límite relevantes para el comportamiento pedido. Para funciones puras, incluye valores de borde y entradas inválidas solo cuando sean parte del contrato. Para componentes, verifica props, estado e interacciones relevantes sin duplicar pruebas del framework.
6. Aísla cada prueba de las demás. Limpia mocks y estado compartido, evita depender del orden de ejecución y no accedas a servicios externos o a la red en pruebas unitarias.
7. Ejecuta las pruebas específicas añadidas o afectadas. Después, ejecuta `npm run lint` y `npm run build` si los cambios tocaron configuración, tipos o código de aplicación.
8. Revisa los fallos, corrige su causa dentro del alcance y vuelve a ejecutar las verificaciones pertinentes. Nunca declares que una prueba pasó si no fue ejecutada correctamente.

## Guías para este proyecto

- Usa `vi.fn()` y las funciones de mock de Vitest cuando se necesite observar una llamada; restaura o limpia los mocks entre pruebas.
- Para probar páginas con enlaces o hooks del router, proporciona el contexto de enrutamiento requerido por el componente. Prefiere verificar la navegación o el resultado visible, no la implementación interna del router.
- Si una interacción activa `alert`, temporizadores u otra API del navegador, reemplázala con un mock local y restáuralo al terminar. Comprueba el efecto observable.
- Evita snapshots extensos como sustituto de aserciones significativas.
- Mantén las pruebas deterministas, rápidas y centradas en una sola unidad de comportamiento.
- Si la infraestructura requerida no puede instalarse o ejecutarse en el entorno actual, conserva los cambios seguros y explica exactamente qué quedó sin verificar y por qué.

## Informe final

Resume los archivos de prueba creados o modificados, el comportamiento cubierto y los comandos ejecutados con sus resultados. Menciona cualquier limitación; no presentes la compilación o el lint como si fueran pruebas unitarias.