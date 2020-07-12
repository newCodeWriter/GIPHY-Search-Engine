$(function(){
    var mobSearch = $('#search-field').clone().addClass('mobile-search').removeAttr('id');
    
    function aangGifs(){   
        var input = 'aang avatar';
        $('.search-btn').focus();
        $('#gif-search-btn').text(input);
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${input}&limit=30`
        }).done(function(res){
            var gifs = res.data;  
            $.each(gifs, function(i, e){
                var img = e.images.fixed_height_small.url;
                var source = e.source; 
                $('.insert-gifs').append(`<a href="${source}" target="_blank" class="source-link"><img src="${img}" class="new-img" alt="a gif"/></a>`);
                $('#gif-items-btn').text(gifs.length);
            })
        })
    }

    aangGifs();
    
    $('.menu-btn').click(function(){
        $('.toggle-menu').toggle();
    })

    $('.search-btn').click(function(){
        if($(window).width() < 571){
            $('nav').after(mobSearch);
            $('.mobile-search > input').removeClass('search-input').addClass('mobile-input').attr('size', 22);
            $('.mobile-search > button').addClass('mobile-btn');
            $('.mobile-btn').text('').append('<i class="fas fa-search"></i>');
        }
    })

    $(window).resize(function(){
        if($(this).width() > 571){
            $('.toggle-menu').show();
            $('.mobile-search').remove();
        }
        else if($(this).width() < 571){
            $('.search-input').hide();
        }
    })

    $('.search-it').delegate('.search-btn', 'click', function(){
        if($(window).width() > 571){    
            $('.search-input').show();
            if($('.search-input').val() == ''){
                $('.search-input').focus();
            }
            else{
                var userInput = $('.search-input').val();
                $('#gif-search-btn').text(userInput);
                $.ajax({
                    url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${userInput}&limit=30`,
                    success: function(){$('.source-link').remove();}
                }).done(function(res){
                    var gifs = res.data; 
                    if(gifs.length == ""){
                        $('#gif-items-btn').text(0);
                        $('.search-input').val('');
                    } 
                    else{
                        $.each(gifs, function(i, e){
                        var img = e.images.fixed_height_small.url;
                        var source = e.source; 
                        $('.insert-gifs').append(`<a href="${source}" target="_blank" class="source-link"><img src="${img}" class="new-img" alt="a gif"/></a>`);
                        $('.search-input').val('');
                        $('#gif-items-btn').text(gifs.length);
                        })
                    }  
                })
            }
        }
    })

    $('body').delegate('.mobile-search > .mobile-btn', 'click', function(){
        if($('.mobile-input').val() == ''){
            $('.mobile-input').focus();
        }
        else{
            var userInput = $('.mobile-input').val();
            $('#gif-search-btn').text(userInput);
            $('.source-link').remove(); 
            $.ajax({
                url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${userInput}&limit=30`
            }).done(function(res){
                var gifs = res.data;  
                if(gifs.length == ""){
                    $('#gif-items-btn').text(0);
                    $('.mobile-input').val('');
                }
                else{
                    $.each(gifs, function(i, e){
                    var img = e.images.fixed_height_small.url;
                    var source = e.source; 
                    $('.insert-gifs').append(`<a href="${source}" target="_blank" class="source-link"><img src="${img}" class="new-img" alt="a gif"/></a>`);
                    $('.mobile-input').val('');
                    $('#gif-items-btn').text(gifs.length);
                    })
                }   
            }) 
        }
    })
    $('.insert-gifs').delegate("a[href='']", "mouseover mouseenter", function(){
        $(".insert-gifs > a[href='']").removeAttr('href');
    })
})