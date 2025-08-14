import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.join(__dirname, 'features');

function walk(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else if (entry.isFile() && entry.name.endsWith('.feature')) {
      callback(fullPath);
    }
  });
}

function injectTag(filePath) {
  const content = fs.readFileSync(filePath, 'utf8').split('\n');
  const folderName = path.basename(path.dirname(filePath));
  const tag = `@${folderName.toLowerCase()}`;

  const newContent = [];
  let tagInserted = false;

  for (let i = 0; i < content.length; i++) {
    const line = content[i];

    // Inject tag above first Scenario if not already present
    if (!tagInserted && line.trim().toLowerCase().startsWith('scenario')) {
      const previousLine = content[i - 1]?.trim() || '';
      if (!previousLine.startsWith('@')) {
        newContent.push(`  ${tag}`);
      }
      tagInserted = true;
    }

    newContent.push(line);
  }

  fs.writeFileSync(filePath, newContent.join('\n'), 'utf8');
  console.log(`✅ Tag injected in: ${filePath}`);
}

// 🔁 Exécution
walk(baseDir, injectTag);
