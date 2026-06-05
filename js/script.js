// --------VARIABLES---------------
// add books
let books = [
  {
    name: "Lord of the Rings",
    image: "lordOfTheRings.jpg",
    description:
      "The story follows the Hobbit Frodo Baggins as he embarks on a perilous quest across Middle-earth to destroy the One Ring, a dark artifact that must be cast into the fires of Mount Doom to defeat the evil Lord Sauron.",
    rating: 0,
  },
  {
    name: "Dune",
    image: "dune.jpg",
    description:
      "The story centers on young Paul Atreides, whose noble family is sent to rule Arrakis - a harsh desert planet and the universe's only source of spice.",
    rating: 0,
  },
  {
    name: "Star Wars",
    image: "starWars.jpg",
    description:
      "A space opera franchise created by George Lucas, set in a galaxy far, far away, featuring epic battles between the forces of good and evil.",
    rating: 0,
  },
  {
    name: "James Bond",
    image: "jamesBond.jpg",
    description:
      "A British intelligence officer who works for the Secret Intelligence Service (SIS) and is known for his charm, wit, and ability to handle dangerous situations.",
    rating: 0,
  },
  {
    name: "Harry Potter",
    image: "harryPotter.jpg",
    description:
      "A young wizard who attends Hogwarts School of Witchcraft and Wizardry and goes on various adventures.",
    rating: 0,
  },
  {
    name: "Spiderman",
    image: "spiderman.jpg",
    description:
      "A superhero who gains spider-like abilities after being bitten by a radioactive spider.",
    rating: 0,
  },
];

// section to hold all the cards
let cardHolderSection = document.getElementById("cardHolderSection");

// add functionality to the sorting button
let sortingBtn = document.getElementById("sortingBtn");
sortingBtn.addEventListener("click", sortCards);

// --------FUNCTIONS---------------
function generateCards(bookList) {
  // generate cards dynamically
  // this function is called when loading the page and when the sorting button is clicked

  bookList.forEach((book) => {
    // generate one card for each book
    // set start color before first click (required for sorting function)
    let ratingColor;
    if (book.rating <= 3) {
      ratingColor = "bg-danger";
    } else if (book.rating <= 7) {
      ratingColor = "bg-warning";
    } else {
      ratingColor = "bg-success";
    }

    cardHolderSection.innerHTML += `
    <div class="col">
          <div class="card my-3">
            <img src="./images/${book.image}" class="card-img-top" alt="${book.name}" />
            <div class="card-body">
              <h5 class="card-title">${book.name}</h5>
              <p class="card-text">${book.description}</p>
              <div
                class="rating-container d-flex justify-content-around align-items-center"
              >
                <p class="cardRating ${ratingColor} rounded m-0 p-2 fs-1.5">${book.rating}/10</p>
                <a class="btn btn-primary ratingBtn">Rate +1</a>
              </div>
            </div>
          </div>
        </div>
    `;
  });
}

function addRatingFunctionality() {
  // add functionality to the rating buttons
  // this is executed after the cards were generated

  let ratingBtns = document.querySelectorAll(".ratingBtn");

  ratingBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      if (books[index].rating < 10) {
        // implement logic
        books[index].rating++;
        // update ROM
        let ratingsNum = document.querySelectorAll(".cardRating")[index];
        // update number on page
        ratingsNum.innerHTML = `${books[index].rating}/10`;
        if (books[index].rating <= 3) {
          document
            .querySelectorAll(".cardRating")
            [index].classList.add("bg-danger");
        } else if (books[index].rating <= 7) {
          document
            .querySelectorAll(".cardRating")
            [index].classList.replace("bg-danger", "bg-warning");
        } else {
          document
            .querySelectorAll(".cardRating")
            [index].classList.replace("bg-warning", "bg-success");
        }
      } else {
        alert("Maximum rating reached!");
      }
    });
  });
}

function sortCards() {
  // sort cards in ascending order of ratings
  let newBookOrder = books.sort(function (a, b) {
    return a.rating - b.rating;
  });
  console.log(newBookOrder);

  // reset card container (result)
  cardHolderSection.innerHTML = "";

  generateCards(newBookOrder);
  addRatingFunctionality();
}

// --------MAIN---------------
// initialize book list when loading the page
generateCards(books);
addRatingFunctionality();
