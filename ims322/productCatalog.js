const info = [
  {
    img: "img/romanPieces.webp",
    name: "Wooden Chess Set Roman | black weighted",
    starReview: "img/starReviews.webp",
    review: "85 reviews",
    price: "$29 USD",
    buy: "Add to cart",
  },
  {
    img: "img/geneva_white.webp",
    name: "Wooden Chess Set GENEVA",
    starReview: "img/starReviews.webp",
    review: "60 reviews",
    price: "$96 USD",
    buy: "Add to cart",
  },
  {
    img: "img/16-black-and-white-marble-chess-set.webp",
    name: '16" Black and White Marble Chess Set',
    starReview: "img/starReviews.webp",
    review: "125 reviews",
    price: "$229 USD",
    buy: "Add to cart",
  },
  {
    img: "img/brass-art-deco.webp",
    name: "Brass Art Deco",
    starReview: "img/starReviews.webp",
    review: "79 reviews",
    price: "$240 USD",
    buy: "Add to cart",
  },
  {
    img: "img/4-burnt-grandmaster-chess-pieces.webp",
    name: '4" Burnt Grandmaster Chess Set',
    starReview: "img/starReviews.webp",
    review: "94 reviews",
    price: "$229 USD",
    buy: "Add to cart",
  },
  {
    img: "img/medieval-knights-3d-chess-set.webp",
    name: "Medieval Knights 3D Chess Set",
    starReview: "img/starReviews.webp",
    review: "73 reviews",
    price: "$395 USD",
    buy: "Add to cart",
  },
  {
    img: "img/harryPotterChessSet.webp",
    name: "Harry Potter Chess Set",
    starReview: "img/starReviews.webp",
    review: "133 reviews",
    price: "$49.99 USD",
    buy: "Add to cart",
  },
  {
    img: "img/3-1-2-standard-staunton-chess-pieces.webp",
    name: '3 1/2" Standard Staunton Chess Set',
    starReview: "img/starReviews.webp",
    review: "79 reviews",
    price: "$64 USD",
    buy: "Add to cart",
  },
];
const shopItems = document.getElementById("shop-items");

for (const i of info) {
  const cardContainer = document.createElement("div");
  const card = document.createElement("div");
  const detailCard = document.createElement("div");

  cardContainer.style.setProperty("background-image", `url(${i.img})`);

  // const imgElement = document.createElement("img");
  // imgElement.src = i.img;
  // card.appendChild(imgElement);

  const nameCard = document.createElement("h3");
  nameCard.innerText = i.name;
  detailCard.appendChild(nameCard);
  detailCard.style.setProperty("background-color", "#DEDFDD");

  const reviewDiv = document.createElement("div");
  const starReview = document.createElement("img");
  const reviewEle = document.createElement("p");
  starReview.classList.add("star-review");
  reviewDiv.classList.add("review-div");
  starReview.src = i.starReview;
  reviewEle.innerText = i.review;
  reviewDiv.appendChild(starReview);
  reviewDiv.appendChild(reviewEle);
  detailCard.appendChild(reviewDiv);

  const priceELe = document.createElement("p");
  priceELe.innerText = i.price;
  detailCard.appendChild(priceELe);

  const buyELe = document.createElement("button");
  buyELe.innerHTML = `<span class="material-symbols-outlined">shopping_bag</span>Add to cart`;
  buyELe.classList.add("button-container");

  detailCard.appendChild(buyELe);

  card.classList.add("card");
  cardContainer.appendChild(card);
  cardContainer.appendChild(detailCard);
  cardContainer.classList.add("card-container");

  shopItems.appendChild(cardContainer);
}
//google icons
