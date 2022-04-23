$(document).ready(function(){

    // 현재 슬라이드 닷츠

    // init slide change : 메인슬라이드
    $('.all-wrap >.main-visual >.main-slider').on('init', function(event, slick){
        $('.slider-dots-box >.slider-dots >.dots').eq(0).addClass('active');
        $('.main-visual >.slider-dots-box .control-btn-box >.pause').addClass('active')
    });

    // init slide change : 서브슬라이드
    $('.all-wrap >.section02 >.section02-post').on('init', function(event, slick){
        $('.all-wrap >.section02 >.section02-title >.title-navi .pause').addClass('active')
    });

    // init slide change : 섹션3 슬라이드
    $('.section03 >.notice-area .notice-slider >.n-slide').on('init', function(event, slick){
        $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').eq(0).addClass('active');
        // $('.main-visual >.slider-dots-box .control-btn-box >.pause').addClass('active')
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
        $('.all-wrap >.main-visual >.main-slider').slick('slickPrev')
    });
    $('.all-wrap >.main-visual .slider-btn-box >.next-btn').click(function(){
        $('.all-wrap >.main-visual >.main-slider').slick('slickNext')
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


    // 섹션02 ; 서브슬라이드 (전시 섹션)
    $('.all-wrap >.section02 >.section02-post').slick({
        slidesToShow: 4,
        swipeToSlide : true ,
        dots: false ,
        arrows : false ,
        autoplay : true ,
        autoplaySpeed : 2000 , 

    })
    // 서브 슬라이드 버튼
    $('.all-wrap >.section02 >.section02-title >.title-navi .prev-btn').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick('slickPrev')
    });
    $('.all-wrap >.section02 >.section02-title >.title-navi .next-btn').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick('slickNext')
    });

    // 서브 슬라이드 컨트롤 버튼
    $('.all-wrap >.section02 >.section02-title >.title-navi .play').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick("slickPlay")
        $('.all-wrap >.section02 >.section02-title >.title-navi .play').removeClass('active')
        $('.all-wrap >.section02 >.section02-title >.title-navi .pause').addClass('active')
    });
    $('.all-wrap >.section02 >.section02-title >.title-navi .pause').click(function(){
        $('.all-wrap >.section02 >.section02-post').slick("slickPause")
        $('.all-wrap >.section02 >.section02-title >.title-navi .play').addClass('active')
        $('.all-wrap >.section02 >.section02-title >.title-navi .pause').removeClass('active')
    });



    // 탭메뉴
    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn01').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn01').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content01').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn01').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content01').siblings().removeClass('active')
    });

    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn02').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn02').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content02').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn02').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content02').siblings().removeClass('active')
    })

    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn03').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn03').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content03').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn03').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content03').siblings().removeClass('active')
    })

    $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn04').click(function(){
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn04').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content04').addClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-box >.tab-btn04').siblings().removeClass('active')
        $('.section03 >.notice-area >.notice-tab >.tab-content >.content04').siblings().removeClass('active')
    })


    // 섹션3 슬라이드 
    $('.section03 >.notice-area .notice-slider >.n-slide').slick({
        autoplay : true ,
        arrows : false ,

    })  
    // 섹션3 슬라이드 닷츠
    $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').click(function(){

        var num = $(this).index()

        $('.section03 >.notice-area .notice-slider >.n-slide').slick('slickGoTo', num)
    });    
    // On before slide change
    $('.section03 >.notice-area .notice-slider >.n-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
         $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').eq(nextSlide).addClass('active')
         $('.section03 >.notice-area .notice-slider >.slider-dots-box >.slider-dots >.dots').eq(nextSlide).siblings().removeClass('active')
  });

});