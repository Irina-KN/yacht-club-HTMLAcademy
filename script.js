let dark = document.querySelector(".theme-button-dark");
let light = document.querySelector(".theme-button-light");
let sansSerif = document.querySelector(".font-button-sans-serif");
let serif = document.querySelector(".font-button-serif");

dark.onclick = function () {
  dark.classList.add("active");
  light.classList.remove("active");
  document.body.classList.add("dark");
};

light.onclick = function () {
  light.classList.add("active");
  dark.classList.remove("active");
  document.body.classList.remove("dark");
};

sansSerif.onclick = function () {
  sansSerif.classList.add("active");
  serif.classList.remove("active");
  document.body.classList.remove("serif");
};

serif.onclick = function () {
  serif.classList.add("active");
  sansSerif.classList.remove("active");
  document.body.classList.add("serif");
};

let blogArticles = document.querySelectorAll(".blog-article");

for (let blockArticle of blogArticles) {
  let moreButton = blockArticle.querySelector(".more");
  moreButton.onclick = function () {
    blockArticle.classList.remove("short");
  };
}

let btnCardGrid = document.querySelector(".card-view-button-grid");
let bntCardList = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".cards");

btnCardGrid.onclick = function () {
  btnCardGrid.classList.add("active");
  bntCardList.classList.remove("active");
  cardsList.classList.remove("list");
};

bntCardList.onclick = function () {
  bntCardList.classList.add("active");
  btnCardGrid.classList.remove("active");
  cardsList.classList.add("list");
};

let mainPhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list li a");

for (let activePhoto of previews) {
  activePhoto.onclick = function (evt) {
    evt.preventDefault();
    mainPhoto.src = activePhoto.href;
    let currentActivePhoto = document.querySelector(
      ".preview-list li .active-item"
    );
    currentActivePhoto.classList.remove("active-item");
    activePhoto.classList.add("active-item");
  };
}
