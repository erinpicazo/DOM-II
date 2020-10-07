

const nav = document.querySelector('.main-navigation');

nav.addEventListener('mouseenter', e => console.log('I am watching you.'));
nav.addEventListener('mouseleave', e => console.log('Wait.... come back!!!'));
nav.addEventListener('wheel', e => (nav.style.color = 'pink'));
nav.addEventListener('click', e => e.preventDefault());



const home = document.querySelector('.home');
home.addEventListener('selectstart', e => {
    home.style.backgroundColor = 'blue';
    home.style.color = 'purple';
    alert("don't think so");
  });

  
const header = document.querySelector('.intro');

const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
    img.addEventListener('copy', e => alert('Whatcah doing?'));
    img.addEventListener('drag', e => alert('Are you stealing?'));
  });

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('selectstart', e => {
      e.stopPropagation();
    });
    btn.addEventListener('click', e => {
      alert('Whoops! Technical Difficulties.');
    });
    btn.addEventListener('mouseover', e => (btn.style.backgroundColor = 'yellow'));
  });
  

window.addEventListener('load', e => (header.innerHTML = ''));
window.addEventListener('resize', e => (nav.style.color = 'orange'));

