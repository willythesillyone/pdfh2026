document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById('openBtn');
    const openScreen = document.getElementById('openScreen');
    const letterContent = document.getElementById('letterContent');
    const music = document.getElementById('bgMusic');

    openBtn.addEventListener('click', function() {
        // Hide the button screen
        openScreen.classList.add('hidden');

        // Show the letter content
        letterContent.classList.remove('hidden');

        // Unmute and play the MP3 file
        music.muted = false;
        music.play().catch(function(error) {
            console.log("Audio play failed. Browser might still be blocking it.", error);
        });
    });
});
