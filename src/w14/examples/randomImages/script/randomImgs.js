const imgs = document.querySelectorAll('.imgContainer img');

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

console.log(bodyWidth, bodyHeight);

imgs.forEach((eachImg) => {
  const imgWidth = eachImg.clientWidth;
  const imgHeight = eachImg.clientHeight;

  eachImg.style.position = 'absolute';
  eachImg.style.left = Math.random() * (bodyWidth - imgWidth) + 'px';
  eachImg.style.top = Math.random() * (bodyHeight - imgHeight) + 'px';
});
