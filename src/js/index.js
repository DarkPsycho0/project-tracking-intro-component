const menuBtn = document.querySelector('.fa-solid')
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('fa-xmark')
    menuBtn.classList.toggle('fa-bars')
    menu.classList.toggle('none')
})