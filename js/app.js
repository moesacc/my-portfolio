
// navbar animation when home page is scrolled
window.addEventListener('scroll', function() {
    if(this.scrollY < $('#home').height()) {
        $('#navbar-section').css({
            'position': 'relative',
            'animation': 'none',
        });
    }else if(this.scrollY >= $('#home').height()) {
        $('#navbar-section').css({
            'position': 'sticky',
            'top': 0,
            'animation': 'Navbar .5s ease-in'
        });
    }
   
});


const icon_btn = document.querySelector('.icon-btn');
function animatedButton () {
    if(icon_btn.classList.contains('icon-btn-active'))
    {
        icon_btn.classList.remove('icon-btn-active');
    }else {
        icon_btn.classList.add('icon-btn-active');
    }
}
icon_btn.onclick = animatedButton;


// Theme Changing
$(document).ready(function() {
    
    let bol = true;

    $('.switch').click(function() {
        // console.log('hello')

        $('.theme').toggleClass('bg-dark text-light');
        $('hr').toggleClass('hr-dark');
        $('nav').toggleClass('navbar-dark');
        $('.hobby').toggleClass('section-dark');
        $('.skills').toggleClass('section-dark');
        $('.about-img-container').toggleClass('section-dark');
        // $('.see-more').toggleClass('bg-dark');
        $('.content').toggleClass('text-white-50');
        $('.content').toggleClass('text-black-50');
        
        if(bol) {
            bol = false;
            $('.switch img').attr('src', 'photos/sun.svg');
        }else {
            bol = true;
            $('.switch img').attr('src', 'photos/moon-white.svg');
        }

    })

})