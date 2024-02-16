ScrollReveal().reveal('.bolha', { delay: 200 });
ScrollReveal({ reset: true });

const navBar = document.querySelector(".nav-mobile"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay-header");
       itens = document.querySelectorAll(".item");



     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });
     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
     itens.forEach((itens) =>
     itens.addEventListener("click", (event) => {
        navBar.classList.remove("open");
      })
      );


    