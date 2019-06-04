$(document).ready(function () {
  $('.about-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: 'ease-in',
    dots: true,
    arrows: false,
    pauseOnDotsHover: true,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,

  });


  $('.speak-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    cssEase: 'ease-in',
    dots: true,
    arrows: true,
    pauseOnDotsHover: true,
    lazyLoad: 'ondemand',
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      },
    ]

  });
});


/* Transform Card */

$('.more').click(function (e) {
  e.preventDefault();

  $(e.target.offsetParent.offsetParent.offsetParent.firstElementChild).css({
    'transform': 'rotateY(180deg)'
  })


  $(e.target.offsetParent.offsetParent.offsetParent.lastElementChild).css({
    'transform': 'rotate(0deg)'
  })

})

$('.close').click(function (e) {
  e.preventDefault();



  $(e.target.offsetParent.offsetParent.firstElementChild).css({
    'transform': 'rotateY(0deg)'
  })


  $(e.target.offsetParent.offsetParent.lastElementChild).css({
    'transform': 'rotateY(180deg)'
  })


})


/* ./Transform Card */


/*Modal*/

$('#openModal').on('click', function () {
  $('#modal').show('drop', 1000);
});
$('#close').on('click', function () {
  $('#modal').hide('drop', 1000);
})




/* ./Modal*/


$('#burger-menu').on('click', function () {
  $('#menu').css('transform', 'translateX(0)');
});
$('#close-menu').on('click', function () {
  $('#menu').css('transform', 'translateX(100%)');
});

$("#menu").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1500);
});

