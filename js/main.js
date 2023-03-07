
var typed = new Typed('.move', {
    strings: ["Lary Danials.", "Developer.","Designer."],
    typeSpeed: 120,
    loop: true,
    backDelay: 1000,
    backSpeed: 120,
});
// /////////
let aboutOffset = $('#about').offset().top
$(window).scroll(()=>{
    let scrollTop = $(window).scrollTop();
    if(scrollTop >= aboutOffset-100)
    {
        $('#navbar-example').css('backgroundColor','rgba(0,0,0,.7)')
    }
    else{
        $('#navbar-example').css('backgroundColor','transparent')
    }
})

// ////////////
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
