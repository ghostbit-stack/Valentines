$(document).ready(function () {
    var buttonsShown = false;

    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
        if (!buttonsShown) {
            $('.buttons').show();
            buttonsShown = true;
        }
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    $('#no-btn').click(function() {
        // Move to random position anywhere on screen within 1080x1080 grid
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        
        var buttonWidth = $(this).outerWidth();
        var buttonHeight = $(this).outerHeight();
        
        var maxX = Math.min(600, viewportWidth - 20) - buttonWidth;
        var maxY = Math.min(600, viewportHeight - 20) - buttonHeight;
        
        var randomX = 20 + Math.random() * Math.max(0, maxX - 20);
        var randomY = 20 + Math.random() * Math.max(0, maxY - 20);
        
        $(this).css({
            position: 'fixed',
            left: randomX + 'px',
            top: randomY + 'px',
            zIndex: 1000
        });
    });

    $('#yes-btn').click(function() {
        // Lead to something - show a message
        alert("Yay! Happy Valentine's Day! ❤️");
        // Or redirect: window.location.href = 'another-page.html';
    });
});


