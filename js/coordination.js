(() => {


   const openCoord = () => {
      coordination.classList.add('open');
   } 

   const closeCoord = () => {
      coordination.classList.remove('open');
   }

   const openCoordBtn = document.querySelector('#openCoord');
   const coordination = document.querySelector('.coordination');
   const closeCoordBtn = coordination.querySelector('.coordination__close');
   const coordOverlay = coordination.querySelector('.coordination__overlay');

   openCoordBtn.addEventListener('click', openCoord);
   closeCoordBtn.addEventListener('click', closeCoord);
   coordOverlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('coordination__overlay')){
         closeCoord()
      }
   });
   

})()