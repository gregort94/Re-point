(() => {

   const addConfirmClass = function () {
      const request = this.closest('.request');
      if (this.checked === true) {
         request.classList.add('request--confirmed');
      } else {
         request.classList.remove('request--confirmed');
      }
   }

   const requestCheckboxes = document.querySelectorAll('.request:not(.request--header) .checkbox__input');
  
   requestCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('input', addConfirmClass);
   })
   
})()