
window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activeMenuAtCurrentSection()
}

function activeMenuAtCurrentSection() {
 const targetLine = scrollY + innerHeight / 2
 
  //  verificar se seção passou da linha
  // quais dados vou precisar?

  // o topo da seção
  const sectionTop = services.offsetTop

  // a altura da seção
  const sectionHeight = home.offsetHeight
  
  // o topo da seção chegou ou ultrapassou a linha alvo 
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // informações dos dados e da logica
  console.log('o topo da seção chegou ou passou da linha', sectionTopReachOrPassedTargetline)

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina onde?
  const sectionEndAt = sectionTop + sectionHeight
  console.log(sectionEndAt)


}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
