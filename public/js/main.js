import '../styles/style.css'
import '../styles/navbar.css'

const contactBtn = document.querySelector('.contact-btn');
const portalBtn = document.querySelector('.portal-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const navbar = document.querySelector('.nav');

document.querySelector('.hamburger').addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
  contactBtn.classList.toggle('fade');
  portalBtn.classList.toggle('fade');
});

window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeigh + 150) {
    navbar.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}