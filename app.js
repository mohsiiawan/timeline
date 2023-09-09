var sections = document.querySelectorAll('#section');
var windowHeight = window.innerHeight;
var scrollThreshold = 40; // 30% threshold for activating sections

window.addEventListener('scroll', () => {
    for (var i = 0; i < sections.length; ++i) {
        var rect = sections[i].getBoundingClientRect();
        var topPercentage = (rect.y / windowHeight) * 100;

        if (topPercentage <= scrollThreshold) {
            sections[i].classList.add('active');
        } else {
            sections[i].classList.remove('active');
        }
    }
});

// Optional: Add an initial check for sections that are already in the top 30%
window.addEventListener('load', () => {
    for (var i = 0; i < sections.length; ++i) {
        var rect = sections[i].getBoundingClientRect();
        var topPercentage = (rect.y / windowHeight) * 100;

        if (topPercentage <= scrollThreshold) {
            sections[i].classList.add('active');
        }
    }
});
