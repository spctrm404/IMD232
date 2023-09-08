alert('안녕?');
prompt('너의 이름은?', '손우성은 아닐거고');
let friendName = prompt('너의 옆사람의 이름은?');
confirm('너의 옆사람의 이름이 ' + friendName + '입니까?');
let domElem = document.getElementById('hereGoesName');
domElem.textContent = '내 옆사람의 이름은 ' + friendName + '입니다.';
