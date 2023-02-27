const ul = document.querySelector('ul');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    ul.style.display = 'flex';
    ul.style.top = '0';
}
function close(){
    ul.style.top = '-100%'
}