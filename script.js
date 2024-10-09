$(document).ready(function() {
    // Home page
    $('#moreInfoBtn').on('click', function() {
        $('#eventDescription').toggle();
    });

    // Trunk showcase page
    $('.trunk-container').on('mouseenter', function() {
        $(this).find('.trunk-description').css('transform', 'translateY(0)');
    }).on('mouseleave', function() {
        $(this).find('.trunk-description').css('transform', 'translateY(100%)');
    });

    // Schedule page
    $('.event-heading').on('click', function() {
        $(this).next('.event-details').slideToggle();
    });
});