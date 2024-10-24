document.addEventListener("DOMContentLoaded", function() {
    const magazine = $('#magazine');

    function initializeMagazine() {
        magazine.turn({
            minHeight: 600,
            autoCenter: true,
            display: 'single', 
        });
    }

    initializeMagazine();

    window.addEventListener('resize', function() {
        magazine.turn('resize'); 
        initializeMagazine(); 
    });

    const nextPageButton = document.getElementById('next-page');
    const prevPageButton = document.getElementById('prev-page');

    nextPageButton.addEventListener('click', function() {
        console.log(magazine.turn('pages')); // Isso mostrará quantas páginas estão atualmente no objeto magazine

        magazine.turn("next");
    });

    prevPageButton.addEventListener('click', function() {
        magazine.turn("previous");
    });
});
