document.addEventListener('DOMContentLoaded', function () {
    const navElement = document.querySelector('nav');
    if (navElement) {
        // set anchor offset
        const navHeight = navElement.offsetHeight;
        document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + "px");

        // set transparent navbar if on top
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            if (scrollPosition === 0) {
                navElement.style.setProperty('background-color', 'transparent', 'important');
                navElement.style.setProperty('transition', '0.3s', 'important');
            } else {
                navElement.style.backgroundColor = '#ffffff';
            }
        });

        
    }
})