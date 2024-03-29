/*JQuery*/
$(document).ready(function(){
    $('#scroll-button').click(function(){
        window.scroll({top: 1000, duration: 4000, behavior: 'smooth'});
    });
});
/*Main Page*/
ScrollReveal().reveal('#scroll-button', { duration: 3000, distance: '40px', origin: 'top', });
ScrollReveal().reveal('#gallery', { duration: 2000, distance: '200px', origin: 'left'});
ScrollReveal().reveal('#about', { duration: 2000, delay:500,distance: '200px', origin: 'right'});

/*About*/
ScrollReveal().reveal('#slide-in', {duration: 2000, distance:'90px', origin:'right'})
ScrollReveal().reveal('#slide-in2', {duration: 2000, delay:500, distance:'90px', origin:'right'});

/*Product Pages*/
$(document).ready(function(){
    ScrollReveal().reveal('.project-info-images', {duration: 1500, distance: '50px', origin:'bottom'})
    ScrollReveal().reveal('.tableproductsplash', {duration: 1500, distance: '150px', origin:'top'})
    ScrollReveal().reveal('.slateproductsplash', {duration: 1500, distance: '150px', origin:'top'})
    ScrollReveal().reveal('.airbnbproductsplash', {duration: 1500, distance: '150px', origin:'top'})
});
