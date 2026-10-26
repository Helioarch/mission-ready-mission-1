const foodList = [
  {
    name: "Chicken Feet",
    origin: "Cantonese/Southern China",
    image: "images/food-chicken-feet.avif",
    imageAlt: "Chicken Feet Dimsum",
    description:
      "Chicken feet typically deep-fried, braised and steamed until tender, often served with a savoury sauce.",
    comment:
      "I’ll start the list with a staple of dim sum cuisine: chicken feet! You’re mainly eating the skin, which puffs up and soaks up all that sauce as it cooks. Soft, sweet and savoury!",
  },
  {
    name: "Gyutan (Beef tongue)",
    origin: "Sendai, Japan",
    image: "images/food-gyutan.avif",
    imageAlt: "Beef Tongue Dish",
    description:
      "Sliced beef tongue, usually seasoned and grilled over charcoal. Sendai Specialty Since 1948",
    comment:
      "Once you get past the fact that the steak can technically taste you back, this is basically a chewier version of steak. It still has all that meaty goodness and is surprisingly juicy, despite looking like it should just be a tough lump of muscle.",
  },
  {
    name: "Paru Goreng (Fried Lungs)",
    origin: "Indonesia",
    image: "images/food-lungs.webp",
    imageAlt: "Paru Goreng (Fried Lungs)",
    description:
      "Beef lung that's seasoned, cooked and fried until crisp on the outside.",
    comment:
      "There are plenty of ways to prepare lungs, but the simple deep-fried version I had back in my home country of Indonesia was perfect as is! It can be an acquired taste, though, thanks to its rather peculiar taste and texture.",
  },
  {
    name: "Natto",
    origin: "Japan",
    image: "images/food-natto.jpg",
    imageAlt: "Natto on rice",
    description:
      "Fermented soybeans famous for their sticky, stringy texture and strong, distinctive aroma.",
    comment:
      "“Pour soy sauce and mustard over the stinky beans, then mix them until they’re slimy, gooey and bubbly” might not sound particularly appetising, but served over a fresh bowl of rice, it becomes one of the most comforting foods on this list! Commonly eaten as a quick breakfast, it’s a humble Japanese staple that’s also packed with nutrients.",
  },
  {
    name: "Durian",
    origin: "Southeast Asia (primarily Thailand/Malaysia)",
    image: "images/food-durian.webp",
    imageAlt: "Durian",
    description:
      "A large, spiky tropical fruit with rich, creamy flesh and an extremely distinctive smell.",
    comment:
      "Dubbed the “King of Fruits,” ye who dares brave the smell shall be rewarded with the rich, creamy and sweet flesh of this golden fruit. It’s probably the most polarising fruit—you either hate it or love it. And I freaking love it.",
  },
  {
    name: "Century Egg",
    origin: "China",
    image: "images/food-century-egg.webp",
    imageAlt: "Century Egg Dish",
    description:
      "Eggs preserved through an alkaline curing process that transforms the white into a dark jelly and the yolk into a rich, creamy centre.",
    comment: `You might've heard this one before, just like its name suggests, the "1000-year old egg" or "century egg" looks equally rotten where the egg whites turn black and translucent and the yellow turns murky grey-green. But it is a savoury bomb of creamy goodness, especially lovely when paired with congee.`,
  },
  {
    name: "Iron Egg",
    origin: "Taiwan",
    image: "images/food-iron-egg.jpg",
    imageAlt: "Taiwanese Iron Egg",
    description:
      "Small eggs repeatedly braised in a spiced soy mixture and dried, giving them a dark colour and dense, chewy texture.",
    comment:
      "Surprise! The last item on this list is yet another egg. I had the quail egg version of the iron egg, but this is by far the least egg-like of the bunch. The outside is tough and almost plastic-y—I’d even go as far as saying there’s a slight crunch when you bite into it.",
  },
];

let curPage = 0;
let pageToDisplay = 1;
const foodPerPage = 3;
const postBodyEl = document.getElementById("post-body");
const showMoreBtnEl = document.getElementById("show-more-btn");

showMoreBtnEl.addEventListener("click", showMore);

function createFoodHTML(food, mirrorFlag) {
  return `<div class="foodlist-item${mirrorFlag ? " foodlist-mirror" : ""}">
    <img class="foodlist-image" alt="${food.imageAlt}" src="${food.image}"/>
    <div class="foodlist-text">
        <h3>${food.name} - 📍${food.origin}</h3>
        <p><span class="foodlist-subtitle">What is it?</span>${food.description}</p>
        <p><span class="foodlist-subtitle">My Take</span>${food.comment}</p>
    </div>
</div>`;
}

function updateArticle() {
  if (curPage >= pageToDisplay) return;

  const startIndex = curPage * foodPerPage;
  const endIndex = pageToDisplay * foodPerPage - 1;

  if (endIndex >= foodList.length) {
    hideShowMoreBtn();
  }

  for (let idx = startIndex; idx <= endIndex; idx++) {
    if (idx >= foodList.length) break;
    postBodyEl.innerHTML += createFoodHTML(foodList[idx], idx % 2 === 1);
  }

  curPage = pageToDisplay;
}

function showMore() {
  pageToDisplay++;
  updateArticle();
}

function hideShowMoreBtn() {
  showMoreBtnEl.style.display = "none";
}

// initialize the page
updateArticle();
