import { table } from './table.js';

const path = window.location.pathname.split('/');
// console.log("path", path);
const part = table.find(
  (eachPart) =>
    eachPart.folderName.localeCompare(path[2], undefined, {
      sensitivity: 'base',
    }) === 0
);
const idx = parseInt(path[3].replace('step', 0)) - 1;
document.title = `${part.partNo}-${idx + 1}. ${part.chapters[idx].chapterName}`;
document.querySelector('.title').innerHTML = `${part.partNo}-${idx + 1}. ${
  part.partName
} — ${part.chapters[idx].chapterName}`;
