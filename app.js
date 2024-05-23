document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');
    const btn = document.querySelector('.burger-icon');
    const iconClose = document.querySelector('.fa-x');
    const iconOpen = document.querySelector('.fa-bars');
    const menuItems = document.querySelectorAll('.menu ul li a');

    function toggleMenu() {
        menu.classList.toggle("active");
        iconClose.classList.toggle("toggleIcon_close");
        iconOpen.classList.toggle("toggleIcon_open");
    }

    btn.addEventListener("click", toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener("click", toggleMenu);
    });
});
