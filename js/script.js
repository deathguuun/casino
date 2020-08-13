let coll = document.getElementsByClassName('question__title');
for (let i = 0; i < coll.length; i++) {
   coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
         content.style.maxHeight = null;
      } else {
         content.style.maxHeight = content.scrollHeight + 'px'
      }
   })
}

$(".question__summary").click(function () {
   $(this).toggleClass("clicked");
});




/* jQuery
================================================== */
$(function () {
   $('.acc__title').click(function (this_element) {

      var dropDown = $(this).closest('.acc__card').find('.acc__panel');
      $(this).closest('.question__wrapper').find('.acc__panel').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
         $(this).removeClass('active');
      } else {
         $(this).closest('.question__wrapper').find('.question__title.active').removeClass('active');
         $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();
      this_element.preventDefault();
   });
});