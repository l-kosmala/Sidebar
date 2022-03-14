const btnOpen = document.querySelector('.sidebar__toggle');
const btnClose = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

btnOpen.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

btnClose.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});