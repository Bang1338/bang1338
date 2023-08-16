// ccc.js, by bang1338

// Hide main content initially
$('#maincontent').hide();

audio.play();
// Show main content
$('#maincontent').show();
// Fade in releases and tables one by one
$('.releasedate').each(function (i) {
        $(this).delay(i * 500).fadeIn();
        $(this).next('table').delay(i * 500).fadeIn();
});
