// // Created by Yuxi Luo
// // http://skycocoo.com

// var time = 0;

// function load4() {
//     var id = setInterval(
//         function(){
//             time += 0.05;
//             var sine = Math.sin(2*time);
//             var cosine = Math.cos(2*time);

//             var randsin = Math.random() * sine;
//             var randcos = Math.random() * cosine;

//             // function reference:
//             // https://math.stackexchange.com/a/7991
//             $("#load4").css({
//                 "top": 70 * sine * cosine,
//                 "left": 70 * cosine,
//                 "background-color": "rgb(" + (20 + 20 * randsin) + ", " + (181 + 50 * randsin) + ", " + (204 + 50 * randcos) + ")"
//             });
//         }, 10
//     );
// };

// $(document).ready(function(){
//     load4();
// });
$(window).on('load', function(){
    $(".loader-wrapper").fadeOut();
})