const titleText = "Oi princesa… 💙";
const bodyText = 
"Eu fiz isso pra você porque te amo muito\n\n" +
"Nunca amei tanto uma pessoa igual eu to te amando e quero sempre demonstrar isso pra você,\n" +
"Então saiba que você é tudo pra mim\n\n" +
"É tenho certeza da minha escolha";

let i = 0;
let j = 0;

const title = document.getElementById("title");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

function typeTitle() {
    if (i < titleText.length) {
        title.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 120);
    }
}

function typeText() {
    if (j < bodyText.length) {
        text.innerHTML += bodyText.charAt(j) === "\n" ? "<br>" : bodyText.charAt(j);
        j++;
        setTimeout(typeText, 40);
    }
}

typeTitle();

btn.addEventListener("click", () => {
    btn.style.display = "none";
    typeText();
    startHearts();
});

function startHearts() {
    const hearts = document.querySelector(".hearts");

    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "💙";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 4 + Math.random() * 3 + "s";
        hearts.appendChild(heart);

        setTimeout(() => heart.remove(), 7000);
    }, 300);
}
