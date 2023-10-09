'use strict';

// cursor

document.addEventListener('mousemove', (e) => {
    const customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
  });
  
  
  
// preloader
  
  window.addEventListener('load', function () {
      setTimeout(function () {
          document.body.classList.add('loaded');
      }, 2000); 
  });



/**
 * add event on element
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

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNav);



/**
 * slider 
 */

const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

let sliderPos = 0;

const totalSliderItems = 2;

const slideToNext = function () {

  sliderPos++;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();

}

addEventOnElem(nextBtn, "click", slideToNext);


const slideToPrev = function () {

  sliderPos--;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();

}

addEventOnElem(prevBtn, "click", slideToPrev);

function sliderEnd() {
  if (sliderPos >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (sliderPos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

sliderEnd();

 // pop-up

 document.getElementById("mostrarMedidas").addEventListener("click", function() {
  document.getElementById("medidasPopup").style.display = "block";
  document.getElementById("bgMedidas").style.display = "block";
});

document.getElementById("fecharPopup").addEventListener("click", function() {
  document.getElementById("medidasPopup").style.display = "none";
  document.getElementById("bgMedidas").style.display = "none";
});

document.getElementById("bgMedidas").addEventListener("click", function() {
  document.getElementById("medidasPopup").style.display = "none";
  document.getElementById("bgMedidas").style.display = "none";
});


// product

const totalPriceElem = document.querySelector("[data-total-price]");
const qtyElem = document.querySelector("[data-qty]");
const qtyMinusBtn = document.querySelector("[data-qty-minus]");
const qtyPlusBtn = document.querySelector("[data-qty-plus]");

let qty = 1;

let productPrice = parseFloat(totalPriceElem.getAttribute("data-price"));

let totalPrice = qty * productPrice;

const increaseProductQty = function () {
  qty++;
  totalPrice = qty * productPrice;

  qtyElem.textContent = qty;
  totalPriceElem.textContent = `R$${totalPrice.toFixed(2)}`;
}

addEventOnElem(qtyPlusBtn, "click", increaseProductQty);

const decreaseProductQty = function () {
  if (qty > 1) qty--;
  totalPrice = qty * productPrice;

  qtyElem.textContent = qty;
  totalPriceElem.textContent = `R$${totalPrice.toFixed(2)}`;
}

addEventOnElem(qtyMinusBtn, "click", decreaseProductQty);

// size

function changeColor(size) {
  const buttons = document.querySelectorAll('.size-button');
  
  buttons.forEach(button => {
      button.classList.remove('selected');
  });

  const button = document.getElementById(size);
  button.classList.add('selected');
}

