console.log('Running!');

// add portfolio images
$.getJSON( "scripts/portfolio.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<a href='images/portfolio/" + key + "_l.jpg'><img alt='" + val + "' src='images/portfolio/" + key + "_s.jpg' /></a>" );
  });
  var portfolioItems = items.join( "" );
  $(portfolioItems).appendTo( "#portfolio" );
});

// one page scroll
$(document).ready(function(){
    $(".main").onepage_scroll({
        sectionContainer: "section"
    });
});
// Tooltips
$(function() {
    // mouse-on logo
    var mouseOnDiv = $('#logo');
    var tipContent = $(
        '<p>Scroll Down!</p>'
    );
    mouseOnDiv.data('powertipjq', tipContent);
    mouseOnDiv.powerTip({
        placement: 's',
        mouseOnToPopup: true
    });

    // mouse-on who i've worked with
    var mouseOnDiv = $('#workedwith');
    var tipContent = $(
        '<p>I have had the chance to work with a lot of different people</p>' +
        '<p></p>'
    );
    mouseOnDiv.data('powertipjq', tipContent);
    mouseOnDiv.powerTip({
        placement: 'e',
        mouseOnToPopup: true
    });
});
$( document ).ready(function() {
    console.log( "ready!" );
// portfolio gallery 
$("#portfolio").justifiedGallery({ 
    // 'justifyLastRow':false, 
    // 'rowHeight':70, 
    // 'rel':'gallery2', //replace the rel of all the links with the value 'gallery2'
    'margins':1,
    'sizeRangeSuffixes' : {
        'lt100':'_s', 
        'lt240':'_s', 
        'lt320':'_m', 
        'lt500':'_m', 
        'lt640':'_l', 
        'lt1024':'_l'
    },
    'onComplete': function() { //callback function
        $('#portfolio .portfolio-item a').each( function() { $(this).hoverdir(); } );     
    }
});
});
// $( window ).resize(function() {
    // console.log('Resized!');
    // $('#portfolio .portfolio-item a').each( function() { $(this).hoverdir(); } ); 
// });

