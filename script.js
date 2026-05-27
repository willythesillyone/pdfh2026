document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById('openBtn');
    const openScreen = document.getElementById('openScreen');
    const letterContent = document.getElementById('letterContent');
    const music = document.getElementById('bgMusic');

    openBtn.addEventListener('click', function() {
        openScreen.classList.add('hidden');
        letterContent.classList.remove('hidden');

        // Just play it directly, no muting/unmuting needed
        music.play().catch(function(error) {
            console.log("Audio play failed.", error);
        });
    });
});
