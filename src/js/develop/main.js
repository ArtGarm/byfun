$(document).ready(function(){

    $("select").select2();

    $('.search-part input').on('keyup', function(){
        var curr = ($(this).val()).toLowerCase();
        $('.list-user .item').each(function(){
            if ( !$(this).hasClass('empty')  ){
                var texter = ($(this).find('.name').html() ).toLowerCase();
                var flag = texter.includes( curr );

                if ( flag ){
                    $(this).slideDown(100).addClass('act').removeClass('hid');
                } else {
                    $(this).slideUp(100).addClass('hid').removeClass('act');
                }
            }
        });

        if ( $('.list-user .item.act').length < 1 ){

            $('.list-user .item.empty').slideDown(100);

        } else {
            $('.list-user .item.empty').slideUp(100);
        }

    });

    $('.chat-but').on('click', function(e){
        e.preventDefault();
        $('.list-chats').addClass('active');
        $(this).addClass('hide');
    });

    $(document).on('click touchstart',function (event){
        if (!$('.list-chats').is(event.target) && $('.list-chats').has(event.target).length === 0 && 
            !$('.chat-but').is(event.target) && $('.chat-but').has(event.target).length === 0)
        {
            $('.list-chats').removeClass('active');
            $('.chat-but').removeClass('hide');
        }
    });



    $('.catalog-sloder .list-items').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        slidesToScroll: 1
    });

    $('.shops-wrap .list-items').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        slidesToScroll: 1
    });


    $('.slider-vertical').slick({
        infinite: false,
        slidesToShow: 3,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        dots: false,
      //  centerMode: true,
      //  focusOnSelect: true,
        slidesToScroll: 1
    });


    $('.shops-wrap .tabs a').bind('click', function(e){
        e.preventDefault();

        if ( !$(this).closest('li').hasClass('active') ){
            $('.shops-wrap .tabs li.active').removeClass('active');
            $(this).closest('li').addClass('active')
        }
        var filter = $(this).attr('href');
        var key = "."+filter;        
        $('.shops-wrap .list-items').slick('slickUnfilter');
        $('.shops-wrap .list-items').slick('slickFilter',key).slick('refresh');
        //$('.shops-wrap .list-items').slick('slickGoTo', 0);
        
    });
        


    $('.single-part .list-colors li').on('click', function(e){
        e.preventDefault();
        if ( !$(this).hasClass('active') ){

            $('.single-part .list-colors li.active').removeClass('active');
            $(this).addClass('active');            

            $('.image-list li.active').hide( 1 , function(){
                $(this).removeClass('active');
            });

            $('.image-list li').eq( $(this).index() ).show( 1 , function(){
                $(this).addClass('active');
            });
        }   

    });


    if ( $('#threesixty').length ){
        var threesixty = new ThreeSixty(document.getElementById('threesixty'), {
            image: 'https://raw.githubusercontent.com/mladenilic/threesixty/master/images/example.jpg',
            width: 300,
            height: 380,
            count: 19,
            perRow: 4,
            speed: 100,
            draggable: false,
            swipeable: false
        });
        
        //threesixty.play();

        var keyboardSlider = document.getElementById('nouislider');

        noUiSlider.create(keyboardSlider, {
            start: 10,
            step: 1,
            range: {
                'min': 1,
                'max': 19
            }
        });
        keyboardSlider.noUiSlider.on('update', function( values, handle ) {

            threesixty.goTo( values );

        });

    }

    
});

$(window).on('load', function(){

});

$(window).resize(function(){

});