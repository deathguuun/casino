// Accordion
$(".faq__title").on("click", function () {
   if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
         .siblings(".faq__content")
         .slideUp(200);
      $(this).find(".faq__icon")
         .removeClass("clicked")
   } else {
      $(this).find(".faq__icon")
         .removeClass("clicked")
      $(this)
         .find(".faq__icon")
         .addClass("clicked");
      // $(".set > a").removeClass("active");
      $(this).addClass("active");
      // $(".content").slideUp(200);
      $(this)
         .siblings(".faq__content")
         .slideDown(200);
   }
});

