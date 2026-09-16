import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');

// Garante compatibilidade caso o Render esteja configurado para 'Beleza', 'beleza' ou 'dist'
['Beleza', 'beleza'].forEach((dirName) => {
  const targetPath = path.resolve(dirName);
  try {
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
    }
    fs.cpSync(distPath, targetPath, { recursive: true });
    console.log(`✅ Build também copiado para ./${dirName} com sucesso.`);
  } catch (err) {
    console.warn(`Aviso ao copiar para ./${dirName}:`, err.message);
  }
});
