
var headerTitleDiv = document.getElementById("header-title");
  window.addEventListener("DOMContentLoaded", function() {
   
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

  var menu_btn=document.querySelector('#menu-btn');
  var container=document.querySelector('.container');
  var navbar=document.getElementById('navbar');

  menu_btn.addEventListener("click",activateMenu);

function activateMenu(){
    if(menu_btn.innerHTML=="Menu"){
      menu_btn.innerHTML="Close";
      container.classList.add("container-rotate");
      navbar.style.display="flex";
      
    }
    else{
      menu_btn.innerHTML="Menu";
      container.classList.remove("container-rotate");
      navbar.style.display="none";
    }
}