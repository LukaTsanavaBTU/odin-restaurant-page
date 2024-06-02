import "./index.css";
import drawHome from "./home";
import drawMenu from "./menu";
import drawAbout from "./about";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const content = document.querySelector("#content");

content.appendChild(drawHome());

homeButton.addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(drawHome());
});

menuButton.addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(drawMenu());
});

aboutButton.addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(drawAbout());
});

