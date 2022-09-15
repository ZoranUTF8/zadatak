window.onload = function () {
  () => {
    const closeNavMenu = document.querySelector(".close-nav-menu"),
      openNavMenu = document.querySelector(".open-nav-menu"),
      navMenu = document.querySelector(".nav-menu");

    function toggleNav() {
      navMenu.classList.toggle("open");
    }

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
  };
};

// SECTION TWO START
const sectionTwoCardHolder = document.querySelector(".cardHolder");

let cardsData = [];
const cardData = fetch("../resources/sectionTwoCardImage/cardImgPath.json")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    cardsData = data;

    const htmlMarkup = cardsData.cardsContent
      .map((cardContent) => {
        return `
      <div class="card">
          <img src="${cardContent.imgPath}" alt="${cardContent.title}">
          <div class="cardText">
              <h3 class="cardTitle">${cardContent.title}</h3>
              <h3 class="cardInfo">${cardContent.info}</h3>
          </div>
      </div>
    `;
      })
      .join("");

    sectionTwoCardHolder.insertAdjacentHTML("afterbegin", htmlMarkup);
  })
  .catch((error) => {
    console.log(error);
  });

// SECTION TWO END

// SECTION THREE START

// Selector
const counters = document.querySelectorAll(".counter");

// Main function
for (let n of counters) {

  const updateCount = () => {
    const target = +n.getAttribute("data-target");
    const count = +n.innerText;
    const speed = 3000; // change animation speed here
    const inc = target / speed;
    
    if (count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  };
  updateCount();
}
// SECTION THREE END
