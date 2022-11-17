let txtDays, txtHours, txtMinutes, txtSeconds,
  rtlCheck = false;
function fixedHeader(){
    try {
        const headerDiv = document.getElementById("header-wrap");
        const navBar = document.getElementById('nav-bar');
        if(window.pageYOffset  >= 35 && window.innerWidth < 992){
            headerDiv.classList.add('header-fixed');
            navBar.classList.remove('navbar-dark');
            navBar.classList.add('navbar-light');
        }
        else{
            headerDiv.classList.remove('header-fixed');
            navBar.classList.remove('navbar-light');
            navBar.classList.add('navbar-dark');
        }
    }
    catch(err) {
        return false;
    }
}

function initiateAnimation(){
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 800
    });
}

function mobCloseMainMenu(){
    $('.navbar-collapse').delay(0).animate({left: '-100%'}, 1000);
}

function mobOpenMainMenu(){
    $('.navbar-collapse').delay(0).animate({left: '0'}, 1000);
}

function carousels(){
    // SLIDERS 
    if($('#main-slider')){
      $('#main-slider .owl-carousel').owlCarousel({
          rtl: rtlCheck,
          loop:true,
          margin:0,
          nav:true,
          items: 1,
      });
    }

    if($('#offer-carousel')){
      $('#offer-carousel.owl-carousel').owlCarousel({
          rtl: rtlCheck,
          loop:false,
          margin:0,
          nav:true,
          items: 1,
      });
    }


    if($('.prods-def-slick')){
      $('.prods-def-slick.slick-carousel').slick({
          rtl: rtlCheck,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: true,
          rows: 1,
          responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
          ],   
        });
    }
    if($('.prods-slick')){
      $('.prods-slick.slick-carousel').slick({
          rtl: rtlCheck,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          rows: 2,
          responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  rows:1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  rows:1,
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  rows:1,
                }
              }
          ],
        });
    }

    if($('.product-slider')){
      $('.slider-for').slick({
        rtl: rtlCheck,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
      });
      $('.slider-nav').slick({
        rtl: rtlCheck,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        focusOnSelect: true,
        vertical: true,
        draggable: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                vertical: false,
              }
            },
        ]
      });
    }
    

}

$(window).on('scroll', function(){
    fixedHeader();
});


$(document).ready(function () {
    if($('body').hasClass('rtl')){
        rtlCheck = true;
        txtDays = 'أيام';
        txtHours = 'ساعات';
        txtMinutes = 'دقائق';
        txtSeconds = 'ثواني';
    }else{
        txtDays = 'days';
        txtHours = 'hours';
        txtMinutes = 'minutes';
        txtSeconds = 'seconds';
        rtlCheck = false;
    }
    
    initiateAnimation();
    carousels();    
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {

            let HTML = 
                `
                <div class="timer-d"><span>`+event.strftime('%D')+`</span>`+txtDays+`</div>
                <div class="timer-h"><span>`+event.strftime('%H')+`</span>`+txtHours+`</div>
                <div class="timer-m"><span>`+event.strftime('%M')+`</span>`+txtMinutes+`</div>
                <div class="timer-s"><span>`+event.strftime('%S')+`</span>`+txtSeconds+`</div>
                `
            ;
          $this.html(HTML);
        //   $this.html(event.strftime('%D days %H:%M:%S'));
        });
    });

    $('.usr-list-lnk').click(function(){
        if($('.usr-list')){
            $('.usr-list').toggleClass('active');
        }
    });

    $('#reg-mod-lnk').click(function(){
        $('#loginModal').modal('hide');
        setTimeout(function(){
            $('#registerModal').modal('show');
        }, 300);
        
    });

    $('#log-mod-lnk').click(function(){
        $('#registerModal').modal('hide');
        setTimeout(function(){
            $('#loginModal').modal('show');
        }, 300);
        
    });

    $('#filter-toggler').click(function(){
        $('#prods-filter').slideDown();
    });
    $('#filter-close').click(function(){
        $('#prods-filter').slideUp();
        // $('#prods-filter').css({'top': '-100%'});
    });


    $('.quantity-plus').click(function(){
        let input = $(this).closest('.prod-quantity').find('.quantity-field');
        let val = parseInt(input.val());
        val = val + 1;
        input.val(val);
    });
    $('.quantity-minus').click(function(){
        let input = $(this).closest('.prod-quantity').find('.quantity-field');
        let val = parseInt(input.val());
        if(val > 1){
          val = val - 1;
          input.val(val);
        }
    });

    try {
        $('#datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});