const result = [];

function generateNumber() {

    if (result.length === 6) return;

    const outcome = Math.floor(Math.random() * 49 + 1);

    for (let i = 0; i < result.length; i++) {
        if (outcome === result[i]) {
            return generateNumber();
        }
    }

    const div = document.createElement("div");

    div.textContent = outcome;
    document.body.appendChild(div);
    result.push(outcome);
}

const buttonGenerate = document.querySelector("button");
buttonGenerate.addEventListener("click", generateNumber);