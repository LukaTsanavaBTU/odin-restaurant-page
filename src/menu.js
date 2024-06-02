import odinImage from "./images/odin-meal.jpg"

function drawMenu() {
    const menuWrapper = document.createElement("div");

    for (let i = 0; i <6; i++) {
        const itemDiv = document.createElement("div");
        const itemName = document.createElement("h2");
        const itemDesc = document.createElement("p");
        const itemPrice = document.createElement("p");
        const itemImage = document.createElement("img");
    
        menuWrapper.classList.add("menu-wrapper");
        itemImage.setAttribute("src", odinImage);
        itemName.textContent = "Meal";
        itemDesc.textContent =  "Delicious meal from the scandinavian fjords"
        itemPrice.textContent = "5.00 $"

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDesc);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemImage);
        menuWrapper.appendChild(itemDiv);
    }
    
    return menuWrapper;
}

export default drawMenu;