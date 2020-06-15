(() => {

   const selectToggle = function () {
 
      this.closest('.select').classList.toggle('is-active');
   }

   const selectChoose = function () {
      const text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
   }


   let selectCurrent = document.querySelector('.select__current');
   let selectItem = document.querySelectorAll('.select__item');

   selectCurrent.addEventListener('click', selectToggle);

   selectItem.forEach(item => {
       item.addEventListener('click', selectChoose)
   });

})()