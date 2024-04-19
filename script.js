document.addEventListener("DOMContentLoaded", function() {
    var h1 = document.querySelector("#presentation h1");
    var h3 = document.querySelector("#h3-hidden");
    h1.addEventListener("animationend", function(event) {
        if (event.target === h1) {
            h3.style.display = "block";
            h3.classList.add("typing-h3");
        }
    });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  let arrows = document.getElementsByClassName("arrow");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  if (slideIndex === slides.length) {
    slideIndex = 0; 
  } else if (slideIndex === -1) {
    slideIndex = slides.length - 1; 
  }
  
  slides[slideIndex].style.display = "block";
  
  if (slideIndex === 0) {
    arrows[0].style.display = "none"; 
  } else {
    arrows[0].style.display = "block";
  }
  
  if (slideIndex === slides.length - 1) {
    arrows[1].style.display = "none"; 
  } else {
    arrows[1].style.display = "block";
  }
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

showSlides(); 

document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggle.addEventListener("click", function () {
      navbarCollapse.classList.toggle("collapsed");
  });
});
