function addItem(): void {
    var shoppingList = <Element> document.querySelector(".shopping-list");

    if(itemToAddTxt.value.length > 0) {
		let newListItem = document.createElement("li");
		let todoLabel = document.createElement("label");
		todoLabel.appendChild(document.createTextNode(itemToAddTxt.value));

		//each label around to do text has name - to cross it out
		todoLabel.className = "todo";
		newListItem.appendChild(todoLabel);

		let newDeleteButton = document.createElement("button");
		newDeleteButton.appendChild(document.createTextNode("delete"));

		//each label around checkbox has name - for detecting when checkbox is clicked
		let doneLabel = document.createElement("label");
		doneLabel.className = "todo-check";

		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		doneLabel.appendChild(checkbox);
		doneLabel.appendChild(document.createTextNode("Done"));
		doneLabel.addEventListener("click", handleClickDone);

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

var buttons = document.getElementsByTagName("button");


var button1 = buttons.item(0);
button1 = buttons[0];

var itemToAddTxt = <HTMLInputElement> document.querySelector(".userinput");

var shoppingList = <Element> document.querySelector(".shopping-list");
var shoppingListCheckboxes = shoppingList.querySelectorAll(".todo-check");
var shoppingListLabels = shoppingList.getElementsByTagName("label");

var todoCheckboxList = shoppingList.querySelectorAll(".todo-check");

function handleClickDone(): void {
	console.log("checkbox clicked");
}

for(let i=0; i<todoCheckboxList.length; i++) {
	todoCheckboxList[i].addEventListener("click", handleClickDone);
}

for(let i=0; i<shoppingListCheckboxes.length; i++) {
	shoppingListCheckboxes[i].addEventListener("click", handleClickDone);
}

itemToAddTxt.addEventListener("keypress", addItemEnter);
button1.addEventListener("click", addItem);

