$(window).resize(function(){
    displaySpan(); 
    setButtonHeight();
    setWindowHeight('#overlay');
    
});

$(document).ready(function(){
    setActivePage();
    displaySpan();
    faqPage();
    setButtonHeight();
    appendSymbols();
});

var $grid = $('.reviews').masonry({
    itemSelector: '.review',
    columnWidth: '.grid-size',
    percentPosition: true
});      


function setActivePage(){
    var currentUrl = location.href;
    $('.main-link').each(function(){
        var targetUrl = $(this).prop('href');
        
        if(targetUrl == currentUrl){
            $('.main-link').removeClass('active');
            $(this).parent('li').addClass('active')
        }else if(currentUrl.includes('faq#')){
            $('.main-link').removeClass('active');
            $('.dropdown').addClass('active');
        }
    });
}

function displaySpan(){
    if($(window).width() <= 650){
        $('.nav span').css({display:"none"});
        $('.nav li ul').each(function(){
            if($(this).hasClass('dropdown-menu')){
                $(this).removeClass('dropdown-menu');
            }
        });

    }else{
        $('.nav span').css({display:"inline-block"});
        $('.nav li ul').each(function(){
            $(this).addClass('dropdown-menu');
        });

    }
}


function setButtonHeight(){
     $buttonWidth = $('#massage').outerWidth();
     $('.faq-nav').each(function(){
        $(this).outerHeight($buttonWidth);
    });
}

function setWindowHeight($selector) {
    windowHeight = $(document).innerHeight();
    $($selector).css('min-height', windowHeight);
};

function setWindowWidth($selector){
    windowWidth = $(document).innerWidth();
    $($selector).css('min-width', windowWidth);
}

function faqPage(){
    $('.section').hide();
    
    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img id="img">');
    var $sectionWrapper = $('<div class="section-wrapper"></div>');
    var $close = $('<i class="fa fa-times" aria-hidden="true"></i>');

    $('body').append($overlay);

    $('.button-block button').each(function(){
        $(this).on('click',function(event){
            event.preventDefault();
            $section = $(this).siblings('.section').clone().addClass('clone').append($close);

            $overlay.append($sectionWrapper);
            $sectionWrapper.append($section.show());
            $overlay.fadeIn("fast");
            setWindowHeight('#overlay');
            
        });
    });

    $(document).on('click','.clone .fa-times', function(){
        $('.section-wrapper').empty();
        $overlay.fadeOut('fast');
        $('#overlay').css('min-height',0);
    });

}

function appendSymbols(){
    var $question = $('<i class="fa fa-question-circle-o" aria-hidden="true"></i>');  
    var $strong = $('.section strong');
                
    $strong.append(" ");
    $strong.append($question);
}


