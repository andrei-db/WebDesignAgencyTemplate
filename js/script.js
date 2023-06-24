
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

