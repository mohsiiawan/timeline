var maincontainer = document.querySelector('.container');
var progressbar = document.getElementById('progress');
var sections = document.querySelectorAll('#section');
var windowHeight = window.innerHeight;
var scrollThreshold = 50;
function handleScroll() {
    for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        var topPercentage = (rect.y / windowHeight) * 100;

        if (topPercentage <= scrollThreshold) {
            sections[i].classList.add('active');
        } else {
            sections[i].classList.remove('active');
        }
    }
}a

// Function to handle the window resize event
function handleResize() {
    windowHeight = window.innerHeight;
    handleScroll();
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
window.addEventListener('resize', handleResize);

