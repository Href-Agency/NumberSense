var ready = function (fn) {
    // Sanity check
    if (typeof fn !== "function") return;
    // If document is already loaded, run method
    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      return fn();
    }
    // Otherwise, wait until document is loaded
    document.addEventListener("DOMContentLoaded", fn, false);
  };
  ready(function () {
    // Write your code in here
    const menuitems = document.querySelectorAll('.navigation-menu-block a')
    for (let i=0; i<menuitems.length; i++){
        menuitems[i].addEventListener ('click', function (){
            for (let g=0; g<menuitems.length; g++) {
                menuitems[g].classList.remove('active')
            }
            this.classList.add('active');
        }) 
    }
  });