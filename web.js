document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If you need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
const searchicon1=document.querySelector('#searchicon1');
// const srchicon=document.querySelector('#srchicon1');
const search=document.querySelector('#searchinput1');
searchicon1.addEventListener('click',function(){
    search.style.display='flex';
    searchicon1.style.display='none';
});
const searchicon2=document.querySelector('#searchicon2');
const search2=document.querySelector('#searchinput2');
searchicon2.addEventListener('click',function(){
    search2.style.display='flex';
    searchicon2.style.display='none';
});

const bars=document.querySelector(".bar");
const cross=document.querySelector('#hdcross');
const headerbar=document.querySelector('.headerbar');

bars.addEventListener('click',function(){
    cross.style.display='block';
    setTimeout(()=>{
        headerbar.style.left = '0%';

    },200);
    headerbar.style.left='0%';
});
cross.addEventListener('click',function(){
    cross.style.display='none';
    headerbar.style.left='-100%';
});


// document.addEventListener('DOMContentLoaded', function () {
//     var mySwiper = new Swiper('.swiper-container', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: true,

//         // If you need pagination
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },

//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// });