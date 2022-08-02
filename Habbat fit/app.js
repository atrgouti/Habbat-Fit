const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLinks =  document.querySelectorAll('.nav-links li')
const navbar = document.querySelector('.navbar')
// toggle nav
burger.addEventListener('click', () => {
    nav.classList.toggle('active')

// animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else{
            link.style.animation = `navlinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
// burger animation
    burger.classList.toggle('toggle')
    
});


// here i am starting working on transition

const img = document.querySelector('.img');
const photo = document.querySelector('.photo')
const about = document.querySelector('.about')
const heading = document.querySelector('.about-h1')
const paragraphs = document.querySelector('.about-p')



window.addEventListener('scroll', update)

update()

function update(){
    const imgHittingPoint = window.innerHeight / 5 * 4
    const imgTop = img.getBoundingClientRect().top
    const headingTop = heading.getBoundingClientRect().top
    const para = paragraphs.getBoundingClientRect().top

    if(imgTop < imgHittingPoint){
        photo.classList.add('active')
    }
}