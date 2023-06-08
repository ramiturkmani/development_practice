const addBtn = document.getElementById('addBtn');
const select = document.getElementById('colors');
const table = document.getElementById('pixelTable');



const makeARow = () => {

    const tr = document.createElement("tr");
    for (let i = 0; i < 20; i++) {
        const td = document.createElement("td");
        tr.append(td);
    }
    table.append(tr);

    // const box = document.getElementsByTagName("td");
    // console.log(box);
    // box.addEventListener();
};

const pickColor = (event) => {
    console.log(event.target.value);
    chosenColor = event.target.value;
};

const colorize = (event) => {
    let targetElement = event.target;
    if (targetElement.tagName !== "TD") {
        return;
    } else if(targetElement.className === chosenColor) {
        targetElement.className = "";
    } else {
        targetElement.className = chosenColor;
    }
};


addBtn.addEventListener("click", makeARow);
select.addEventListener("change", pickColor);
table.addEventListener("click", colorize);