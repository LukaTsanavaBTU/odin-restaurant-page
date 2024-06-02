import odinHam from "./images/odin-ham.jpg"

function drawAbout() {
    const aboutWrapper = document.createElement("div");
    const aboutText = document.createElement("p");
    const aboutImage = document.createElement("img");

    aboutWrapper.classList.add("about-wrapper");
    aboutText.innerHTML = "Come and eat all you can eat. No limits.<br>Eat until you end up in Valhalla.<br>Stuffing your mouth with our food is an honorable way to die!<br>Made For The Odin Project"
    aboutImage.setAttribute("src", odinHam);

    aboutWrapper.appendChild(aboutText);
    aboutWrapper.appendChild(aboutImage);

    return aboutWrapper;

}

export default drawAbout;
