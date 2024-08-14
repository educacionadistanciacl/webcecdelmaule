// scripts/create-article.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para generar la fecha actual en el formato yyyy-mm-dd
function getFormattedDate() {
  const now = new Date();
  return now.toISOString().split('T')[0]; // Formato: yyyy-mm-dd
}

// Datos base para el frontmatter del archivo Markdown
const defaultFrontmatter = (title) => `---
title: "${title}"
pubDate: "${getFormattedDate()}"
draft: true # false para poder visualizarlo en producción
image: "imagenBase.webp" # debe estar en /public/img/articulos
---

<!-- 
# Markdown soporta:
# - **negrita** y _cursiva._
# - listas
# - [hipervínculos](https://astro.build)
# - ¡y más! 
-->

Escribe tu contenido aquí...
`;

// Función para crear un nuevo artículo
function createArticle(title) {
  const fileName = `${title.toLowerCase().replace(/ /g, '-')}.md`; // Nombre de archivo basado en el título
  const directoryPath = path.join(__dirname, '../content/articulos');
  const filePath = path.join(directoryPath, fileName);

// Verificar si el directorio existe, si no, crearlo
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFileSync(filePath, defaultFrontmatter(title));
  console.log(`Artículo creado: ${filePath}`);
}

// Obtener el título del artículo desde la línea de comandos
const title = process.argv[2];
if (!title) {
  console.log('Por favor, proporciona un título para el artículo.');
  process.exit(1);
}

createArticle(title);
