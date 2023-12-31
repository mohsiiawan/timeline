var sections = document.querySelectorAll('#section');
var windowHeight = window.innerHeight;
var scrollThreshold = 50;// This is basically the vertical positon in percentage where you want to active timeline section
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
}

// Function to handle the window resize event
function handleResize() {
    windowHeight = window.innerHeight;
    handleScroll();
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
window.addEventListener('resize', handleResize);