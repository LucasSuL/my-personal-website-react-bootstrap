document.addEventListener('DOMContentLoaded', function () {
    const navElement = document.querySelector('nav');

    // set anchor offset
    const navHeight = navElement.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + "px");

    // set transparent navbar if window is on the top
    window.addEventListener('scroll', () => {
        var scrollPosition = window.scrollY;
        if (scrollPosition === 0) {
            navElement.style.setProperty('background-color', 'transparent');
        } else {
            navElement.style.setProperty('background-color', '#212529');
        }
        navElement.style.setProperty('transition', '0.5s');
    });

    // add click event listener to each nav link
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var sections = document.querySelectorAll('section');

    /*
        // If do not need scroll function, simply use the following part and comment out the last part.

        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.forEach(function (innerLink) {
                    innerLink.classList.remove('active');
                    innerLink.setAttribute("aria-current", null); 
                });

                link.classList.add('active');
                link.setAttribute("aria-current", "page");
            });
        });
    */


    // function for scroll navbar indicator
    window.addEventListener('scroll', function () {
        const scrollOffset = 300;
        var currentScroll = window.scrollY;

        sections.forEach(function (section, index) {
            var sectionTop = section.offsetTop - scrollOffset;   // make offest
            var sectionBottom = sectionTop + section.offsetHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    link.setAttribute("aria-current", null);
                });

                navLinks[index].classList.add('active');
                navLinks[index].setAttribute("aria-current", "page");
            }
        });
    });

    // to-do
})