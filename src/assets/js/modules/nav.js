document.addEventListener('DOMContentLoaded', function () {
    const navElement = document.querySelector('nav');
    const navbarToggle = document.querySelector('.navbar-toggler');

    // set anchor offset
    const navHeight = navElement.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + "px");
    let isNavbarExpanded = false;

    // set transparent navbar if window is on the top
    window.addEventListener('scroll', () => {
        isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

        if (!isNavbarExpanded) {
            const scrollPosition = window.scrollY;
            navElement.style.setProperty('background-color', scrollPosition === 0 ? 'transparent' : '#212529');
        }
        navElement.style.setProperty('transition', '0.5s');
    });

    // handle navbar toggle button click
    navbarToggle.addEventListener('click', () => {
        isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        if (isNavbarExpanded) {
            navElement.style.setProperty('background-color', '#212529')
        } else {
            const scrollPosition = window.scrollY;
            navElement.style.setProperty('background-color', scrollPosition === 0 ? 'transparent' : '#212529');
        }
    });

    // Listen for mouseleave event on the navbar
    navElement.addEventListener('mouseleave', () => {
        isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        if (isNavbarExpanded) {
            simulateClick(navbarToggle);
            const scrollPosition = window.scrollY;
            navElement.style.setProperty('background-color', scrollPosition === 0 ? 'transparent' : '#212529');
        }
    });

    function simulateClick(element) {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }



    /*
    nav-link indicator
    */
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var sections = document.querySelectorAll('section');
    var isScrollingDisabled = false;

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            isScrollingDisabled = true;

            navLinks.forEach(function (innerLink) {
                innerLink.classList.remove('active');
            });

            link.classList.add('active');

            var sectionIndex = Array.from(navLinks).indexOf(link);

            // scroll to the corresponding part
            sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });

            setTimeout(function () {
                isScrollingDisabled = false;
            }, 800);
        });
    });

    window.addEventListener('scroll', function () {
        if (!isScrollingDisabled) {
            var currentScroll = window.scrollY;

            sections.forEach(function (section, index) {
                var sectionTop = section.offsetTop - 300;
                var sectionBottom = sectionTop + section.offsetHeight;

                if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                    navLinks.forEach(function (innerLink) {
                        innerLink.classList.remove('active');
                    });

                    navLinks[index].classList.add('active');
                }
            });
        }
    });
})