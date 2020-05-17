let typed1 = new Typed('.brief', {
  strings: ['我是云麓石头', '一名正在前进的初级前端工程师'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity
});

let typed2 = new Typed('.shortcut', {
  strings: ['初级前端开发者', '前端设计爱好者'],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity
});

let links = document.querySelectorAll('.menu-wrap .menu a');
let toggler = document.querySelector('.toggler');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.stopPropagation;
    toggler.checked = false;
  })
});