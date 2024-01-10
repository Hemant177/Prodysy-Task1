window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceY > 50) {
        navbar.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Revert back to original color
    }
});

var menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.style.color = '#ffcc00'; // Change font color on hover
    });

    item.addEventListener('mouseleave', function() {
        this.style.color = '#fff'; // Revert back to original color on mouse leave
    });
});