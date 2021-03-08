// Accordion
$(".question__title").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).siblings(".question__content").slideUp(200);
    $(this).find(".question__icon").removeClass("clicked");
  } else {
    $(this).find(".question__icon").removeClass("clicked");
    $(this).find(".question__icon").addClass("clicked");
    // $(".set > a").removeClass("active");
    $(this).addClass("active");
    // $(".content").slideUp(200);
    $(this).siblings(".question__content").slideDown(200);
  }
});

const endDate = new Date("Jun 29, 2022 12:00:00").getTime();

const timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("timer-days").innerHTML =
      days + "<span class='label'>d</span>";
    document.getElementById("timer-hours").innerHTML =
      ("0" + hours).slice(-2) + "<span class='label'>h</span>";
    document.getElementById("timer-mins").innerHTML =
      ("0" + mins).slice(-2) + "<span class='label'>m</span>";
    document.getElementById("timer-secs").innerHTML =
      ("0" + secs).slice(-2) + "<span class='label'>s</span>";
  } else {
    document.getElementById("timer").innerHTML = "The countdown is over!";
  }
}, 1000);
