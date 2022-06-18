// Scroll Menu
var sections = $("section");
var navs = $(".scrollTop");
var nav_height = navs.outerHeight();

$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop();
  console.log(cur_pos);

  sections.each(function () {
    var top = $(this).offset().top - nav_height;
    var bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      navs.find("a").removeClass("activedd");
      sections.removeClass("activedd");

      $(this).addClass("activedd");

      navs.find('a[href="#' + $(this).attr("id") + '"]').addClass("activedd");
    }
  });
});

navs.find("a").on("click", function () {
  var $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top,
    },
    500
  );

  return false;
});

// Scroll
$(document).ready(function () {
  var showgotoTop = 300;
  $(window).scroll(function () {
    if ($(this).scrollTop() >= showgotoTop) {
      $("#backtop").fadeIn();
    } else {
      // $("#backtop").fadeOut();
    }
  });
  $("#backtop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
});
// HIDE SHOW
$(".btnModal").on("click", function () {
  $("#modal").fadeIn();
  $("#app").fadeOut();
});
$("#btn-submit").on("click", function () {
  $("#modal").fadeOut();
  $("#app").fadeIn();
});
$("#close").on("click", function () {
  $("#modal").fadeOut();
  $("#app").fadeIn();
});
// Video
$(".media-video").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,

  responsive: {
    0: {
      loop: true,
      items: 1,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 2,
    },
  },
});

$(".media-list").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: true,
  dotsData: false,

  responsive: {
    0: {
      loop: true,
      items: 1,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Slider
var btns = document.querySelectorAll(".btn");
var sliders = document.querySelectorAll(".slider-content");
// Comment
var nagis = document.querySelectorAll(".experience-btn");
var experiences = document.querySelectorAll(".experience-items");

// Video/image
var mediaBtns = document.querySelectorAll(".media-btn");
var medias = document.querySelectorAll(".media-image");

var currentSlide = 1;

var manualNavSlide = function (manual) {
  // Slider
  sliders.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  sliders[manual].classList.add("active");
  btns[manual].classList.add("active");

  // Comment
  experiences.forEach((experience) => {
    experience.classList.remove("change");

    nagis.forEach((nagi) => {
      nagi.classList.remove("change");
    });
  });
  experiences[manual].classList.add("change");
  nagis[manual].classList.add("change");
  // Media/Image
  medias.forEach((media) => {
    media.classList.remove("activeddd");

    mediaBtns.forEach((mediaBtn) => {
      mediaBtn.classList.remove("activeddd");
    });
  });
  medias[manual].classList.add("activeddd");
  mediaBtns[manual].classList.add("activeddd");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNavSlide(i);
    currentSlide = i;
  });
  // Comment
  nagis.forEach((nagi, i) => {
    nagi.addEventListener("click", () => {
      manualNavSlide(i);
      currentSlide = i;
    });
  });
  // Media/Image
  mediaBtns.forEach((mediaBtn, i) => {
    mediaBtn.addEventListener("click", () => {
      manualNavSlide(i);
      currentSlide = i;
    });
  });
});

//comment

var repeatSlider = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeaters = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      sliders[i].classList.add("active");
      btns[i].classList.add("active");
      i++;
      if (sliders.length == i) {
        i = 0;
      }
      if (i >= sliders.length) {
        return;
      }
      repeaters();
    }, 3000);
  };
  repeaters();
};
repeatSlider();

// autoplay navigation

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("change");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("change");
      });
      experiences[i].classList.add("change");
      nagis[i].classList.add("change");
      i++;

      if (experiences.length == i) {
        i = 0;
      }
      if (i >= experiences.length) {
        return;
      }
      repeater();
    }, 3000);
  };
  repeater();
};
repeat();

// 360
var productViewer = new ProductViewer({
  element: document.getElementById("product_viewer"),
  imagePath: "./assets/images/360",
  filePrefix: "img",
  fileExtension: ".png",
  numberOfImages: 50,
});

// *****************************************************************
// Show hide img
// var check = document.getElementById("checkbox-img");
// var img1 = document.getElementById("img-1");
// var img2 = document.getElementById("img-2");
// check.addEventListener("click", function () {
//   if (check.checked == true) {
//     img1.style.display = "none";
//     img2.style.display = "block";
//   } else {
//     img1.style.display = "block";
//     img2.style.display = "none";
//   }
// });
var check = document.getElementById("scrolldown");
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");
var story1 = document.getElementById("story-1");
var story2 = document.getElementById("story-2");
check.addEventListener("click", function () {
  if (check.classList.toggle("checked")) {
    img1.style.display = "none";
    img2.style.display = "block";
    story1.style.display = "none";
    story2.style.display = "block";
  } else {
    img1.style.display = "block";
    img2.style.display = "none";
    story1.style.display = "block";
    story2.style.display = "none";
  }
});

// Slide story
var storys = document.querySelectorAll(".story-item");
var nextBtn = document.querySelector(".next-btn");
var prevBtn = document.querySelector(".prev-btn");
var curentIndex = 0;

nextBtn.addEventListener("click", function () {
  storys[curentIndex].classList.remove("story-active");
  curentIndex = (curentIndex + 1) % storys.length;
  storys[curentIndex].classList.add("story-active");
});
prevBtn.addEventListener("click", function () {
  storys[curentIndex].classList.remove("story-active");
  curentIndex = (curentIndex - 1 + storys.length) % storys.length;
  storys[curentIndex].classList.add("story-active");
});
