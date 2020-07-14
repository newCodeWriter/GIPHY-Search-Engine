$(function(){
    function aangGifs(){   
        var input = 'aang avatar';
        $('.search-btn').focus();
        $('#gif-search-btn').text(input);
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${input}&limit=30`
        }).done(function(res){
            var gifs = res.data;  
            $.each(gifs, function(i, e){
                var img = e.images.original.url;
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
            $('.mobile-search').show();
        }
        else if($(window).width() > 571){
            $('.search-input').show();
        }
    })

   $(window).resize(function(){
        if($(this).width() > 571){
            $('.mobile-search').hide();
        }
        else if($(this).width() < 571){
            $('.search-input').hide();
        }
    })

    $('body').delegate('.search-it > .search-btn', 'click', function(){
        if($(this).siblings().val() == ''){
            $('.search-it > input').focus();
        }
        else{
            var userInput = $(this).siblings().val();
            $('#gif-search-btn').text(userInput);
            //remove gifs from previous search
            $('.source-link').remove(); 
            $.ajax({
                url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${userInput}&limit=30`
            }).done(function(res){
                var gifs = res.data;  
                if(gifs.length == ""){
                    $('#gif-items-btn').text(0);
                }
                else{
                    $.each(gifs, function(i, e){
                        var img = e.images.original.url;
                        //add source so that user can click on gif and be directed to the source of the gif in a new tab
                        var source = e.source; 
                        $('.insert-gifs').append(`<a href="${source}" target="_blank" class="source-link"><img src="${img}" class="new-img" alt="a gif"/></a>`);
                        $('#gif-items-btn').text(gifs.length);
                    })
                }   
            }) 
            $(this).siblings().val('');
        }
    })
    //Remove href attribute for gifs with no source
    $('.insert-gifs').delegate("a[href='']", "mouseover mouseenter", function(){
        $(".insert-gifs > a[href='']").removeAttr('href');
    })
})