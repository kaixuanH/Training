const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");

// const people = JSON.parse(localStorage.getItem("people")) || []; 
// equivalent to following code
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPerson = {
    name: nameInput.value,
    age: Number(ageInput.value),
  };

  people.push(newPerson);

  localStorage.setItem("people", JSON.stringify(people));

  console.log("people",people);
});
