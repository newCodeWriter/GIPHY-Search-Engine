$(function(){
    var deferred = $.Deferred()
    var mobSearch = $('#search-field').clone().attr('class', 'mobile-search');
    
    $('.menu-btn').click(function(){
        $('.toggle-menu').toggle();
        $('.mobile-search').remove();
    })
    $('.menu-btn').blur(function(){
        $('.toggle-menu').show();
    })
    $('.desk-search').click(function(){
        if($(window).width() < 650){
            $('nav').after(mobSearch);
            $('.mobile-search > input').attr('class', 'mobile-input');
            $('.mobile-search > button').removeAttr('class');
            $('.mobile-search').css('text-align', 'center');
            $('.mobile-search > input').css({
                'font-size': '0.85em',
                'font-family': "'Prata', serif",
                'border': '2px solid white',
                'padding': '0.5rem 0.5rem'
            });
            $('.mobile-search > button').css({
                'margin-left': '-3px',
                'margin-right': '25px',
                'padding': '0.5rem 0.5rem',
                'padding-top': '0.43rem',
                'color': 'white',
                'background-color': 'transparent',
                'border': '1px solid white', 
                'font-family': "'Prata', serif",
                'cursor': 'pointer'
            });
        }
    })
    $('body').delegate('.mobile-search > button', 'click', function(){
        //alert("this better work");
    })
    $(window).resize(function(){
        if($(this).width() > 650){
            var mobileInput = $('.mobile-input').val();
            $('.desk-input').val(mobileInput);
            $('.mobile-search').remove();
        }
    })
})