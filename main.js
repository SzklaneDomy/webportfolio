const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const mainContainer = document.querySelector(".main-container");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    burger.classList.toggle("toggle");
  });

  mainContainer.addEventListener("click", () => {
    if (burger.className === "burger toggle") {
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.3}s`;
        }
      });

      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    }
  });
};

//Scroll to top arrow

const goToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset == 0) {
    goToTop.style.display = "none";
  } else {
    goToTop.style.display = "block";
    goToTop.style.animation = "goToTopFadeIn 1s forwards";
  }
});

goToTop.addEventListener("click", function() {
  document.getElementById("about").scrollIntoView();
});
navSlide();
