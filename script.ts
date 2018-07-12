var buttons = document.getElementsByTagName("button");

var button1 = buttons.item(0);
button1 = buttons[0];

var itemToAddTxt = <HTMLInputElement> document.querySelector("#userinput");

function addItem(): void {
    var shoppingList = <Element> document.querySelector("#shopping-list");

    if(itemToAddTxt.value.length > 0) {
        let newItem = document.createElement("li");
        newItem.appendChild(document.createTextNode(itemToAddTxt.value));
        
        shoppingList.appendChild(newItem);
        itemToAddTxt.value = "";
    }
}

function addItemEnter(event: KeyboardEvent): void {
    console.log("keypress>event=" + event.which);
    if(event.which === 13) {
        addItem();
    }
}

itemToAddTxt.addEventListener("keypress", addItemEnter);
button1.addEventListener("click", addItem);