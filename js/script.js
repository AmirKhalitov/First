function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
// Fix problem of the WEBP

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.slider').slick({
    arrows:true,
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    draggable: false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              adaptiveHeight: true
            }
            },
        {
            breakpoint: 832,
            settings: {
              slidesToShow: 2,
            }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
              }
              },
        {
            breakpoint: 1154,
            settings: {
              slidesToShow: 3,
            }
            },
        {
            breakpoint: 1217,
            settings: {
              slidesToShow: 3,
            }
          },
    ]
    });
});
$(document).ready(function(){
  $('.client__slider').slick({
  slidesToShow: 5,
  infinite: true,
  slidesToScroll: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  draggable: false,
  dots: true,
  responsive: [
    {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
        }
        },
    {
        breakpoint: 925,
        settings: {
          slidesToShow: 2,
        }
        },
    {
        breakpoint: 1145,
        settings: {
          slidesToShow: 3,
        }
        },
    {
        breakpoint: 1215,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 645,
        settings: {
          slidesToShow: 2,
        }
      },
  ]
});
});