import odinImage from "./images/odin-meal.jpg"

function drawHome() {
    const homeDivWrapper = document.createElement("div");
    const heroDiv = document.createElement("div");
    const heroTiTle = document.createElement("h2");
    const heroParagraph = document.createElement("p");
    const homeButtons = document.createElement("div");
    const menuButton = document.createElement("button");
    const orderButton = document.createElement("button");
    const image = document.createElement("img");

    homeDivWrapper.classList.add("home-div-wrapper");
    heroDiv.classList.add("hero-text");
    heroTiTle.textContent = "Odin Restaurant";
    heroParagraph.textContent = "Taste the best foods made by Scandinavian gods. We have restaurants all over Valhalla.";
    homeButtons.classList.add("home-buttons");
    menuButton.textContent = "See Our menu";
    orderButton.textContent = "Order Now";
    image.setAttribute("src", odinImage);

    homeButtons.appendChild(menuButton);
    homeButtons.appendChild(orderButton);
    heroDiv.appendChild(heroTiTle);
    heroDiv.appendChild(heroParagraph);
    heroDiv.appendChild(homeButtons);
    homeDivWrapper.appendChild(heroDiv);
    homeDivWrapper.appendChild(image);

    return homeDivWrapper;
}

export default drawHome;
