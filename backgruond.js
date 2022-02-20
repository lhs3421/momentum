const bgImage = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const imgRandom = bgImage[Math.floor(Math.random() * bgImage.length)];

const img = document.createElement("img");
document.body.appendChild(img);
img.src = `img/${imgRandom}`;
img.classList.add("position");
