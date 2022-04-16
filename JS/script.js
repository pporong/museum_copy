$(document).ready(function(){
    // 현재 슬라이드 닷츠

    // init slide change
  $('.all-wrap >.main-visual >.main-slider').on('init', function(event, slick){
    $('.slider-dots-box >.slider-dots >.dots').eq(0).addClass('active');
    $('.main-visual >.slider-dots-box .control-btn-box >.pause').addClass('active')
  });
  

    // 메인 슬라이드
    $('.all-wrap >.main-visual >.main-slider').slick({
        autoplay: true ,
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

    // 메인 슬라이드 닷츠
    $('.slider-dots-box >.slider-dots >.dots').click(function(){

        var num = $(this).index()

        $('.all-wrap >.main-visual >.main-slider').slick('slickGoTo', num)
    });
    

    // On before slide change
    $('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
         $('.slider-dots-box >.slider-dots >.dots').eq(nextSlide).addClass('active')
         $('.slider-dots-box >.slider-dots >.dots').eq(nextSlide).siblings().removeClass('active')
  });

    
    // 메인 슬라이드 컨트롤 버튼
    $('.main-visual >.slider-dots-box .control-btn-box >.play').click(function(){
        $('.all-wrap >.main-visual >.main-slider').slick("slickPlay")
        $('.main-visual >.slider-dots-box .control-btn-box >.play').removeClass('active')
        $('.main-visual >.slider-dots-box .control-btn-box >.pause').addClass('active')
    });
    $('.main-visual >.slider-dots-box .control-btn-box >.pause').click(function(){
        $('.all-wrap >.main-visual >.main-slider').slick("slickPause")
        $('.main-visual >.slider-dots-box .control-btn-box >.play').addClass('active')
        $('.main-visual >.slider-dots-box .control-btn-box >.pause').removeClass('active')
    });


});