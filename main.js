
window.addEventListener('scroll', onScroll);

onScroll();
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
  activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section) {
 const targetLine = scrollY + innerHeight / 2
 
  //  verificar se seção passou da linha
  // quais dados vou precisar?

  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight
  
  // o topo da seção chegou ou ultrapassou a linha alvo 
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // informações dos dados e da logica
  //console.log('o topo da seção chegou ou passou da linha', sectionTopReachOrPassedTargetline)

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina onde?
  const sectionEndAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndAt <= targetLine
  //console.log('o fundo da seção passou da linda?', sectionEndPassedTargetline)  

  // limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  // console.log(sectionBoundaries)

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries){
    menuElement.classList.add('active')
 }
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
  duration: 1000,
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

