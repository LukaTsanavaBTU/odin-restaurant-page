import "./index.css";
import drawHome from "./home";
import drawMenu from "./menu";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const content = document.querySelector("#content");

homeButton.addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(drawHome());
});

menuButton.addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(drawMenu());
});