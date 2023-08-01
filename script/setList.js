import { table } from './table.js';

const weekDoms = document.querySelectorAll('.week .center');
console.log(weekDoms);

table.forEach((eachPart, idx) => {
  const eachWeekDom = weekDoms.item(idx);
  const title = eachWeekDom.querySelector('h2');
  const steps = eachWeekDom.querySelectorAll('ol > li > a');
  title.textContent = `${eachPart.partNo}. ${eachPart.partName}`;
  steps.forEach((eachStep, idx) => {
    eachStep.textContent = eachPart.chapters[idx].chapterName;
  });
});
