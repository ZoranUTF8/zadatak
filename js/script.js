//  NAVBAR START

const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const resNav = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
const dropBtn = document.querySelectorAll(".dropBtn");
const dropdown = document.querySelector(".dropdown");

openBtn.addEventListener("click", () => {
  header.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  header.classList.remove("open");
});

dropBtn.forEach((item) => {
  item.addEventListener("click", () => {
    dropdown.classList.toggle("display");
  });
});

// NAVBAR END
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

// SECTION FOUR START
// Select items
const reviewText = document.querySelector(".reviewText");
const userImage = document.querySelector(".userImage");
const profileText = document.querySelector(".profileText");
const prevbtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// Set starting item
let currentItem = 0;
let reviews = [];

// ? Fetch the reviews on dom load
window.addEventListener("DOMContentLoaded", () => {
  fetch("../resources/sectionFour/reviews.json")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      reviews = data;
      showPerson();
    })
    .catch((error) => {
      console.log(error);
    });
});
// Show person
const showPerson = () => {
  const individualReview = reviews[currentItem];
  userImage.src = individualReview.userImage;
  reviewText.textContent = individualReview.reviewText;
  profileText.textContent = individualReview.profileText;
};

// Show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) currentItem = currentItem - 1;
  console.log(currentItem);
  showPerson(currentItem);
});
//  Show prev person
prevbtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) currentItem = currentItem + 1;
  console.log(currentItem);
  showPerson(currentItem);
});

// SECTION FOUR END

// SECTION FIVE START

const sectionFiveAccordionContainer = document.querySelector(".accordion");

let accordionData = [];

window.addEventListener("DOMContentLoaded", () => {
  fetch("../resources/sectionFive/acordionText.json")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      accordionData = data;

      const htmlMarkup = accordionData
        .map((accordion) => {
          return `
      <div class="contentBox">
      <div class="contentBoxTitle">${accordion.title}</div>
      <div class="textContent">
                        <p>${accordion?.paragraphOne}</p>
                        <p>${accordion?.paragraphTwo}</p>
                    </div>
      </div>
    `;
        })
        .join("");

      sectionFiveAccordionContainer.insertAdjacentHTML(
        "afterbegin",
        htmlMarkup
      );

      addAccordionFunctionality();
    })
    .catch((error) => {
      console.log(error);
    });
});

function addAccordionFunctionality() {
  const accordion = document.getElementsByClassName("contentBox");

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
}

// SECTION FIVE END
