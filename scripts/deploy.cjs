const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

console.log('📦 Building Nopex Arcade Multiplayer bundle...');
execSync('node ./node_modules/vite/bin/vite.js build', { stdio: 'inherit' });

console.log('📌 Committing updates to master branch...');
execSync('git add -A', { stdio: 'inherit' });
const masterStatus = execSync('git status -s', { encoding: 'utf8' }).trim();
if (masterStatus) {
  execSync('git commit -m "feat(perf): ultrawide and performance optimization"', { stdio: 'inherit' });
  execSync('git push origin master', { stdio: 'inherit' });
}

console.log('🚀 Deploying production bundle to gh-pages...');
const tempDist = path.resolve('../.temp-dist-nopex-mp');
if (fs.existsSync(tempDist)) fs.rmSync(tempDist, { recursive: true, force: true });
copyFolderSync('dist', tempDist);

execSync('git checkout gh-pages', { stdio: 'inherit' });

// Clean out existing files on gh-pages except git
const entries = fs.readdirSync('.');
entries.forEach(entry => {
  if (entry === '.git' || entry === 'node_modules') return;
  fs.rmSync(entry, { recursive: true, force: true });
});

copyFolderSync(tempDist, '.');
fs.rmSync(tempDist, { recursive: true, force: true });
fs.writeFileSync('.gitignore', 'node_modules/\n.temp*\n');

execSync('git add -A', { stdio: 'inherit' });
const status = execSync('git status -s', { encoding: 'utf8' }).trim();
if (status) {
  execSync('git commit -m "deploy: 🚀 ultrawide and performance optimization update"', { stdio: 'inherit' });
  execSync('git push origin gh-pages', { stdio: 'inherit' });
}

execSync('git checkout master', { stdio: 'inherit' });
console.log('✅ Nopex Arcade Multiplayer deployed successfully!');
