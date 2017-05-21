window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY == 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 0.875rem 1.75rem rgba(0,0,0,0.25), 0 0.625rem 0.625rem rgba(0,0,0,0.22)';
    }
});