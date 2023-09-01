
$(document).ready(function(){ //문서준비이벤트 시작
  // modal popup
  $('.nav').hide();

  $('.modal').click(function(){
    $('#wrap').hide();
    $('.nav').fadeIn(200);
  });

  $('.close').click(function(){
    $('#wrap').show();
    $('.nav').fadeOut(200);
  });


  // 예약취소화면 안내창
  $('.popup').hide();

    $('.pop').click(function(){
        $('.popup').show();
    });

    $('.close').click(function(){
        $('.popup').hide();
    });


  // 예약하기 옵션선택

 $('.o_submenu').hide();

 $('.o_menu > li').click(function(){
    $(this).children('.o_submenu').slideToggle();
 });


// 팝업 메뉴창

  $('.menu > ul > li:first-child > ul').show();
  $('.submenu').not('.menu > ul > li:first-child > ul').hide();

  $('.menu > ul > li').click(function(){
    $(this).children('.submenu').show();
    $(this).siblings().children('.submenu').hide();
  });


// 팝업 메뉴창 클릭시 active

  $('.menu > ul > li').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });


//예약박스 상단 고정

$(window).scroll(function(){
  /* ()안의 조건을 만족했을 때 {}을 실행해라. */
  if($(window).scrollTop() > 50) {
      $('#header0, #title2, .booking_js').addClass('active');
  }
  else {
      $('#header0, #title2, .booking_js').removeClass('active');
  }
});

//그룹연수 후기 이미지슬라이드

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


});//문서준비 이벤트 종료