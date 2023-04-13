const FLAME = ["Friends", "Lovers", "Affectionate", "Marriage", "Enemy","Siblings"];
const form = document.querySelector("form");

const createResultDiv = function (textContent) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  div.id = "result-div";
  h3.innerText = "RESULT:";
  h3.style.marginBottom = "10px";
  p.id = "result";
  p.innerText = textContent;

  document.body.insertBefore(div, document.querySelector("footer"));
  div.appendChild(h3);
  div.appendChild(p);
};

const handleSubmit = function (event) {
  event.preventDefault();

  const name1 = document
    .getElementById("name-1")
    .value.replace(/ /g, "")
    .toLowerCase();
  
  const name2 = document
    .getElementById("name-2")
    .value.replace(/ /g, "")
    .toLowerCase();

  if (!name1 || !name2) {
    alert("Enter the Names");
    return;
  }

  let score = 0;

  for (const letter of name1 + name2) {
    if (name1.indexOf(letter) === -1 || name2.indexOf(letter) === -1) {
      score++;
    }
  }

  if (!document.getElementById("result-div")) {
    createResultDiv(score % 5 === 0 ? FLAME[5] : FLAME[(score % 5) - 1]);
    return;
  }

  const result = document.getElementById("result");
  if (score % 5 === 0) result.innerText = FLAME[4];
  else result.innerText = FLAME[(score % 5) - 1];
};

form.addEventListener("submit", handleSubmit);
