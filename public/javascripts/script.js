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
    var $sectionWrapper = $('<div class="section-wrapper"></div>');
    var $close = $('<i id="close" class="fa fa-times" aria-hidden="true"></i>');

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

    $section = $('<div class="section"></div>');
    $policy = $("<strong>Cancellation Policy</strong>"
                + "<p>We understand that unanticipated events happen occasionally in everyone’s life. In our desire to be effective and fair to all clients, the following policies are honored:</p>"
                + "<p>24 hour advance notice is required when cancelling an appointment. This allows the opportunity for someone else to schedule an appointment. If you are unable to give us 24 hours advance notice you will be charged the full amount of your appointment. This amount must be paid prior to your next scheduled appointment.</p>"
                + "<strong>No-shows</strong>"
                + "<p>Anyone who either forgets or consciously chooses to forgo their appointment for whatever reason will be considered a “no-show.” They will be charged for their “missed” appointment.</p>"
                + "<strong>Late Arrivals</strong>"
                + "<p>If you arrive late, your session may be shortened in order to accommodate others whose appointments follow yours. Depending upon how late you arrive, your therapist will then determine if there is enough time remaining to start a treatment. Regardless of the length of the treatment actually given, <strong>you will be responsible for the “full” session</strong>. Out of respect and consideration to your therapist and other customers, please plan accordingly and be on time.</p>"
                + "<strong>We look forward to serving you!</strong>"
                );

    $('#legal').on('click', function(){
        $section.empty();
        $section.append($policy).append($close);
        $sectionWrapper.append($section);
        $overlay.append($sectionWrapper);
        $overlay.css('min-height',"100%");
        $overlay.fadeIn("fast");
    });

    $(document).on('click','#close', function(){
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



function servicePage(){
$('.services li').on('click', function(){
    $('.services li .benefits').each(function(){
        if($(this).css('display') == 'block'){
            $(this).prev().find('.fa').toggleClass('down');
            $(this).slideToggle("slow","linear");
    }
});
    $arrow = $(this).find('.fa');
    $info = $(this).find('.benefits');

    if($info.css('display')== 'block'){
        $arrow.removeClass('down');
        $info.slideUp("slow","linear");
    }else{
        setTimeout(function(){
            $arrow.toggleClass('down');
            $info.slideToggle("slow","linear");
        }, 600);
    }
});
    
}

servicePage();


