/*========== ESCONDENDO E APARECENDO O MENU==============*/
const  navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

// Mostrar o menu
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})
// Esconder o menu
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*=============== REMOVER O MENU ================*/
const navLink = document.querySelectorAll('.nav__link')

function AcaoLink(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', AcaoLink))

/* seção de scroll com link ativado*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active')
        }
    })
}