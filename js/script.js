$(document).ready(function () {
    $('.nav-link').click(function (e) { 
        e.preventDefault();
        $('.nav-link').parent()
        $('html').animate({
            scrollTop : $($(this).attr('href')).offset().top - $('.navbar').outerHeight() 
        }, 800)
    });
    $(window).scroll(function () { 
        var scrolled = $(this).scrollTop()
        // console.log(scrolled);
        $('.nav-link').each(function(){
            if (scrolled >= $($(this).attr('href')).offset().top - $('.navbar').outerHeight() -50) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        })
    });
});
$(document).ready(function () {
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 500) {
            $('#top').fadeIn()
        }
        else{
            $('#top').fadeOut();
        }
        
    });
    $('#top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop : 0
        }, 1000)
    });
});