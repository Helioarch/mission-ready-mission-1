// Define Food class containing details of the Food and Image
class Food {
  constructor({name, origin, image, imageAlt, description, comment}) {
    this.name = name;
    this.origin = origin;
    this.image = image;
    this.imageAlt = imageAlt;
    this.description = description;
    this.comment = comment;
  }

  // Function to return the item card to inject to post-body
  createFoodHTML(mirrorFlag) {
    return `<div class="foodlist-item${mirrorFlag ? " foodlist-mirror" : ""}">
    <img class="foodlist-image" alt="${this.imageAlt}" src="${this.image}"/>
    <div class="foodlist-text">
        <h3>${this.name} - 📍${this.origin}</h3>
        <p><span class="foodlist-subtitle">What is it?</span>${this.description}</p>
        <p><span class="foodlist-subtitle">My Take</span>${this.comment}</p>
    </div>
</div>`;
  }
}

// Array holding the foods
const foodList = [
  {
    name: "Chicken Feet",
    origin: "Cantonese/Southern China",
    image: "images/food-chicken-feet.avif",
    imageAlt: "Chicken Feet Dimsum",
    comment: "I’ll start the list with a staple of dim sum cuisine: chicken feet! You’re mainly eating the skin, which puffs up and soaks up all that sauce as it cooks. Soft, sweet and savoury!",
    description: "Chicken feet typically deep-fried, braised and steamed until tender, often served with a savoury sauce.",
  },
  {
    name: "Gyutan (Beef tongue)",
    origin: "Sendai, Japan",
    image: "images/food-gyutan.avif",
    imageAlt: "Beef Tongue Dish",
    comment: "Once you get past the fact that the steak can technically taste you back, this is basically a chewier version of steak. It still has all that meaty goodness and is surprisingly juicy, despite looking like it should just be a tough lump of muscle.",
    description: "Sliced beef tongue, usually seasoned and grilled over charcoal. Sendai Specialty Since 1948",
  },
  {
    name: "Paru Goreng (Fried Lungs)",
    origin: "Indonesia",
    image: "images/food-lungs.webp",
    imageAlt: "Paru Goreng (Fried Lungs)",
    comment: "There are plenty of ways to prepare lungs, but the simple deep-fried version I had back in my home country of Indonesia was perfect as is! It can be an acquired taste, though, thanks to its rather peculiar taste and texture.",
    description: "Beef lung that's seasoned, cooked and fried until crisp on the outside.",
  },
  {
    name: "Natto",
    origin: "Japan",
    image: "images/food-natto.jpg",
    imageAlt: "Natto on rice",
    comment: "“Pour soy sauce and mustard over the stinky beans, then mix them until they’re slimy, gooey and bubbly” might not sound particularly appetising, but served over a fresh bowl of rice, it becomes one of the most comforting foods on this list! Commonly eaten as a quick breakfast, it’s a humble Japanese staple that’s also packed with nutrients.",
    description: "Fermented soybeans famous for their sticky, stringy texture and strong, distinctive aroma.",
  },
  {
    name: "Durian",
    origin: "Southeast Asia (primarily Thailand/Malaysia)",
    image: "images/food-durian.webp",
    imageAlt: "Durian",
    comment: "Dubbed the “King of Fruits,” ye who dares brave the smell shall be rewarded with the rich, creamy and sweet flesh of this golden fruit. It’s probably the most polarising fruit—you either hate it or love it. And I freaking love it.",
    description: "A large, spiky tropical fruit with rich, creamy flesh and an extremely distinctive smell.",
  },
  {
    name: "Century Egg",
    origin: "China",
    image: "images/food-century-egg.webp",
    imageAlt: "Century Egg Dish",
    comment: `You might've heard this one before, just like its name suggests, the "1000-year old egg" or "century egg" looks equally rotten where the egg whites turn black and translucent and the yellow turns murky grey-green. But it is a savoury bomb of creamy goodness, especially lovely when paired with congee.`,
    description: "Eggs preserved through an alkaline curing process that transforms the white into a dark jelly and the yolk into a rich, creamy centre.",
  },
  {
    name: "Iron Egg",
    origin: "Taiwan",
    image: "images/food-iron-egg.jpg",
    imageAlt: "Taiwanese Iron Egg",
    comment: "Surprise! The last item on this list is yet another egg. I had the quail egg version of the iron egg, but this is by far the least egg-like of the bunch. The outside is tough and almost plastic-y—I’d even go as far as saying there’s a slight crunch when you bite into it.",
    description: "Small eggs repeatedly braised in a spiced soy mixture and dried, giving them a dark colour and dense, chewy texture.",
  },
].map((item) => new Food(item));

// Variables related for the paging system, curPage start at 0 as page will be initialized below to get to page 1
let curPage = 0;
let pageToDisplay = 1;
const foodPerPage = 3; // Defines how many food show when show more is pressed

// Element selectors
const bodyEl = document.body;
const postBodyEl = document.getElementById("post-body");
const showMoreBtnEl = document.getElementById("show-more-btn");
const darkModeBtnEl = document.getElementById("dark-mode-btn");

// Event Listeners
showMoreBtnEl.addEventListener("click", showMore);
darkModeBtnEl.addEventListener("click", toggleDarkMode);

// Function to inject Food into post-body if pageToDisplay > curPage
function updateArticle() {
  if (curPage >= pageToDisplay) return;

  // Calculate which array index to start and end depending on page number
  const startIndex = curPage * foodPerPage;
  const endIndex = pageToDisplay * foodPerPage - 1;

  // Hide the show more button if it's the last page
  if (endIndex >= foodList.length) {
    hideShowMoreBtn();
  }

  // Loop through the array index to generate and inject the HTML to post-body
  for (let idx = startIndex; idx <= endIndex; idx++) {
    if (idx >= foodList.length) break;
    postBodyEl.innerHTML += foodList[idx].createFoodHTML(idx % 2 === 1);
  }

  curPage = pageToDisplay;
}

// Show More Button increase the counter which defines the endIndex
function showMore() {
  pageToDisplay++;
  updateArticle();
}

// Hides show more button programatically
function hideShowMoreBtn() {
  showMoreBtnEl.style.display = "none";
}

// Toggles the dark-mode class in the body element
function toggleDarkMode() {
  bodyEl.classList.toggle('dark-mode');
}

// Initialize the page the first time the page is open
updateArticle();
