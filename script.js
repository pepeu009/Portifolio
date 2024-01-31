ScrollReveal().reveal('.bolha', { delay: 200 });
ScrollReveal({ reset: true });

const navBar = document.querySelector(".nav-mobile"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");
       itens = document.querySelector(".item");



     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });
     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
     itens.addEventListener("click", () => {
        navBar.classList.remove("open");
      });