// audio-viz.js
// by bang1338

window.onload = function() {
    // Get the AudioContext from Howler
    var audioContext = Howler.ctx;

    // Create an analyser node
    var analyser = audioContext.createAnalyser();

    // Check if Howler.masterGain is not null
    if (Howler && Howler.masterGain) {
        // Connect the Howler masterGain to the analyser
        Howler.masterGain.connect(analyser);
    } else {
        console.error('Howler.masterGain is null');
    }

    // Connect the analyser to the destination
    analyser.connect(audioContext.destination);

    // Set the FFT size
    analyser.fftSize = 32; // Change this to more or less as needed

    // Get the canvas we'll be using for drawing
    var canvas = document.getElementById("audio-viz");
    var ctx = canvas.getContext("2d");

    // Continuously loop and update the chart with frequency data.
    function renderFrame() {
        var freqData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqData);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < analyser.frequencyBinCount; i++) {
            var value = freqData[i];
            var percent = value / 384;
            var height = canvas.height * percent;
            var offset = canvas.height - height - 1;
            var barWidth = canvas.width / analyser.frequencyBinCount;
            ctx.fillStyle = 'white';
            ctx.fillRect(i * barWidth, offset, barWidth, height);
        }
        requestAnimationFrame(renderFrame);
    }

    // Start the rendering loop
    renderFrame();
}