let elForm = document.querySelector('form');
let elInput = document.querySelector('input');
let elResult = document.querySelector('.result');
let elAlerts = document.querySelector('.alerts');


let render = (time, node) => {
    let elResultItem = document.createElement("span");

    elResultItem.setAttribute("class", "result-item");
    node.appendChild(elResultItem);
    let output = elInput.value;
    let interval = setInterval(() => {
        elResultItem.textContent = output;
        output--;
    }, 1000);

    setTimeout(() => {
        elResultItem.style.display = 'none';
        clearInterval(interval);
    }, output * 1000);
    time.value = '';
};

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (elInput.value != '') {
        elAlerts.textContent = '';
        render(elInput, elResult)
    }
    else {
        elAlerts.textContent = 'Please enter number'
    }
});