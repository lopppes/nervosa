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


// card

IMask(document.querySelector("#cc-cvv"), {
    mask: "000",
  })
  
  IMask(document.querySelector("#cc-number"), {
    mask: "0000 0000 0000 0000",
  })
  
  IMask(document.querySelector("#cc-validity"), {
    mask: "MM{/}YY",
    blocks: {
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: String(new Date().getFullYear()).slice(2),
        to: String(new Date().getFullYear() + 10).slice(2),
      },
    },
  })
  
  const formatNumberCard = value => {
    return value.substring(0, 4) + " " + value.substring(4, 9) + " " + value.substring(9, 14) + " " + value.substring(14, 19);
  };
  
  const formatNameCard = value => {
    const splitName = value.split(" ");
    if (splitName.length === 1) {
      return value;
    } else {
      let surnames = "";
      const lastPositionName = splitName.length - 1;
      const firstName = splitName[0];
      const lastName = splitName[lastPositionName];
      splitName.forEach((name, position) => {
        if (position > 0 && position < lastPositionName) {
          const surname = name[0];
          if (surname) {
            surnames += " " + name[0] + " ";
          }
        }
      });
      return firstName + (!surnames ? " " : surnames) + (!lastName ? "" : lastName);
    }
  }
  
  window.onload = () => {
    const code = document.querySelector('#cc-number');
    const codeView = document.querySelector('.code-view-credit-card');
    code.addEventListener('keyup', event => {
      codeView.innerText = formatNumberCard(event.target.value);
    });
  
    const name = document.querySelector('#cc-holder');
    const nameView = document.querySelector('.user-name');
    name.addEventListener('keyup', event => {
      nameView.innerText = formatNameCard(event.target.value);
    });
  
    const validity = document.querySelector("#cc-validity")
    const validityCard = document.querySelector(".expiration")
    validity.addEventListener("keyup", () => {
      validityCard.innerText = validity.value
    })
  
    const codeCVV = document.querySelector("#cc-cvv")
    const securityCard = document.querySelector(".bar-code")
    codeCVV.addEventListener("keyup", () => {
      securityCard.innerText = codeCVV.value
    })
  
    const input = document.querySelector('#cc-cvv');
    input.addEventListener('focus', function () {
      document.querySelector('#credit-card').classList.add('card-number');
    });
  
    input.addEventListener('focusout', function () {
      document.querySelector('#credit-card').classList.remove('card-number');
    });
  };
  
  
// pop up

const addButton = document.querySelector('button');
const popup = document.getElementById('popup');
const popupClose = document.getElementById('popup-close');

addButton.addEventListener('click', () => {
  const ccNumber = document.querySelector('#cc-number').value;
  const ccHolder = document.querySelector('#cc-holder').value;
  const ccValidity = document.querySelector('#cc-validity').value;
  const ccCvv = document.querySelector('#cc-cvv').value;

  if (!ccNumber || !ccHolder || !ccValidity || !ccCvv) {
    popup.style.display = 'block';
  }
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

  
  