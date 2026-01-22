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

    // Falling hearts and roses background animation
    function createFallingItem() {
        const item = document.createElement('div');
        const isHeart = Math.random() > 0.5; // 50% chance for heart or rose
        
        if (isHeart) {
            item.className = 'falling-heart';
            item.innerHTML = '❤️';
        } else {
            item.className = 'falling-rose';
            item.innerHTML = '🌹';
        }
        
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds
        item.style.fontSize = Math.random() * 20 + 10 + 'px'; // 10-30px
        document.body.appendChild(item);

        // Remove item after animation
        setTimeout(() => {
            if (item.parentNode) {
                item.parentNode.removeChild(item);
            }
        }, 5000);
    }

    // Create items every 300ms
    setInterval(createFallingItem, 300);

    const hour = new Date().getHours();
if (hour >= 19 || hour <= 5) {
  document.body.classList.add('night');
}

});


