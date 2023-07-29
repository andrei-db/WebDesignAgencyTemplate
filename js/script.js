// TOPBAR - open/close menu
var menu_btn = document.querySelector('#menu-btn');
var container = document.querySelector('.container');
var navbar = document.getElementById('navbar');
var page = document.querySelector('.page');



// TOPBAR - change theme
var change_btn = document.getElementById('change-theme');
var css_file = document.getElementById('css-file');
change_btn.addEventListener('click', () => {
  if (css_file.href.endsWith("dark-theme.css")) {
    css_file.href = "css/light-theme.css";
    change_btn.innerHTML = "Dark Theme";
  } else {
    css_file.href = "css/dark-theme.css";
    change_btn.innerHTML = "Light Theme";
  }
});

// NAVBAR - smooth scroll
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

// HOME - bounce animation

var headerTitleDiv = document.querySelector(".home-title");
window.addEventListener("DOMContentLoaded", function () {
  headerTitleDiv.addEventListener("animationend", activateBounceAnimation);
});
function activateBounceAnimation() {
  headerTitleDiv.classList.add("bounce");
}

//FAQ

document.addEventListener("DOMContentLoaded", function (event) {
  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName('panel');

  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains('active');
      setClass(acc, 'active', 'remove');
      setClass(panel, 'show', 'remove');

      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    }
  }

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }

});
// PROJECTS

var leftProject = document.querySelector('.left-button');
var rightProject = document.querySelector('.right-button');
var projectsContainer = document.querySelector('#our-projects .projects-container');
var projects = document.querySelectorAll('#our-projects .projects-container .item');

const dreapta = "translate3d(550px,0,0)";
const stanga = "translate3d(-550px,0,0)";
const fata = "translate3d(0,0,300px)";
const spate = "translate3d(0,0,-300px)";

var twod = document.querySelector('#twod-btn');
var threed = document.querySelector('#threed-btn');
rotateLeft();
leftProject.addEventListener('click', rotateLeft);

rightProject.addEventListener('click', rotateRight);

function rotateLeft() {

  for (let i = 0; i < 4; i++) {
    if (projects[i].dataset.val == "stanga") {
      projects[i].style.transform = fata;
      projects[i].dataset.val = "fata";
    }
    else if (projects[i].dataset.val == "fata") {
      projects[i].style.transform = dreapta;
      projects[i].dataset.val = "dreapta";
    }
    else if (projects[i].dataset.val == "dreapta") {
      projects[i].style.transform = spate;
      projects[i].dataset.val = "spate";
    }
    else if (projects[i].dataset.val == "spate") {
      projects[i].style.transform = stanga;
      projects[i].dataset.val = "stanga";
    }
  }
}
function rotateRight() {

  for (let i = 0; i < 4; i++) {
    if (projects[i].dataset.val == "stanga") {
      projects[i].style.transform = spate;
      projects[i].dataset.val = "spate";
    }
    else if (projects[i].dataset.val == "fata") {
      projects[i].style.transform = stanga;
      projects[i].dataset.val = "stanga";
    }
    else if (projects[i].dataset.val == "dreapta") {
      projects[i].style.transform = fata;
      projects[i].dataset.val = "fata";
    }
    else if (projects[i].dataset.val == "spate") {
      projects[i].style.transform = dreapta;
      projects[i].dataset.val = "dreapta";
    }

  }

}

// FOOTER - navigation
const linksFooter = document.querySelectorAll('.useful-links a');
linksFooter.forEach(link => {
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



var modal = document.querySelector('.modal');
var modalBtn = document.querySelector('.modal .close-btn');
var seeProjectBtns = document.querySelectorAll('.see-project');
var interv = null;
modalBtn.addEventListener('click', () => {

  container.style.opacity = "1";
  modal.style.display = "none";

});
seeProjectBtns.forEach(e => {

  e.addEventListener('click', () => {

    container.style.opacity = "0.2";
    modal.style.display = "flex";

  });
});


var mobilebtn=document.querySelector('.mobile-btn');
const mediaQuery = window.matchMedia('(max-width: 768px)');
function checkWidthAndExecute() {
  if (mediaQuery.matches) {
    menu_btn.addEventListener('click', mobileMenu);
    menu_btn.removeEventListener('click', normalMenu);
    if (menu_btn.dataset.responsive=="normal") {
      menu_btn.innerHTML="<i class='fa-solid fa-bars'></i>";
    }
    else if (menu_btn.dataset.responsive=="close") {
      menu_btn.innerHTML="<i class='fa-solid fa-x'></i>";
      container.style.display="none";
      container.classList.remove('perspective');
      page.classList.remove('perspective');
    }
  }
  else {
    menu_btn.removeEventListener('click', mobileMenu);
    menu_btn.addEventListener('click', normalMenu);
    
    if (menu_btn.dataset.responsive=="close") {
      menu_btn.innerHTML="Close";
      container.style.display="flex";
      container.classList.add('perspective');
      page.classList.add('perspective');
    }
    else if (menu_btn.dataset.responsive=="normal") {
      menu_btn.innerHTML="Menu";
    }
  }
}


checkWidthAndExecute();
window.addEventListener("resize", checkWidthAndExecute);

function normalMenu() {
  if (menu_btn.dataset.responsive=="normal") {
    menu_btn.dataset.responsive="close";
    menu_btn.innerHTML = "Close";
    container.classList.toggle('perspective');
    page.classList.toggle('perspective');
    navbar.classList.add('show');
    
  } else if(menu_btn.dataset.responsive=="close"){
    menu_btn.dataset.responsive="normal";
    menu_btn.innerHTML = "Menu";
    navbar.classList.remove('show');
    page.classList.remove('perspective');
  }
}
function mobileMenu() {
  if (menu_btn.dataset.responsive=="normal") {
    menu_btn.dataset.responsive="close";
    menu_btn.innerHTML = "<i class='fa-solid fa-x'></i>";
    container.style.display="none";
    navbar.classList.add('show');
  } else if(menu_btn.dataset.responsive=="close"){
    menu_btn.dataset.responsive="normal";
    menu_btn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    navbar.classList.remove('show');
    
   
    container.style.display="flex";
  }
}