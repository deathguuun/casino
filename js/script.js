// Accordion
$(".question__title").on("click", function () {
   if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
         .siblings(".question__content")
         .slideUp(200);
      $(this).find(".question__icon")
         .removeClass("clicked")
   } else {
      $(this).find(".question__icon")
         .removeClass("clicked")
      $(this)
         .find(".question__icon")
         .addClass("clicked");
      // $(".set > a").removeClass("active");
      $(this).addClass("active");
      // $(".content").slideUp(200);
      $(this)
         .siblings(".question__content")
         .slideDown(200);
   }
});

