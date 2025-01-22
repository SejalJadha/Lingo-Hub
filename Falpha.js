// script.js (for pronunciation audio)
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const pronunciationButtons = document.querySelectorAll('.pronunciation-button');

    function playAudio(audioFile) {
        audioPlayer.src = audioFile;
        audioPlayer.play();
    }

    pronunciationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioFile = button.getAttribute('data-audio');
            playAudio(audioFile);
        });
    });
});