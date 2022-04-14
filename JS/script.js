$(document).ready(function(){


    // 메인 슬라이드
    $('.all-wrap >.main-visual >.main-slider').slick({
        autoplay: false ,
        autoplaySpeed : 2000 , 
        dots: false ,
        pauseOnHover: false ,
        arrows : false ,
    })
    // 메인 슬라이드 버튼
    $('.all-wrap >.main-visual .slider-btn-box >.prev-btn').click(function(){
        $('.main-slider').slick('slickPrev')
    });
    $('.all-wrap >.main-visual .slider-btn-box >.next-btn').click(function(){
        $('.main-slider').slick('slickNext')
    });
    
});