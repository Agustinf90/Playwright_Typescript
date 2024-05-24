import fs from 'fs';
import path from 'path';
import config from '../config/config';

async function saveTokenFunction(token: string) {
  // Guardar el token en un archivo .env
  const envPath = path.resolve(__dirname, '../.env'); // Ajusta la ruta según tu estructura de proyecto
  // Leer el contenido existente del archivo .env, si existe
  let currentContent = '';
  if (fs.existsSync(envPath)) {
    currentContent = fs.readFileSync(envPath, 'utf8');
  }

  // Buscar y reemplazar el valor de TOKEN si ya existe
  let newContent = currentContent.replace(/TOKEN=.*/, `TOKEN=${token}`);

  // Si no había un TOKEN previamente, añadirlo al final
  if (!currentContent.includes('TOKEN=')) {
    newContent += `\nTOKEN=${token}`;
  }

  // Escribir el contenido actualizado en el archivo .env
  fs.writeFileSync(envPath, newContent.trim(), { flag: 'w' });
}

export { saveTokenFunction };
