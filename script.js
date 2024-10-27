const x = parseInt(prompt("Enter x (Height of Christmas tree):"),10);

const tree = document.createElement("div");
tree.className = "tree";
document.body.appendChild(tree);

for (let i = 0; i < x; i++) {
let row = "";

    for (let j = 0; j < x - i - 1; j++) {
        row += " ";}

        
    for (let j = 0; j < i * 2 + 1; j++) {
        if (j === 0 || j === i * 2) {
            row += `<span class="red">*</span>`;
        } 
        else {
            row += `<span class="green"> | </span>`;
        }
        }

    const building = document.createElement("div");
    building.innerHTML = row;
    tree.appendChild(building);
    }

const star = document.createElement("div");
star.className = "yellow-star";
star.innerHTML = "★";
tree.insertBefore(star, tree.firstChild);

