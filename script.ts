var buttons = document.getElementsByTagName("button");

var button1 = buttons.item(0);
button1 = buttons[0];

var itemToAddTxt = <HTMLInputElement> document.querySelector("#userinput");

function addItem(): void {
    var shoppingList = <Element> document.querySelector("#shopping-list");

    if(itemToAddTxt.value.length > 0) {
        let newListItem = document.createElement("li");
		newListItem.appendChild(document.createTextNode(itemToAddTxt.value));

		let newDeleteButton = document.createElement("button");
		newDeleteButton.appendChild(document.createTextNode("delete"));

		let doneLabel = document.createElement("label");

		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		doneLabel.appendChild(checkbox);
		doneLabel.appendChild(document.createTextNode("Done"));

		newListItem.appendChild(newDeleteButton);
		newListItem.appendChild(doneLabel);

        shoppingList.appendChild(newListItem);
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