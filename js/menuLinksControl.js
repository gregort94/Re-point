(() => {


   const addActiveLinkListener = (linksClass) => {
      const menuLinks = document.querySelectorAll(linksClass);

      const setActiveLink = function() {
         menuLinks.forEach(link => {
            link.classList.remove('activeLink')
         });
         this.classList.add('activeLink');
      }

      menuLinks.forEach(link => {
         link.addEventListener('click', setActiveLink);
      });

   }  

   addActiveLinkListener('.menu__link');
   addActiveLinkListener('.page__menu-link');


})()