let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileNav = document.querySelector('.mobileNav');

hamberger.addEventListener('click', function() {
    mobileMenu.classList.add('open')
});
times.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});
mobileNav.addEventListener('click', function(){
    mobileMenu.classList.remove('open');
});