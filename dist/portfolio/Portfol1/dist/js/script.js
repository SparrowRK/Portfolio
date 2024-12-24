
new WOW().init();

//  удобный скролл и вверх
$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});



// логин
const login = document.querySelector('.header-btn'),
    logwin = document.querySelector('.loginwindow'),
    logclose = document.querySelector('.loginwindow-close'),
    logcloseAll = document.querySelector('.loginwindow-overlay');

login.addEventListener('click', () => {
    logwin.classList.add('active');
});

logclose.addEventListener('click', () => {
    logwin.classList.remove('active');
});

logcloseAll.addEventListener('click', () => {
    logwin.classList.remove('active');
});
