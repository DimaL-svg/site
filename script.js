document.querySelector('.burger_menu').addEventListener('click', function() {
    this.classList.toggle('active');
document.querySelector('.header_navigation_menu').classList.toggle('open');
document.querySelector('.header_navigation_menu_list').classList.toggle('open');
document.querySelector('body').classList.toggle('lock')
});
