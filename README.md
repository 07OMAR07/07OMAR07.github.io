# Omar Harvey — Portafolio

Portafolio web hecho con **React + TypeScript + Vite**, animaciones con **Framer Motion** e iconos de **Lucide**.

## Requisitos
- Node.js 20.19+ o 22.12+
- npm

## Ejecutar en local
1. Descomprime el proyecto.
2. Abre una terminal dentro de la carpeta `omar-harvey-portfolio`.
3. Instala dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor:
   ```bash
   npm run dev
   ```
5. Abre la URL local que muestre Vite (normalmente `http://localhost:5173`).

## Preparar para publicar
```bash
npm run build
npm run preview
```
La versión lista para publicar se genera en `dist/`.

## Personalización
- El logo de bienvenida está en `public/omar-harvey-logo.png`.
- El contenido, proyectos y enlaces están en `src/App.tsx`.
- Colores, estilos, responsive y animaciones CSS están en `src/styles.css`.
- Para cambiar el correo o los repositorios, edita los enlaces de `src/App.tsx`.

## Notas
- El loader está configurado para durar aproximadamente 2,3 segundos y luego muestra la web.
- Los efectos de entrada respetan la preferencia del sistema para reducir movimiento.
- Para que funcionen las fuentes de Google se necesita conexión a internet; hay fuentes de sistema como alternativa.
- Revisa todos los datos de contacto y los enlaces antes de publicar.
