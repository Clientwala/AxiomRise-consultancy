import { cp, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const standalone = join(root, '.next', 'standalone');

async function copyStandalone() {
  console.log('[postbuild] Copying static assets to standalone...');

  const dirs = [
    { src: join(root, 'public'), dest: join(standalone, 'public') },
    { src: join(root, '.next', 'static'), dest: join(standalone, '.next', 'static') },
  ];

  for (const { src, dest } of dirs) {
    try {
      await access(src);
      await cp(src, dest, { recursive: true, force: true });
      console.log(`[postbuild] ✓ Copied: ${src} → ${dest}`);
    } catch (e) {
      console.error(`[postbuild] ✗ Failed: ${src} → ${dest}`, e.message);
    }
  }

  console.log('[postbuild] Done!');
}

copyStandalone();
