// ccc.js, by bang1338

// Fade in bruh
$(document).ready(function () {

    // Hide main content initially
    $('#maincontent').hide();

	audio.play();
        // Fade out button
        $(this).fadeOut();

        // Show main content
        $('#maincontent').show();

        // Fade in releases and tables one by one
        $('.releasedate').each(function (i) {
            $(this).delay(i * 500).fadeIn();
            $(this).next('table').delay(i * 500).fadeIn();
        });

		/*
        // Fade out banner after 70 seconds, but lemme testing first 4 sec
		// This part is broken
        setTimeout(function () {
            $("#banner-1").fadeOut(2000, function () {
                // After banner-1 completely fade out, slide in from the right banner-2
                $("#banner-2").css("display", "");
                //$("#banner-2").css("position", "absolute");
                $("#banner-2").css("right", "-400px");
                $("#banner-2").animate({right: "0px"}, 2000);
            });
        }, 4000);
		*/
});
