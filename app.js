//   library AOS
AOS.init();
//   library carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:3
        }
    }
})

$('.play').on('click',function(){
owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')})


});
