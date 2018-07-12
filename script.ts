//********************* SELECTORS *********************
var addItemButton    = document.querySelector(".userinput-button")!;
var itemToAddTxt     = document.querySelector<HTMLInputElement>(".userinput")!;
var shoppingList     = document.querySelector(".shopping-list")!;
var doneCheckboxList = shoppingList.querySelectorAll(".todo-check");
var deleteButtonList = document.querySelectorAll(".delete");

//**************************** METHODS ********************************

//process adding to do
function addItemHandler(): void {
    if(itemToAddTxt.value.length > 0) {
		let newListItem = document.createElement("li");
		let todoLabel = document.createElement("label");
		todoLabel.appendChild(document.createTextNode(itemToAddTxt.value));

		//each label around to do text has name - to cross it out
		todoLabel.className = "todo";
		newListItem.appendChild(todoLabel);

		let newDeleteButton = document.createElement("button");
		newDeleteButton.appendChild(document.createTextNode("delete"));
		newDeleteButton.className = "delete";
		newDeleteButton.addEventListener("click", deleteHandler);

		//each label around checkbox has name - for detecting when checkbox is clicked
		let doneLabel = document.createElement("label");
		doneLabel.className = "todo-check";

		let checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		doneLabel.appendChild(checkbox);
		doneLabel.appendChild(document.createTextNode("Done"));
		doneLabel.addEventListener("click", checkboxDoneHandler);

		newListItem.appendChild(newDeleteButton);
		newListItem.appendChild(doneLabel);

        shoppingList.appendChild(newListItem);
        itemToAddTxt.value = "";
    }
}

//process adding to do when press Enter
function addItemEnterHandler(event: KeyboardEvent): void {
	//button: HTMLButtonElement, event: Event
    if(event.which === 13) {
        addItemHandler();
    }
}

//cross off the done item
function checkboxDoneHandler(event: Event): void {
	//change an elements class with toggling:
	//https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript/196038

	let checkboxElement = event.srcElement!;
	let parent = checkboxElement.parentElement!.parentElement!;
	parent.querySelector(".todo")!.classList.toggle("done");
}

//delete a to do item
function deleteHandler(event: Event): void {
	event.srcElement!.parentElement!.remove();
}

//************** EVENT LISTENERS ********************

//add event listeners for checkboxes
for(let i=0; i<doneCheckboxList.length; i++) {
	doneCheckboxList[i].addEventListener("click", checkboxDoneHandler);
}

//add event listeners for delete buttons
for(let i=0; i<deleteButtonList.length; i++) {
	deleteButtonList[i].addEventListener("click", deleteHandler);
}

//add event listeners for pressing Enter key or clicking Enter button
itemToAddTxt.addEventListener("keypress", addItemEnterHandler);
addItemButton.addEventListener("click",   addItemHandler);