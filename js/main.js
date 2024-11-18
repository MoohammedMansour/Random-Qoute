var indexNow = 0;
var quoteCounter = 0;
var favoriteQuotes = []
var cont = [
  {
    qoute: `“ Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”`,
    aouther: `Steve Jobs`,
    image: `/imgs/steve.jpg`,
    color: `#E74C3C`,
    
  },
  {
    qoute: `“ Not all of us can do great things. But we can do small things with great love. ”`,
    aouther: `Mother Teresa`,
    image: `/imgs/Mother.jpg`,
    color: `#F1C40F`,
  },
  {
    qoute: `“ wo things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    aouther: `Albert Einstein`,
    image: `/imgs/Albert.jpg`,
    color: `#16A085`,

  },
  {
    qoute: `“Be the change that you wish to see in the world.”`,
    aouther: ` Mahatma Gandhi`,
    image: `/imgs/ghandy.jpg`,
    color: `#D91656`,

  },
  {
    qoute: `“ A room without books is like a body without a soul.v ”`,
    aouther: `Marcus Tullius Cicero`,
    image: `/imgs/Marcus Tullius Cicero.jpg`,
    color: `#FF885B`,

  },
  {
    qoute: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ”`,
    aouther: `Bernard M. Baruch`,
    image: `/imgs/Bernard M. Baruch.jpg`,
    color: `#ED3EF7`,

  },
  {
    qoute: `“ You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth. ”`,
    aouther: `William W. Purkey`,
    image: `/imgs/William.jpg`,
    color: `#2980B9`,

  },
  {
    qoute: `“ You know you're in love when you can't fall asleep because reality is finally better than your dreams ”`,
    aouther: `Dr. Seuss`,
    image: `/imgs/Dr. Seuss.jpg`,
    color: `#EB3678`,

  },
  {
    qoute: `“ You only live once, but if you do it right, once is enough. ”`,
    aouther: `Robert Frost`,
    image: `/imgs/Robert Frost.jpg`,
    color: `#F1C40F`,

  },
  {
    qoute: `“If you tell the truth, you don't have to remember anything.”`,
    aouther: `Mark Twain`,
    image: `/imgs/Mark Twain.jpg`,
    color: `#27AE60`,

  },
];
function initializePage() {
  const initialQuote = cont[indexNow];
  document.body.style.backgroundColor = initialQuote.color;
  document.getElementById("myContent").innerHTML = `
    <p class="fs-4">"${initialQuote.qoute}"</p>
    <p class="fw-bold">-- ${initialQuote.aouther}</p>
    <img src="${initialQuote.image}" alt="${initialQuote.aouther}">
    <button class="favorite-btn" onclick="toggleFavorite(${indexNow})">
      <i class="fas fa-heart"></i>
    </button>
  `;
}

document.getElementById("myButton").onclick = function () {
  var randomNumber = Math.floor(Math.random() * cont.length);
  if (randomNumber === indexNow) {
    randomNumber = Math.floor(Math.random() * cont.length);
  }
  indexNow = randomNumber;
  quoteCounter++;
  document.getElementById("counter").textContent = quoteCounter;
  document.body.style.backgroundColor = cont[indexNow].color;


  document.getElementById("myContent").innerHTML = `
  <p class="fs-4">"${cont[indexNow].qoute}"</p>
  <p class="fw-bold">-- ${cont[indexNow].aouther}</p>
  <img src="${cont[indexNow].image}" alt="${cont[indexNow].aouther}">
  <button class="favorite-btn" onclick="toggleFavorite(${indexNow})">
    <i class="fas fa-heart"></i>
  </button>
`;
};
function toggleFavorite(index) {
  const quote = cont[index];
  const isAlreadyFavorite = favoriteQuotes.some(fav => fav.qoute === quote.qoute);
  if (isAlreadyFavorite) {
    favoriteQuotes = favoriteQuotes.filter(fav => fav.qoute !== quote.qoute);
    document.querySelector(`#myContent button`).classList.remove("favorited");
  } else {
    favoriteQuotes.push(quote);
    document.querySelector(`#myContent button`).classList.add("favorited");
  }
  updateFavoritesList();
}

function updateFavoritesList() {
  const favoritesList = document.getElementById("favoritesList");
  favoritesList.innerHTML = "";
  favoriteQuotes.forEach(fav => {
    const favoriteDiv = document.createElement("div");
    favoriteDiv.classList.add("quote-container");
    favoriteDiv.innerHTML = `
      <p class="fs-4">"${fav.qoute}"</p>
      <p class="fw-bold">-- ${fav.aouther}</p>
      <img src="${fav.image}" alt="${fav.aouther}">
    `;
    favoritesList.appendChild(favoriteDiv);
  });
}
document.getElementById("darkModeButton").onclick = function () {
  document.body.classList.toggle("dark-mode");
};
initializePage();

