import { table } from './table.js';

// 패스 인텍스 path[3] = step#
let pathIdx = 3;

// 패스 분해
const path = window.location.pathname.split('/');

// 웹에서는 path[1] = src 이 아니라 path[1] = IMD232
// 이 경우 하나씩 뒤로 밀어야한다.
if (path[1].toLowerCase() === 'imd232') pathIdx += 1;
// console.log('bool', path[1].toLowerCase() === 'imd232');
// console.log('pathIdx', pathIdx);

// 서버 디버그용
// console.log('path', path);

// path[2] = 파트 구분 폴더 이름
// table.js 에서 일치하는 것을 가져옴
const part = table.find((eachPart) => {
  // console.log('partString', eachPart.folderName.toLowerCase());
  // console.log('pathString', path[pathIdx - 1].toLowerCase());
  return eachPart.folderName.toLowerCase() === path[pathIdx - 1].toLowerCase();
});
// console.log(part);

const setTitle = () => {
  // path[4] 가 recording일 경우, 촬영용 하위 폴더
  if (path[pathIdx + 1].toLowerCase().includes('recording')) {
    // path[3] = step#
    const idx = parseInt(path[pathIdx].replace('step', 0)) - 1;
    // path[5] = substep#
    const subStep = path[pathIdx + 2].replace('substep', '');
    document.title = `${part.partNo}-${idx + 1}-${subStep}. ${
      part.chapters[idx].chapterName
    }`;
    document.querySelector('.title').innerHTML = `${part.partNo}-${
      idx + 1
    }-${subStep}. ${part.partName} — ${part.chapters[idx].chapterName}`;
  }
  // path[3] = step#
  else if (path[pathIdx].toLowerCase().includes('step')) {
    // path[3] = step#
    const idx = parseInt(path[pathIdx].replace('step', 0)) - 1;
    document.title = `${part.partNo}-${idx + 1}. ${
      part.chapters[idx].chapterName
    }`;
    document.querySelector('.title').innerHTML = `${part.partNo}-${idx + 1}. ${
      part.partName
    } — ${part.chapters[idx].chapterName}`;
  }
};

setTitle();
