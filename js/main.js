$(function () {
  $(".service__item").hover(
    function () {
      $(this).addClass("service__item--active");
    },
    function () {
      $(this).removeClass("service__item--active");
    }
  );

  $(".gallery__slider").slick({
    dots: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".reviews__slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});
const smoothScroll = () => {
  const menu = document.querySelector(".menu__list");
  const links = menu.querySelectorAll(".menu__list-link");
  const btn = document.querySelectorAll(".click__btn");
  const imgfooter = document.querySelector(".footer__logo");

  imgfooter.addEventListener("click", (event) => {
    event.preventDefault();
    const section = document.querySelector(imgfooter.getAttribute("href"));
    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  });

  btn.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.querySelector(button.getAttribute("href"));
      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};

const menuActive = () => {
  const menuBlock = document.querySelector(".menu__list");
  const menuBtn = document.querySelector(".menu__btn");

  menuBtn.addEventListener("click", () => {
    menuBlock.classList.toggle("menu__list--active");
  });
};

const galleryModal = () => {
  const galeryImg = document.querySelectorAll(
    ".gallery__slider-item .gallery__slider-img"
  );
  const spanZoom = document.querySelectorAll(".span--active");
  const galeryActive = document.querySelector(".gallery__item-active");
  const body = document.querySelector("body");
  let galeryActiveArr = document.querySelector(".gallery__slider--active");

  console.dir(galeryImg);

  /* body.addEventListener("click", (e) => {
    console.log(e.target);
  }); */

  spanZoom.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      console.log(galeryImg.children);
      let cloneElem = galeryImg[index].cloneNode();
      cloneElem.classList.add("gallery__active-img");
      cloneElem.classList.remove("gallery__slider-img");
      console.log(cloneElem);
      galeryActiveArr.append(cloneElem);
      galeryActive.style.display = "flex";
    });
  });

  galeryActive.addEventListener("click", (e) => {
    if (!e.target.classList.contains("gallery__active-img")) {
      galeryActive.style.display = "none";
      galeryActiveArr.children[0].remove();
    }
  });
};

menuActive();
smoothScroll();
galleryModal();
