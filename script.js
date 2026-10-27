class Food {
  constructor(name, origin, image, imageAlt, description, comment) {
    this.name = name;
    this.origin = origin;
    this.image = image;
    this.imageAlt = imageAlt;
    this.description = description;
    this.comment = comment;
  }
}

const foodList = [];
foodList.push(
  new Food(
    "Chicken Feet",
    "Cantonese/Southern China",
    "images/food-chicken-feet.avif",
    "Chicken Feet Dimsum",
    "Chicken feet typically deep-fried, braised and steamed until tender, often served with a savoury sauce.",
    "I’ll start the list with a staple of dim sum cuisine: chicken feet! You’re mainly eating the skin, which puffs up and soaks up all that sauce as it cooks. Soft, sweet and savoury!",
  ),
  new Food(
    "Gyutan (Beef tongue)",
    "Sendai, Japan",
    "images/food-gyutan.avif",
    "Beef Tongue Dish",
    "Sliced beef tongue, usually seasoned and grilled over charcoal. Sendai Specialty Since 1948",
    "Once you get past the fact that the steak can technically taste you back, this is basically a chewier version of steak. It still has all that meaty goodness and is surprisingly juicy, despite looking like it should just be a tough lump of muscle.",
  ),
  new Food(
    "Paru Goreng (Fried Lungs)",
    "Indonesia",
    "images/food-lungs.webp",
    "Paru Goreng (Fried Lungs)",
    "Beef lung that's seasoned, cooked and fried until crisp on the outside.",
    "There are plenty of ways to prepare lungs, but the simple deep-fried version I had back in my home country of Indonesia was perfect as is! It can be an acquired taste, though, thanks to its rather peculiar taste and texture.",
  ),
  new Food(
    "Natto",
    "Japan",
    "images/food-natto.jpg",
    "Natto on rice",
    "Fermented soybeans famous for their sticky, stringy texture and strong, distinctive aroma.",
    "“Pour soy sauce and mustard over the stinky beans, then mix them until they’re slimy, gooey and bubbly” might not sound particularly appetising, but served over a fresh bowl of rice, it becomes one of the most comforting foods on this list! Commonly eaten as a quick breakfast, it’s a humble Japanese staple that’s also packed with nutrients.",
  ),
  new Food(
    "Durian",
    "Southeast Asia (primarily Thailand/Malaysia)",
    "images/food-durian.webp",
    "Durian",
    "A large, spiky tropical fruit with rich, creamy flesh and an extremely distinctive smell.",
    "Dubbed the “King of Fruits,” ye who dares brave the smell shall be rewarded with the rich, creamy and sweet flesh of this golden fruit. It’s probably the most polarising fruit—you either hate it or love it. And I freaking love it.",
  ),
  new Food(
    "Century Egg",
    "China",
    "images/food-century-egg.webp",
    "Century Egg Dish",
    "Eggs preserved through an alkaline curing process that transforms the white into a dark jelly and the yolk into a rich, creamy centre.",
    `You might've heard this one before, just like its name suggests, the "1000-year old egg" or "century egg" looks equally rotten where the egg whites turn black and translucent and the yellow turns murky grey-green. But it is a savoury bomb of creamy goodness, especially lovely when paired with congee.`,
  ),
  new Food(
    "Iron Egg",
    "Taiwan",
    "images/food-iron-egg.jpg",
    "Taiwanese Iron Egg",
    "Small eggs repeatedly braised in a spiced soy mixture and dried, giving them a dark colour and dense, chewy texture.",
    "Surprise! The last item on this list is yet another egg. I had the quail egg version of the iron egg, but this is by far the least egg-like of the bunch. The outside is tough and almost plastic-y—I’d even go as far as saying there’s a slight crunch when you bite into it.",
  ),
);

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
