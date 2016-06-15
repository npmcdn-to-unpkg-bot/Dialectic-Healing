$(document).ready(function(){
    setActivePage();
    displaySpan();

    $('.nav').slicknav({
        label: '',
        prependTo: '#navigation'
    });

    $('.animsition').animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1200,
        outDuration: 500,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
        });    
});

$(window).resize(function(){
    displaySpan(); 
})

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