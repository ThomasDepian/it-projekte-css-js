function neuePizza() {
    const zutatenBoxen = document.querySelectorAll('input[type=checkbox]:checked');
    let zutaten = "";
    for (const zutat of zutatenBoxen) {
        zutaten += zutat.name + ", ";
    }

    const kaeseButtons = document.getElementsByName("käse");
    for (const kaeseButton of kaeseButtons) {
        if (kaeseButton.checked) {
            zutaten += kaeseButton.value;
        }
    }

    const pizzaName = document.getElementById('pizza-name').value;

    if (pizzaName.length > 0) {
        const neuesElement = document.createElement("p");
        neuesElement.innerText = `Pizza ${pizzaName}; Zutaten: ${zutaten}.`;
        document.getElementById('deine-pizzen-box').appendChild(neuesElement);
    } else {
        alert("Achtung! Die Pizza braucht einen Namen!");
    }
}