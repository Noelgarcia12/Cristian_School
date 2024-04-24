document.getElementById('toggle-menu').addEventListener('click', function() {
    var menu = document.getElementById('main-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});
