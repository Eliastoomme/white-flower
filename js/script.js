// JavaScript Document

$(document).ready(function() {


    var nav = document.getElementById('nav');
    window.onscroll = function() {
        if (window.pageYOffset > 9 && screen.width >= 992) {
            nav.style.zIndex = 999999999999999;

        }
    };

    new WOW().init();



    $('nav ul li').click(function() {
        $('nav ul li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.dropdown-item').click(function() {
        $(this).parents('.dropdown').children('.btn').html($(this).html());
    });


    $('.menu-btn').click(function() {
        $('.side-menu').toggleClass('on');
    });

    $('.close-menu').click(function() {
        $('.side-menu').removeClass('on');
    });


    $('.filter').click(function() {
        var type = $(this).attr('data-filter');
        $('.filter.active').removeClass('active');
        $(this).addClass('active');
        if (type === 'all') {
            $('.all-products .gal').show();
        } else if (type === 'rice') {
            $('.all-products .gal').hide();
            $('.all-products .rice').show();
        } else if (type === 'sugar') {
            $('.all-products .gal').hide();
            $('.all-products .sugar').show();
        } else if (type === 'legumes') {
            $('.all-products .gal').hide();
            $('.all-products .legumes').show();
        }
    });



    $('.gal').click(function() {
        window.location.href = "product-details.html";

    });

});

function createBubble() {
    const section = document.querySelector('.banner')
    const createElement = document.createElement('span')

    var size = Math.random() * 60

    createElement.style.width = 20 + size + 'px'
    createElement.style.height = 20 + size + 'px'
    createElement.style.left = Math.random() * innerWidth + 'px'
    section.appendChild(createElement)
    setTimeout(() => {
        createElement.remove()
    }, 4000)
}

setInterval(createBubble, 50)