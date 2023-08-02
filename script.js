const accessKey = "kzgyuMwK4pqzqCDxB5yACa_lUV6aj3tcyjiYjAOFqNM";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

const animals = [
    "Lion",
    "Cat",
    "Starfish",
    "Raccoon",
    "Robin",
    "Polar Bear",
    "Chameleon",
    "Zebra",
    "Blue Jay",
    "Monkey",
    "Elephant",
    "Tiger",
    "Giraffe",
    "Dolphin",
    "Kangaroo",
    "Penguin",
    "Sloth",
    "Koala",
    "Ostrich",
    "Fox",
    "Llama",
    "Gorilla",
    "Cheetah",
    "Panda",
    "Jaguar",
    "Otter",
    "Flamingo",
    "Peacock",
    "Octopus",
    "Lobster",
    "Squirrel",
    "Hedgehog",
    "Hummingbird",
    "Crocodile",
    "Pufferfish",
    "Gazelle",
    "Cobra",
    "Wombat",
    "Woodpecker",
    "Toucan",
    "Moose",
    "Chinchilla",
    "Hippopotamus",
    "Chimpanzee",
    "Salamander",
    "Pangolin",
  ];

let inputData = "";
let page = 1;

async function searchImages(defaulter) {

    inputData = inputEl.value;
    if(!inputData)
    {
        inputData = defaulter;
    }
    console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const divEl = document.createElement("div");
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        divEl.appendChild(imageLink);
        imageWrapper.appendChild(divEl);
        searchResults.appendChild(imageWrapper);

    });

    page++
    if (page > 1) {

        showMore.style.display = "block";
    }
}



formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});


showMore.addEventListener("click", () => {
    searchImages();
});


  
  function getRandomAnimal() {
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
  }
  
  // Example usage:
  console.log(getRandomAnimal()); // Outputs a random animal name
  searchImages(getRandomAnimal())
  