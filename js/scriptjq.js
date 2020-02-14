$('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    center: true,
    autoplay:true,
    autoHeight: true,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    margin:0,
    // responsive:{
    //     600:{
    //         items:3
    //     }
    // }
})
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 732) {
//         $(".start_header").addClass("start_header_full");
//         $(".start_header").removeClass("start_header_half");
//         $(".start_header").animate({scrollTop: $((hash).offset().top)})

//     } else {
//         $(".start_header").removeClass("start_header_half");
//     }
// });
// $("#button").click(function() {
//     $('#webteam').toggleClass("visible");
// });
// function click_team(){
//     console.log("clicked")
//     var id = $(this).attr('href');
//     var $id = $(id);
//     if ($id.length === 0) {
//         return;
//     }
//     top.location.href='#webteam';
// }

function myFunction(){
    // var laptop = window.matchMedia("(min-width: 1000px)")
    //   myFun(x) // Call listener function at run time
    //   x.addListener(myFun) // Attach listener function on state changes
    
    //     console.log("entered")
    //     if (laptop.matches) { // If media query matches
    //     //   document.body.style.backgroundColor = "yellow";
    //     window.scrollTo(0,794)
    //     console.log("desktop")
    //     } else {
    //     //   document.body.style.backgroundColor = "pink";
    //     window.scrollTo(0,551)
    //         console.log("phone")
    //     }

    var ctd = document.getElementById('CTD')


    console.log("entered")
    setTimeout(()=>{
        console.log("scrolled")
        // window.scrollTo(0,794)
        ctd.scrollIntoView();
    },2000)
}
function toEND(){
    // console.log("toEND")
    // var team = document.getElementById('#webteam')
    setTimeout(()=>{
        // team.scrollIntoView()
        scrollBy(0,700)
    },100)
    
}
