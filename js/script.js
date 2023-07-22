
var headerTitleDiv = document.getElementById("header-title");

window.addEventListener("DOMContentLoaded", function () {

  headerTitleDiv.addEventListener("animationend", activateBounceAnimation);
});


var change_btn=document.getElementById('change-theme');
var css_file=document.getElementById('css-file');
change_btn.addEventListener('click',()=>{
  if(css_file.href.endsWith("dark-theme.css")){
    css_file.href="css/light-theme.css";
    change_btn.innerHTML="Dark Theme";
  }else{
    css_file.href="css/dark-theme.css";
    change_btn.innerHTML="Light Theme";
  }
});



function activateBounceAnimation() {
  headerTitleDiv.classList.add("bounce");
}


var menu_btn = document.querySelector('#menu-btn');
var container = document.querySelector('.container');
var navbar = document.getElementById('navbar');
const page = document.querySelector('.page');
const body = document.querySelector('body');
menu_btn.addEventListener('click', enableDisableMenu);

function enableDisableMenu() {

  if (menu_btn.innerHTML == "Menu") {
    menu_btn.innerHTML = "Close";
    container.classList.toggle('perspective');
    page.classList.toggle('perspective');
    navbar.classList.toggle('show');
   

  } else {
    menu_btn.innerHTML = "Menu";
    navbar.classList.remove('show');
    page.classList.remove('perspective');
    
  }
}

// SMOOTH SCROLL
const links = document.querySelectorAll('#navbar a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      page.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

