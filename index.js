let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}

const removeHam = document.querySelectorAll('.navbar a').forEach(event => event.addEventListener('click', () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}));

window.onscroll = () => {
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active')    
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut() {
    setInterval(loader, 2000);
}

window.onload = fadeOut();