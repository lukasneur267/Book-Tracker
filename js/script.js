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
console.log(books);

let result = document.getElementById("result");
console.log(result);

books.forEach((book) => {
  result.innerHTML += `
    <div class="col">
          <div class="card my-3">
            <img src="./images/${book.image}" class="card-img-top" alt="${book.name}" />
            <div class="card-body">
              <h5 class="card-title">${book.name}</h5>
              <p class="card-text">${book.description}</p>
              <div
                class="rating-container d-flex justify-content-around align-items-center"
              >
                <p class="card-rating bg-danger rounded m-0 p-2 fs-1.5">${book.rating}/10</p>
                <a href="#" class="btn btn-primary">Rate +1</a>
              </div>
            </div>
          </div>
        </div>
    `;
});
