'use strict';



// preloader

window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 2000); 
});
 


 // carrinho

 const cartButtons = document.querySelectorAll('.cart-btn');
 const cartTotal = document.querySelector('.btn-text');
 const cartPopup = document.querySelector('.cart-popup');
 let totalValue = 0;

 cartButtons.forEach((button) => {
     button.addEventListener('click', () => {
         const price = parseFloat(button.getAttribute('data-price'));

         if (!button.classList.contains('added-to-cart')) {
             totalValue += price;

             button.classList.add('added-to-cart');
             button.innerHTML = '<ion-icon name="bag-check-outline" aria-hidden="true"></ion-icon>';
             cartPopup.textContent = 'Item adicionado ao carrinho!';
             cartPopup.style.display = 'block';
          

             setTimeout(() => {
                 cartPopup.style.display = 'none';
             }, 2000);
         } else {
             totalValue -= price;

             button.classList.remove('added-to-cart');
             button.innerHTML = '<ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>';
             cartPopup.textContent = 'Item removido do carrinho!';
             cartPopup.style.display = 'block';

             setTimeout(() => {
                 cartPopup.style.display = 'none';
             }, 2000);
         }

         cartTotal.textContent = `R$${totalValue.toFixed(2)}`;
     });
 });

 // contador de estrelas

 const starButtons = document.querySelectorAll('.star-btn');
 const starBadge = document.querySelector('.star-badge');
 const starPopup = document.querySelector('.star-popup');
 let totalStars = 0;

 starButtons.forEach((button) => {
     let isClicked = false;

     button.addEventListener('click', () => {
         if (!isClicked) {
             totalStars += 1;
             starBadge.textContent = totalStars.toString();
             isClicked = true;
             starPopup.textContent = 'Item adicionado aos favoritos!';
             starPopup.style.display = 'block';
         } else {
             totalStars -= 1;
             starBadge.textContent = totalStars.toString();
             isClicked = false;
             starPopup.textContent = 'Item removido dos favoritos!';
             starPopup.style.display = 'block';
         }

         setTimeout(() => {
             starPopup.style.display = 'none';
         }, 1000);
     });
 });

 
/**
 *  event 
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header, back top btn 
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/**
 * scroll effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

// countdown

function updateCountdown() {
  const countdownElements = document.querySelectorAll('.countdown .time');

  let days = parseInt(countdownElements[0].textContent);
  let hours = parseInt(countdownElements[1].textContent);
  let minutes = parseInt(countdownElements[2].textContent);
  let seconds = parseInt(countdownElements[3].textContent);
  
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
      }
    }
  }
  
  countdownElements[0].textContent = String(days).padStart(2, '0');
  countdownElements[1].textContent = String(hours).padStart(2, '0');
  countdownElements[2].textContent = String(minutes).padStart(2, '0');
  countdownElements[3].textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);


/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);


// música play

const musicBtn = document.querySelector(".music-btn");
const popup = document.getElementById("popup-play");
let isMusicPlaying = false;
const audio = document.getElementById("myAudio");

function updatePlayIcon() {
    const icon = musicBtn.querySelector("i");
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
}

audio.addEventListener("ended", function() {
    isMusicPlaying = false;
    updatePlayIcon();
});

function toggleMusic() {
    if (isMusicPlaying) {
        audio.pause();
        popup.textContent = "Música desativada";
    } else {
        audio.play();
        popup.textContent = "Música ativada";
    }

    isMusicPlaying = !isMusicPlaying;
    const icon = musicBtn.querySelector("i");
    icon.classList.toggle("fa-play");
    icon.classList.toggle("fa-pause");

    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}



// exchange images


var imagensOriginais = {
  'shop-card-1': './src/second-imgs/vintage-01.webp',
  'shop-card-2': './src/second-imgs/vintage-02.webp',
  'shop-card-3': './src/second-imgs/vintage-03.webp',
  'shop-card-4': './src/second-imgs/mask-01.webp',
  'shop-card-5': './src/second-imgs/mask-02.webp',
  'shop-card-6': './src/second-imgs/mask-03.webp',
  'shop-card-7': './src/second-imgs/mask-04.webp',
  'shop-card-8': './src/second-imgs/mask-05.webp',
  'shop-card-9': './src/second-imgs/mask-06.webp'
  
};

var imagensAlternativas = {
  'shop-card-1': './src/second-imgs/vintage-04.webp',
    'shop-card-2': './src/second-imgs/vintage-05.webp',
    'shop-card-3': './src/second-imgs/vintage-06.webp',
    'shop-card-4': './src/second-imgs/mask-back.jpeg',
    'shop-card-5': './src/second-imgs/mask-back.jpeg',
    'shop-card-6': './src/second-imgs/mask-back.jpeg',
    'shop-card-7': './src/second-imgs/mask-back.jpeg',
    'shop-card-8': './src/second-imgs/mask-back.jpeg',
    'shop-card-9': './src/second-imgs/mask-back.jpeg'
};

var imagensAtuais = {}; 

function trocarImagem(elementId) {
  var shopCard = document.getElementById(elementId); 

  if (!(elementId in imagensAtuais)) {
    
    imagensAtuais[elementId] = 'original';
  }

  if (imagensAtuais[elementId] === 'original') {
    shopCard.querySelector('img').src = imagensAlternativas[elementId];
    imagensAtuais[elementId] = 'alternativa';
  } else {
    shopCard.querySelector('img').src = imagensOriginais[elementId];
    imagensAtuais[elementId] = 'original';
  }
}

// search

const items = {
  "t-shirt": "#t-shirt",
  "ski mask": "#ski-mask",
  "blouses": "#blouses"
};

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", updateResults);

function updateResults() {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (searchTerm.length === 0) {
      searchResults.style.display = "none";
      return;
  }

  const matchingItems = Object.keys(items).filter(item => item.includes(searchTerm));

  if (matchingItems.length === 0) {
      searchResults.style.display = "block";
      searchResults.textContent = "Item não encontrado";
  } else {
      searchResults.style.display = "block";
      matchingItems.forEach(item => {
          const resultItem = document.createElement("a");
          resultItem.href = items[item];
          resultItem.textContent = item;
          searchResults.appendChild(resultItem);

          resultItem.addEventListener("click", () => {
              searchResults.style.display = "none";
          });
      });
  }
}


document.addEventListener("click", (event) => {
  if (!searchResults.contains(event.target) && event.target !== searchInput) {
      searchResults.style.display = "none";
  }
});


window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
      searchResults.style.display = "none";
  }
});
