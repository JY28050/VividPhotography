$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  //'this' keyword refers to window object (entire thing). scrollTop calculates position in pixels when we scroll down. You can console.log(position), inspect it and you will see the position in pixel numbers.
  //If position is greater or equal to 200 then we want to add the custom navbar class

  $(".gallery-list-item").click(function () {
    let value = $(this).attr("data-filter");
    if (value === "all") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + value)
        .hide(300);
      $(".filter")
        .filter("." + value)
        .show(300);
    }
  });

  $(".gallery-list-item").click(function () {
    $(this).addClass("active-item").siblings().removeClass("active-item");
  });

  //Show and hide methods takes in argument for duration, so put to 300 ms.

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 2100) {
      $(".card-1").addClass("moveFromLeft");
      $(".card-2").addClass("moveFromRight");
    } else {
      $(".card-1").removeClass("moveFromLeft");
      $(".card-2").removeClass("moveFromRight");
    }
    console.log(position);
  });

  //console.log(position) and scroll down to see the numbers, i think roughly 2300px is good spot that coincides with where the section starts / where I want the effect to trigger.
  //If the condition is true, we want to assign the cards the proper animation classes.
  //If the condition is false, meaning less than 2300px- then we need to remove those classes
});
