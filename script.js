// Initialisation du slider avec Slick
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Durée entre chaque diapositive en millisecondes (ici 2 secondes)
        dots: true, // Affiche les indicateurs de pagination
        arrows: false // Affiche les flèches de navigation
        // Ajoutez d'autres options selon vos besoins
    });
});

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
};

$('.slider img').click(function(e) {
    e.stopPropagation(); // Empêcher la propagation des événements de clic
});

 //Gestion des clics sur les éléments du menu parent
$('nav ul > li').click(function(e) {

    // Ferme toutes les autres modales sauf celle qui est liée à l'élément cliqué
    $('nav ul > li').not($(this)).find('.modal').hide();

    // Récupère la position de l'élément cliqué
    var position = $(this).position();

    // Affiche la modale liée à l'élément cliqué juste au-dessus de celui-ci
    $(this).find('.modal').css({
        top: position.top - $(this).find('.modal').outerHeight(), // Position verticale
        left: position.left // Position horizontale
    }).toggle();
});

// Gestion des clics sur les liens des sous-menus
$('.submenu li a').click(function(e) {
    e.preventDefault(); // Empêche le comportement de lien par défaut

    // Redirige vers l'URL du lien actif
    window.location.href = $(this).attr('href');
});


// Empêche la propagation des événements au clique des sous-menus sur les éléments parent
$('.modal').click(function(e) {
    e.stopPropagation(); 
});