$(".burger").click(function(){
    //toggle nav
    $(".nav-links").toggleClass("nav-active");

    //toggle links
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link,index) =>{
        if(link.style.animation){
            link.style.animation = '';
        }
        else {
            link.style.animation=`navLinkFade 0.5s ease forwards ${index / 5 + 0.1}s`
        }
    });

    //Transform Burger Menu
    $(".burger").toggleClass("toggle");
});

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,


    breakpoints: {
        // when window width is >= 600px
       600: {
          slidesPerView: 2,
          spaceBetween: 40
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters

    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,


    breakpoints: {
        // when window width is >= 600px
       600: {
          slidesPerView: 1,
          spaceBetween: 40
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
  