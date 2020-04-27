/* RECURSÃO MUTUA */
const fs = require('fs').promises;
const path = require('path');

async function readDir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);

    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);

        //Elimina arquivos e pastas
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        if(/\.png/g.test(fileFullPath)) continue;
        if(/\.ico/g.test(fileFullPath)) continue;
        if(/bundle.js/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()) {
            readDir(fileFullPath);
            continue;
        }
        
        //Retorna somente os arquivos e pastas definidas abaixo
        if(!/\.json$/g.test(fileFullPath)) continue;

        console.log(fileFullPath, '| '+stats.isDirectory());
    }
}

readDir('D:/Workspace/Javascript/curso-de-javascript-moderno-do-basico-ao-avancado/');