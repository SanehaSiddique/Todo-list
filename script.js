const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addBtn = document.getElementById("addButton");
addBtn.addEventListener("click", event => {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //for adding cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

listContainer.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();