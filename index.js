document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let circle = document.getElementById("circle");
    let input = document.getElementById("input");
    let button = document.getElementById("button");
    let list = document.getElementById("list");
    let close = document.getElementById("close");
    let open = document.getElementById("open");
    let modal = document.getElementById("modal");
    let btnRandom = document.getElementById("buttonRandom");

    const colorNames = [
        "black",
        "white",
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "gray",
        "lightgray",
        "darkgray",
        "silver",
        "gold",
        "navy",
        "teal",
        "cyan",
        "magenta",
        "lime",
        "olive",
        "maroon"
    ];

    modalShow = (action) => {
        if (action === "open") {
            modal.classList.add("show");
            modal.classList.remove("hide");
        } else if (action === "close"){
            modal.classList.add("hide");
            modal.classList.remove("show");
        }
    }

    // populate list
    populateList = () => {
        for (let i = 0; i < colorNames.length; i++) {
            let color = colorNames[i];
            const listItem = document.createElement("li");
            listItem.innerText = color;
            list.appendChild(listItem);
        }
    }

    populateList();
    

    getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    changeColor = () => {
        let colorValue = input.value;
        let emptyValue = "";
        if (colorValue === "") {
            // alert("You need to provide a color name (:")
            console.log("you need to provide a name");
            button.preventDefault();
        } else if (colorValue == "random") {
            circle.style.backgroundColor = getRandomColor();
            colorValue = emptyValue;
        } else {
            circle.style.backgroundColor = colorValue;
            colorValue = emptyValue;
        }
    }

    randomColor = () => {
        circle.style.backgroundColor = getRandomColor();
    }
    // enter clicker
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            changeColor();
        }
    });

    close.addEventListener("click", () => {
        modalShow("close");
    });
    open.addEventListener("click", () => {
        modalShow("open");
    });
    button.addEventListener("click", changeColor);
    btnRandom.addEventListener("click", randomColor);
}