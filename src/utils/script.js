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
            navElement.style.setProperty('background-color', '#212529');
        }
        navElement.style.setProperty('transition', '0.5s');
    });

    // handle navbar toggle button click
    navbarToggle.addEventListener('click', () => {
        // Check if the navbar is expanded or collapsed
        const isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

        // Set the background color based on the navbar state
        if (isNavbarExpanded) {
            navElement.style.setProperty('background-color', '#212529'); // Change to desired color
        } else {
            // Set to transparent or any other color when the navbar is collapsed
            const scrollPosition = window.scrollY;
            navElement.style.setProperty('background-color', scrollPosition === 0 ? 'transparent' : '#212529');
        }
    });


    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var sections = document.querySelectorAll('section');
    var isScrollingDisabled = false;

    // 添加点击事件监听器
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // 点击导航链接时禁用滚动事件监听器
            isScrollingDisabled = true;

            // 移除所有导航链接的 'active' 类
            navLinks.forEach(function (innerLink) {
                innerLink.classList.remove('active');
            });

            // 添加 'active' 类到被点击的导航链接
            link.classList.add('active');

            // 获取被点击链接对应的部分的索引
            var sectionIndex = Array.from(navLinks).indexOf(link);

            // 滚动到对应的部分
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