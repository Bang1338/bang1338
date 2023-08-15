// ccc.js, by bang1338

// Fade in bruh
$(document).ready(function() {

    // Hide main content initially
    $('#maincontent').hide();

    // Add click event to button
    $('#toggleButton').click(function() {
		
	audio.play();
        // Fade out button
        $(this).fadeOut();

        // Show main content
        $('#maincontent').show();

        // Fade in releases and tables one by one
        $('.releasedate').each(function(i) {
            $(this).delay(i * 500).fadeIn();
            $(this).next('table').delay(i * 500).fadeIn();
        });
        
        // Fade out banner after 70 seconds, lemme testing first 4 sec
        setTimeout(function() {
            $('#banner').fadeOut(2000, function() {
                // Replace banner image
                $('#banner img').attr('src', 'images/fear-factory.png');

                // Wipe in new banner from right to left
                $('#banner').css({
                    'width': '400px',
                    'overflow': 'hidden'
                });
                $('#banner img').css({
                    'position': 'absolute',
                    'left': '400px'
                });
                $('#banner').show();
                $('#banner img').animate({left: 0}, 2000);
            });
        }, 4000);
    });
});