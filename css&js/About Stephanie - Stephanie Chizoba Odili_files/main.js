'use strict';

//   * Main JS File
//   *
//   * @package  Stephanie Odili 
//   * @author   mustapha Azeezat <mustaphazeezat@gmail.com>

// Definitions
let stephanie = {
    // Variables
    body:       document.body,
    mainbar:    document.querySelector('#mainbar')
};


// Output current year
// Stephanie Odili .insertCurrentYear = function () {
//     return this.elem.innerText = this.fullYear;
// };


//Affix mainbar to top on scroll to it
stephanie.affixMainbar = function() {
    let that = this;
    window.addEventListener('scroll', function() {
        let scrollY = window.scrollY;
        if (scrollY > 50) {
            that.mainbar.classList.add('is-fixed');
            that.mainbar.classList.add('shadow');
        } else {
            that.mainbar.classList.remove('is-fixed');
            that.mainbar.classList.remove('shadow');
        }
    });
};


//    
let navEl = document.querySelector('.nav'),
    toggler = document.querySelector('.toggle-mobile-nav');
toggler.addEventListener('click', function () {
    navEl.classList.toggle('is-active')
    toggler.classList.toggle('is-clicked')
}) 



stephanie.affixMainbar();
// // Stephanie Odili .insertCurrentYear();
// Stephanie Odili .replaceMedia();