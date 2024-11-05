const speakers = [
  {
    name: "John Doe",
    profession: "Cheif Markeing Officer",
    company: "Acme Corp",
    image: "assets/Ellipse 24.svg", // Path to speaker image
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    profession: "Cheif Engagment Officer",
    company: "Acquia",
    image: "assets/Ellipse 24 (1).svg",
    description:
      "A Chief Engagement Officer (CEO) is a senior executive responsible for fostering and maintaining strong relationships with key stakeholders, both internal and external to an organization. This role is crucial in building and strengthening brand reputation, driving customer loyalty, and improving employee morale.",
  },
  {
    name: "John Doe",
    profession: "Cheif Technical Developer",
    company: "Pantheon",
    image: "assets/Ellipse 24 (2).svg",
    description:
      "A Chief Technical Officer (CTO) is a senior executive responsible for overseeing an organization's technological operations. This role involves leading the technical team, setting the technological vision, and ensuring the smooth functioning of all technical systems.",
  },
  {
    name: "John Doe",
    profession: "Cheif Markeing Officer",
    company: "Spacbee",
    image: "assets/Ellipse 24 (3).svg",
    description:
      "A Chief Technology Officer (CTO) is a senior executive responsible for overseeing an organization's technological operations. This role involves leading the technical team, setting the technological vision, and ensuring the smooth functioning of all technical systems..",
  },
  {
    name: "John Doe",
    profession: "Cheif Markeing Officer",
    company: "Acme Corp",
    image: "assets/Ellipse 24.svg", // Path to speaker image
    description:
      "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.",
  },
  {
    name: "John Doe",
    profession: "Cheif Engagment Officer",
    company: "Acquia",
    image: "assets/Ellipse 24 (1).svg",
    description:
      "A Chief Engagement Officer (CEO) is a senior executive responsible for fostering and maintaining strong relationships with key stakeholders, both internal and external to an organization. This role is crucial in building and strengthening brand reputation, driving customer loyalty, and improving employee morale.",
  },
];

let totalCards = speakers.length; // Set totalCards based on speakers array length
let cardsToShow = 4; // Number of cards to display at once
let currentIndex = 0; // Current index of the first visible card

function generateCards() {
  const cardsContainer = document.getElementById("cards-container");
  speakers.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "speaker-card";
    card.innerHTML = `
     <img src="${item.image}" alt="${item.name}" class="speaker-card__image"/>
     <h3 class="speaker-card__name">${item.name}</h3>
     <p class="speaker-card__profession">${item.profession}</p>
     <p class="speaker-card__company">${item.company}</p>
    `;
    card.addEventListener("click", () => showDetails(item));
    cardsContainer.appendChild(card);
  });
}

function updateCarousel() {
  const cardsContainer = document.getElementById("cards-container");
  const cards = Array.from(cardsContainer.children);

  if (cards.length === 0) return; // Exit if no cards

  const cardWidth = cards[0].offsetWidth; // Width of a single card
  const transformValue = -currentIndex * cardWidth;

  // Move the container to show the current set of cards
  cardsContainer.style.transform = `translateX(${transformValue}px)`;

  // Enable/disable buttons based on currentIndex
  document.querySelector(".carousel-button.left").disabled = currentIndex === 0;
  document.querySelector(".carousel-button.right").disabled =
    currentIndex >= totalCards - cardsToShow;
}

// Next and previous functions
function nextSlide() {
  if (currentIndex < totalCards - cardsToShow) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  generateCards();
  updateCarousel();

  document
    .querySelector(".carousel-button.right")
    .addEventListener("click", nextSlide);
  document
    .querySelector(".carousel-button.left")
    .addEventListener("click", prevSlide);

  window.addEventListener("resize", updateCarousel);
});

function showDetails(item) {
  const detailsSection = document.getElementById("speaker-details");
  detailsSection.innerHTML = `
  <div class="speaker-details__content">
   <button class="close-button" onclick="closeDetails()">
     <img src="assets/Vector (3).svg" alt="Close Icon"/>
   </button>
   <div class="speaker-details__left">
    <div class="speaker-details__image-container">
      <img src="${item.image}" alt="${item.name}" />
    </div>

    <div class="speaker-details__info-container">
      <h2 class="speaker-details__name">${item.name}</h2>
      <p class="speaker-details__profession">${item.profession}</p>
      <p class="speaker-details__company">${item.company}</p>
    
      <div class="speaker-details__social-icons">
        <img src="assets/Vector (4).svg" alt="Dribbble Icon"/>
       
        <img src="assets/Vector (5).svg" alt="twitter Icon"/>
        <img src="assets/Vector (6).svg" alt="linkdin Icon"/>
      </div>
    </div>
   
   </div>

   <div class="speaker-details__right">
   <div class="speaker-details__description-container">
      <p>${item.description}</p>
    </div>
 </div>
  </div>


`;
  detailsSection.classList.remove("hidden");
}

function closeDetails() {
  console.log("closeDetails");
  document.getElementById("speaker-details").classList.add("hidden");
}

generateCards();
