console.log("Running");
let sliderWrapper = document.querySelector(".slider-wrapper");
let slides = document.querySelectorAll(".slide");
let dots = document.querySelector(".dots");
let dot = document.querySelectorAll(".dot");
let images = document.querySelectorAll(".image");
let counter = 0;
console.log(slides);

const activeSlides = (number) => {
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[number].classList.add("active");
};

const activeDots = (number) => {
  for (let item of dot) {
    item.classList.remove("enabled");
  }
  dot[number].classList.add("enabled");
};

const call = (i) => {
  activeSlides(i);
  activeDots(i);
};

const moveLeft = () => {
    slides.forEach((element) => element.classList.add("transition-left"));
  for (let i = 0; i < dots.children.length; i++) {
    dots.children[i].removeEventListener("click", moveLeft);
    dots.children[i].removeEventListener("click", moveRight);
  }
};
const moveRight = () => {
    slides.forEach((element) => element.classList.add("transition-right"));
  for (let i = 0; i < dots.children.length; i++) {
    dots.children[i].removeEventListener("click", moveLeft);
    dots.children[i].removeEventListener("click", moveRight);
  }
};

slides.forEach((slide) =>
    
slide.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.name === "move-left") {
       slide.classList.remove("slide-left")   
        // slide.forEach((element) => {
        //     element.classList.remove("slide-left");
        //     element.classList.remove("transition-left")
        // });
      console.log("remove left");
      console.log(img);
    } else {
        console.log(img);
        slide.forEach((element) => element.classList.remove("transition-right"));
      console.log("remove right");
    }
  })
);

const onClickDots = () => {
  for (let i = 0; i < dots.children.length; i++) {
    dots.children[i].addEventListener("click", () => {
        if (i < counter) {
            moveRight()
            console.log(counter, i)
            counter=i
        }
        else {
            moveLeft()
            console.log(counter, i)
            counter=i
        }
      call(i);
    });
  }
};
onClickDots();
