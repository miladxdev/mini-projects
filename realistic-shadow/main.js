let shadows = document.querySelectorAll(".blur-shadow");

for (const shadow of shadows) {
  shadow.style.backgroundImage = `url(${shadow.previousElementSibling.src})`;
  console.log(document.querySelector("shadow.parentNode"));
}
