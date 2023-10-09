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
 
