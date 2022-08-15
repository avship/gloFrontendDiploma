const { animate } = require("./helpers");
const reviews = () => {
  let jsonCards = null;
  let currentId = 0;
  const nShowReviews = 3;
  const colors = ["green", "gray", "orange"];

  document.addEventListener("DOMContentLoaded", () => {
    const reviewsBlock = document.querySelector("#reviews");
    const jsonPath = "comments.json";

    if (!reviewsBlock) {
      return;
    }
    const rowReviews = reviewsBlock.querySelector(".comments-container");
    rowReviews.innerHTML = "";
    const initReviewsSlider = () => {
      rowReviews.innerHTML = "";
      const reviewTop = rowReviews.querySelector(".comment-item");
      if (reviewTop) {
        reviewTop.style.opacity = 1;
      }
      console.log(jsonCards);
      if (currentId >= jsonCards.length) {
        currentId = 0;
      }

      for (let i = 0; i < nShowReviews; i++) {
        let curSlideId = currentId + i;
        if (curSlideId >= jsonCards.length) {
          curSlideId = 0;
        }
        let slideElem = document.createElement("div");
        const avaImage = jsonCards[curSlideId].image
          ? jsonCards[curSlideId].image
          : "man-user.png";

        const avaStyle = jsonCards[curSlideId].image
          ? ""
          : ' style="display: block; padding: 30px; margin-left: 20px;"';
        const avaPart = `<div class="col-xs-3 col-sm-2"><div class="review-user"><img src="images/users/${avaImage}" alt="" class="img-responsive avatar"${avaStyle}></div></div>`;
        let reviewPart = `<div class="col-xs-9 col-sm-9">
							<div class="review-inner review-XXX review-arrow review-arrow-XXXXX">
								<p class="text-normal">${jsonCards[curSlideId].author}</p>
								<p>${jsonCards[curSlideId].comment}</p>
							</div>
						</div>`;
        if (i % 2 === 0) {
          reviewPart = reviewPart
            .replace("review-XXX", `review-${colors[i % 3]}`)
            .replace("review-arrow-XXXXX", "review-arrow-left");
          slideElem.innerHTML = `<div class="review-margin-bottom row comment-item">${avaPart}${reviewPart}</div>`;
        } else {
          reviewPart = reviewPart
            .replace("review-XXX", "review-gray")
            .replace("review-arrow-XXXXX", "review-arrow-right");
          slideElem.innerHTML = `<div class="review-margin-bottom row comment-item">${reviewPart}${avaPart}</div>`;
        }
        rowReviews.appendChild(slideElem);
      }
      setTimeout(() => {
        currentId += 1;
        initReviewsSlider();
      }, 5000);
    };

    fetch(jsonPath)
      .then((data) => data.json())
      .then((data) => {
        jsonCards = data.comments;
        initReviewsSlider();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports = reviews;
