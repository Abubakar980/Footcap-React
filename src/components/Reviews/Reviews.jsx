import React from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Ranidi Lochana",
    image: "./images/girl_dp1.jpg",
    stars: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "Ranidi Lochana",
    image: "./images/girl_dp1.jpg",
    stars: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "Sayuru Tharanga",
    image: "./images/gir_dp2.jpg",
    stars: 3.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "Charith Aruna",
    image: "./images/man_dp3.jpg",
    stars: 4.0,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "Senuda Dilwan",
    image: "./images/gir_dp3.jpg",
    stars: 2.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "Ranidi Lochana",
    image: "./images/girl_dp1.jpg",
    stars: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "Kaveesha Vidurangi",
    image: "./images/man_dp1.jpg",
    stars: 3.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "John Deo",
    image: "./images/man_dp2.jpg",
    stars: 4.5,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    name: "Charith Aruna",
    image: "./images/man_dp3.jpg",
    stars: 4.0,
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
];

const Review = () => {
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <i key={`full-${index}`} className="fa-solid fa-star"></i>
        ))}
        {halfStar && <i className="fa-solid fa-star-half-stroke"></i>}
        {[...Array(emptyStars)].map((_, index) => (
          <i key={`empty-${index}`} className="fa-regular fa-star"></i>
        ))}
      </>
    );
  };

  return (
    <div className="review" id="review">
      <h1>
        Customer's <span>review</span>
      </h1>
      <div className="review_box">
        {reviews.map((review, index) => (
          <div key={index} className="review_card">
            <div className="card_top">
              <div className="profile">
                <div className="profile_image">
                  <img src={review.image} alt={`${review.name}'s profile`} />
                </div>
                <div className="name">
                  <strong>{review.name}</strong>
                  <div className="like">{renderStars(review.stars)}</div>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
