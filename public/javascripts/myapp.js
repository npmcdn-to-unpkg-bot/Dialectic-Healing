$(document).ready(function(){
    runSlider();

    $('.nav').slicknav({
        label: '',
        prependTo: '#navigation',
        
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
    runSlider();
});

function initMap(){

        var coordinates = [39.730187, -104.982676];
		var latLng = new google.maps.LatLng(coordinates[0], coordinates[1]);
		var mapOptions = {
        zoom: 13, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng,
        styles:[{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}],
        scrollwheel:  false
    	};
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv,mapOptions);

		
		
		marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP, 
        icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'   
    });
}

function runSlider(){
    var $carousel = $('.slick-container');

    if($(window).width() > 650){
        if(!$carousel.hasClass('slick-initialized')) {
            $carousel.slick({
            infinite:true,
            arrows:false,
            dots:true,
            slidesToShow:1,
            autoPlay:true,
            autoPlaySpeed:4000,
            speed:1000
            });
        }
        
    }else{
         $carousel.slick("unslick");
    }
}