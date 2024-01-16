document.addEventListener('DOMContentLoaded', function () {
    const navElement = document.querySelector('nav');
    const navbarToggle = document.querySelector('.navbar-toggler');

    // set anchor offset
    const navHeight = navElement.offsetHeight;
    document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + "px");

    // set transparent navbar if window is on the top
    window.addEventListener('scroll', () => {
        const isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        var scrollPosition = window.scrollY;

        if (!isNavbarExpanded && scrollPosition === 0) { // make sure navbar is not expanded
            navElement.style.setProperty('background-color', 'transparent');
        } else {
            navElement.style.backgroundColor = 'rgba(33, 37, 41)';
        }
        navElement.style.setProperty('transition', '0.5s');
    });

    // handle navbar toggle button click
    navbarToggle.addEventListener('click', () => {
        // Check if the navbar is expanded or collapsed
        const isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

        // Set the background color based on the navbar state
        if (isNavbarExpanded) {
            navElement.style.backgroundColor = 'rgba(33, 37, 41, 0.95)'; // Change to desired color
        } else {
            // Set to transparent or any other color when the navbar is collapsed
            // const scrollPosition = window.scrollY;
            // navElement.style.setProperty('background-color', scrollPosition === 0 ? 'transparent' : '#212529');
        }
    });

    // Listen for mouseleave event on the navbar
    navElement.addEventListener('mouseleave', () => {
        // simulateClick(navbarToggle);
        // Collapse the navbar when the mouse leaves the expanded area
        // navbarToggle.setAttribute('aria-expanded', 'false');
        // Change the background color based on the value of aria-expanded
        // updateNavbarBackgroundColor();
    });

    function simulateClick(element) {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }


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

            // 启用滚动事件监听器，延迟 500 毫秒以防止滚动事件立即触发
            setTimeout(function () {
                isScrollingDisabled = false;
            }, 800);
        });
    });

    // 添加滚动事件监听器
    window.addEventListener('scroll', function () {
        if (!isScrollingDisabled) {
            var currentScroll = window.scrollY;

            sections.forEach(function (section, index) {
                var sectionTop = section.offsetTop - 300; // 考虑到导航栏的高度
                var sectionBottom = sectionTop + section.offsetHeight;

                if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                    // 设置当前可见的部分对应的导航链接为 'active'
                    navLinks.forEach(function (innerLink) {
                        innerLink.classList.remove('active');
                    });

                    navLinks[index].classList.add('active');
                }
            });
        }
    });
})