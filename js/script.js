
// Slider

$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1000,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/rigth.svg"></button>'
	});
});

// Menu and hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.delivery__header-menu'),
    menuItem = document.querySelectorAll('.delivery__header-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('delivery__header-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('delivery__header-menu_active');
        });
    });
});

// Scroll up

$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
});