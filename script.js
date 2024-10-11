$(document).ready(function() {
   =
    // Trunk showcase page
    $('.trunk-container').on('mouseenter', function() {
        $(this).find('.trunk-description').css('transform', 'translateY(0)');
    }).on('mouseleave', function() {
        $(this).find('.trunk-description').css('transform', 'translateY(100%)');
    });


});