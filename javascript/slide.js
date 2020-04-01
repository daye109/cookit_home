$(document).ready(function() {
  let num = 0;
  let figure;
  let length = $(".slide").length;

  function slideNext() {
    slidePosition("-100%", num + 1, "100%");
    num++;
    num = num % length;
    slideNumber(num, ".slide_number");
  }

  function slidePrev() {
    slidePosition("100%", num - 1, "-100%");
    num--;
    if (num < 0) {
      num = (num % length) + length;
    }
    num = num % length;
    slideNumber(num, ".slide_number");
  }

  function slidePosition(num1, num2, num3) {
    $(".slide")
      .eq(num)
      .animate(
        {
          left: num1
        },
        700
      );

    figure = num2;
    if (figure === length) {
      figure = 0;
    }

    $(".slide")
      .eq(figure)
      .css({
        left: num3
      })
      .animate(
        {
          left: "0"
        },
        700
      );
  }

  function slideNumber(num, contentsClass) {
    if (num === 1) {
      $(contentsClass).text("2/5");
    } else if (num === 2) {
      $(contentsClass).text("3/5");
    } else if (num === 3) {
      $(contentsClass).text("4/5");
    } else if (num === 4) {
      $(contentsClass).text("5/5");
    } else if (num === 0) {
      $(contentsClass).text("1/5");
    }
  }

  function btn(buttonPrevent) {
    $(buttonPrevent).css({ "pointer-events": "none" });

    setTimeout(function() {
      $(buttonPrevent).css({ "pointer-events": "auto" });
    }, 1000);
  }

  $(document).on("click", ".next_btn", function() {
    slideNext();
    btn(".slide_btn i");
  });

  $(document).on("click", ".prev_btn", function() {
    slidePrev();
    btn(".slide_btn i");
  });

  // banner

  let bannerNum = 0;
  let bannerNext;
  let bannerLength = $(".banner").length;

  function bannerSlide() {
    $(".banner")
      .eq(bannerNum)
      .animate(
        {
          left: "-100%"
        },
        1000
      );

    bannerNext = bannerNum + 1;
    if (bannerNext === bannerLength) {
      bannerNext = 0;
    }

    $(".banner")
      .eq(bannerNext)
      .css({ left: "100%" })
      .animate({ left: "0" }, 1000);

    bannerNum++;
    bannerNum = bannerNum % bannerLength;
  }

  setInterval(function() {
    bannerSlide();
  }, 4000);

  // review

  let reviewNum = 0;
  let reviewCount;
  let reviewTextLength = $(".reviews_review").length;

  function reviewFadeRight() {
    reviewFade(reviewNum + 1);
    reviewNum++;
    reviewNum = reviewNum % reviewTextLength;
    slideNumber(reviewNum, ".review_number");
  }

  function reviewFadeLeft() {
    reviewFade(reviewNum - 1);
    reviewNum--;
    if (reviewNum < 0) {
      reviewNum = (reviewNum % reviewTextLength) + reviewTextLength;
    }
    reviewNum = reviewNum % reviewTextLength;
    slideNumber(reviewNum, ".review_number");
  }

  function reviewFade(figure) {
    $(".reviews_review")
      .eq(reviewNum)
      .animate(
        {
          opacity: 0
        },
        700
      );

    reviewCount = figure;

    if (reviewCount === reviewTextLength) {
      reviewCount = 0;
    }

    $(".reviews_review")
      .eq(reviewCount)
      .css({ opacity: 0 })
      .animate({ opacity: 1 }, 700);
  }
  let test = 0;
  let test0, test2, test3;

  let reviewImgLength = $(".review_img").length;

  function reviewSlideRight() {
    $(".review_img")
      .eq(test)
      .animate(
        {
          left: "-100%"
        },
        1000
      );

    test2 = test + 1;
    if (test2 === reviewImgLength) {
      test2 = 0;
    }

    $(".review_img")
      .eq(test2)
      .css({
        left: "75%"
      })
      .animate({ left: "0" }, 1000);

    test3 = test2 + 1;
    if (test3 === reviewImgLength) {
      test3 = 0;
    }

    $(".review_img")
      .eq(test3)
      .css({
        left: "150%"
      })
      .animate({ left: "75%" }, 1000);

    test++;
    test = test % reviewImgLength;
  }

  function reviewSlideLeft() {
    test0 = test + 1;
    if (test0 === reviewImgLength) {
      test0 = 0;
    }
    $(".review_img")
      .eq(test0)
      .animate(
        {
          left: "100%"
        },
        500
      );

    $(".review_img")
      .eq(test)
      .animate(
        {
          left: "75%"
        },
        1000
      );

    test2 = test - 1;
    if (test2 === reviewImgLength) {
      test2 = 0;
    }

    $(".review_img")
      .eq(test2)
      .css({
        left: "-100%"
      })
      .animate({ left: "0" }, 1000);

    test--;
    test = test % reviewImgLength;
  }

  $(document).on("click", ".review_btn_r", function() {
    reviewFadeRight();
    reviewSlideRight();
    btn(".reviews_number i");
  });

  $(document).on("click", ".review_btn_l", function() {
    reviewFadeLeft();
    reviewSlideLeft();
    btn(".reviews_number i");
  });
});
