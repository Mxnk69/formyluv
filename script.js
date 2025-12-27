alert("I love you more than words can explain ❤️");



function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);





const text = `My love,

Every word I write for you comes straight from my heart.
You are my safest place, my happiness, and my forever.
I don’t just love you — I choose you, every single day.`;

let index = 0;
const speed = 50;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML +=
      text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

window.onload = () => {
  if (document.getElementById("typing-text")) {
    typeText();
  }
};
