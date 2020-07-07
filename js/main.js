$(function(){
    var mobSearch = $('#search-field').clone().addClass('mobile-search');
    
    function codingGifs(){   
        var input = 'Coding';
        $('#gif-search-btn').text(input);
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${input}&limit=30`
        }).done(function(res){
            var gifs = res.data;  
            $.each(gifs, function(i, e){
                var img = e.images.fixed_height_small.url;
                $('.insert-gifs').append(`<img src="${img}" class="new-img" alt="a gif"/>`);
                $('#gif-items-btn').text(gifs.length);
            })
            //$('footer').css('position', 'sticky');
        })
    }

    codingGifs();
    
    $('.menu-btn').click(function(){
        $('.toggle-menu').toggle();
    })

    $('.desk-search').click(function(){
        if($(window).width() < 571){
            $('nav').after(mobSearch);
            $('.mobile-search > input').addClass('mobile-input');
            $('.mobile-search > button').addClass('mobile-btn');
            $('.mobile-btn').text('').append('<i class="fas fa-search"></i>');
            $('.mobile-search').css('text-align', 'center');
        }
    })

    $(window).resize(function(){
        if($(this).width() > 571){
            //$('.search-input').val('');
            $('.toggle-menu').show();
            $('.mobile-search').remove();
        }
    })

    $('.search-it').delegate('.search-btn', 'click', function(){
        if($(window).width() > 571){    
            if($('.search-input').val() == ''){
                $('.search-input').focus();
            }
            else{
                var userInput = $('.search-input').val();
                $('#gif-search-btn').text(userInput);
                $.ajax({
                    url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${userInput}&limit=30`,
                    success: function(){$('.new-img').remove();}
                }).done(function(res){
                    var gifs = res.data; 
                    if(gifs.length == ""){
                        $('#gif-items-btn').text(0);
                        $('.search-input').val('');
                    } 
                    else{
                        $.each(gifs, function(i, e){
                        var img = e.images.fixed_height_small.url;
                        $('.insert-gifs').append(`<img src="${img}" class="new-img" alt="a gif"/>`);
                        $('.search-input').val('');
                        $('#gif-items-btn').text(gifs.length);
                        })
                    }
                    if($('#gif-items-btn').text() >= 20){
                        $('footer').css('position', 'sticky');
                    }
                    else if($('#gif-items-btn').text() < 20){
                        $('footer').css('position', 'absolute');
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
            $('.new-img').remove(); 
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
                    $('.insert-gifs').append(`<img src="${img}" class="new-img" alt="a gif"/>`);
                    $('.mobile-input').val('');
                    $('#gif-items-btn').text(gifs.length);
                    })
                }
                if($('#gif-items-btn').text() >= 2){
                    $('footer').css('position', 'sticky');
                }
                else if($('#gif-items-btn').text() <= 1){
                    $('footer').css('position', 'absolute');
                }     
            }) 
        }
    })
})