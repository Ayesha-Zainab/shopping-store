document.addEventListener("DOMContentLoaded", function () {
    marketingSection = document.getElementById("marketing");
    cards = document.querySelectorAll(".flex>.card");

    marketingSection.addEventListener("click", function () {
        // Toggle visibility of cards
        cards.forEach((card, index) => {
            if (index < 2) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// ---------------------------------All---------------------


document.addEventListener('DOMContentLoaded', function () {
    var All = document.getElementById('all');
    var cards = document.querySelectorAll(".flex>.card");

    All.addEventListener('click', function () {
        cards.forEach(function (card) {
            card.style.display = 'block';
        });
    });
});



// ----------------------------Design----------------


document.addEventListener('DOMContentLoaded', function () {
    var design = document.getElementById('design');
    var cards = document.querySelectorAll(".flex > .card");

    design.addEventListener('click', function () {
        cards.forEach(function (card, index) {
            if (index === 2 || index === 3) { 
                card.style.order = index - 2;
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// ---------------------development-----------

document.addEventListener('DOMContentLoaded', function () {
    var development = document.getElementById('development');
    var cards = document.querySelectorAll(".flex> .card");

    development.addEventListener('click', function () {
        cards.forEach(function (card, index) {
            if (index === 4 || index === 5) { 
                card.style.order = index - 4;
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});












