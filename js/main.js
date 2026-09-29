/**
 * UZURI PROD — LOGIQUE JAVASCRIPT VANILLA
 * Fonctionnalités ciblées :
 * - Bascule du menu mobile avec gestion de l'accessibilité (ARIA)
 * - Fermeture du menu au clic sur un lien ou en dehors
 * - Accessibilité clavier (touche Escape)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sélection des éléments de navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav-link');

  if (menuToggle && siteNav) {
    /**
     * Ouvre ou ferme le menu mobile
     */
    const toggleMenu = () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      menuToggle.setAttribute('aria-expanded', String(newState));
      menuToggle.classList.toggle('is-active', newState);
      siteNav.classList.toggle('is-open', newState);

      // Empêche le défilement du corps de page lorsque le menu est ouvert sur mobile
      document.body.style.overflow = newState ? 'hidden' : '';
    };

    /**
     * Ferme explicitement le menu mobile
     */
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('is-active');
      siteNav.classList.remove('is-open');
      document.body.style.overflow = '';
    };

    // Événement clic sur le bouton burger
    menuToggle.addEventListener('click', toggleMenu);

    // Fermeture automatique lors du clic sur un lien de navigation
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Fermeture avec la touche Échap pour les utilisateurs au clavier
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Fermeture si on redimensionne l'écran vers une taille desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992 && siteNav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }
});
