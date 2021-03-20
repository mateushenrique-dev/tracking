const buttonHamburguer = document.querySelector('.lines')
const menu = document.querySelector('.menu')

buttonHamburguer.addEventListener('click', function() {
  document.querySelector('.lines').classList.toggle('ativo')
  menu.classList.toggle('ativo')
})