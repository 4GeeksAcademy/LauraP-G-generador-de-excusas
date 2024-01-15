import "./style.css";
import "./index.html";

let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "the keys ", "the car "];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

document.getElementById("excuse").innerHTML = crearExcusa();

function crearExcusa() {
  for (let n = 3; n < who.length; n++) {
    return (
      who[Math.floor(Math.random() * who.length)] +
      action[Math.floor(Math.random() * action.length)] +
      what[Math.floor(Math.random() * what.length)] +
      when[Math.floor(Math.random() * when.length)]
    );
  }
}
