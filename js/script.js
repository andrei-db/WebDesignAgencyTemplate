
var headerTitleDiv = document.getElementById("header-title");
window.addEventListener("DOMContentLoaded", function () {

  headerTitleDiv.addEventListener("animationend", activateBounceAnimation);
});

function activateBounceAnimation() {

  headerTitleDiv.classList.add("bounce");
  headerTitleDiv.addEventListener("animationiteration", stopBounceAnimation);
  headerTitleDiv.removeEventListener("animationend", activateBounceAnimation);
}

function stopBounceAnimation(event) {

  if (event.animationName === "bounce" && event.elapsedTime >= 1) {
    headerTitleDiv.classList.remove("bounce");
    headerTitleDiv.classList.remove("slide-from-top");
    headerTitleDiv.removeEventListener("animationiteration", stopBounceAnimation);
  }
}

var menu_btn = document.querySelector('#menu-btn');
var container = document.querySelector('.container');
var navbar = document.getElementById('navbar');
const page = document.querySelector('.page');

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
