var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('li.main-menu').mouseleave(function () {
    $('li.main-menu').removeClass('on')
  })
  $('li.main-menu').mouseenter(function () {
    $('li.main-menu').removeClass('on')
    $(this).addClass('on')
  })

  $('.mobile a').click(function(){
    $('.nav-wrap ul li').css({"margin-left": "100px"});
  });


  $('.banner').click(function(){
    $('.nav-wrap ul li').css({"margin-left": "0px"});
  });