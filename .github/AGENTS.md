# Reglas generales del proyecto

## Contexto

- Este proyecto es una aplicación web de React con TypeScript, Vite y React Router.
- Los estilos se implementan con Tailwind CSS 4; la hoja global está en `src/index.css`.
- El código de la aplicación vive en `src/`, organizado en páginas (`pages/`), rutas (`routers/`), utilidades (`utils/`) y recursos (`assets/`).
- La interfaz y el contenido del proyecto están en español; conserva ese idioma en nuevos textos visibles para el usuario.

## Desarrollo

- Sigue el estilo y la organización que ya existen. Mantén los cambios enfocados en la tarea y evita introducir dependencias sin necesidad.
- Escribe componentes funcionales en `.tsx` y aprovecha el tipado estricto de TypeScript. Evita `any`, aserciones de tipo innecesarias y valores que oculten errores.
- Mantén la configuración de rutas en `src/routers/` y utiliza los componentes de React Router para la navegación interna.
- Usa hooks de React conforme a sus reglas; no llames hooks de forma condicional ni fuera de componentes o hooks personalizados.
- Para los estilos, prioriza las clases de Tailwind existentes. Reserva `src/index.css` para estilos globales que no encajen como clases de utilidad.
- Conserva la accesibilidad: usa elementos HTML semánticos, controles con nombres comprensibles y texto alternativo pertinente para imágenes informativas.
- No guardes credenciales, tokens ni otros secretos en el código o en archivos versionados.

## Verificación

- Instala dependencias con `npm install` solo cuando sea necesario; respeta `package-lock.json`.
- Ejecuta `npm run lint` para comprobar las reglas de ESLint.
- Ejecuta `npm run build` para validar TypeScript y generar la compilación de producción.
- No hay un comando de pruebas automatizadas definido actualmente en `package.json`; no afirmes que se ejecutaron pruebas si no se añadieron.
