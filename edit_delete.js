function replaceButtonsWithSubmit() {
    let originalButton = document.createElement("button");

    // Creating the submit button element.
    originalButton.id = "button1";
    originalButton.name = "submit";
    originalButton.type = "button";
    originalButton.textContent = "Submit";
    originalButton.addEventListener("click", addData);
  
    let updateButton = document.getElementById("update");
    let cancleButton = document.getElementById("cancle");

    // now replacing the submit button element with update button element.
    updateButton.replaceWith(originalButton);

    // at last removing the cancle button element from Form.
    cancleButton.remove();
  }

function updateTable(){
    const table = document.getElementById("myTable");
    table.innerHTML = "";
    addTableData(PERSONS_DD,  "beforeend");
}

function onDelete(index){
    // Deleting the particular object form PERSONS_DD static array using splice function.
    PERSONS_DD.splice(index, 1)

    // calling the updateTable() function to update the table.
    updateTable();
}

function onCancleButton(){

    // Now reset the form inputs.
    document.getElementById('myForm').reset();

    // i have make replaceButtonsWithSubmit() to replace update and cancle button with submit button.
    replaceButtonsWithSubmit();
}

function onEditButton(index){
    // I have getFormValue to get all the value that user enter, and its return in object. 
    const USER_UPDATE_DATA = getFormValue()

    // now replacing the PERSONS_DD[index](old object) with USER_UPDATE_DATA(new object)
    PERSONS_DD[index] = USER_UPDATE_DATA

    // calling the updateTable() function to update the table.
    updateTable();

    // Now reset the form inputs.
    document.getElementById('myForm').reset();

    // i have make replaceButtonsWithSubmit() to replace update and cancle button with submit button.
    replaceButtonsWithSubmit();
}


function onUpdate(index){
    const form = document.getElementById("myForm");

    // adding the value to main form.
    form.elements["name"].value = PERSONS_DD[index]["name"];
    form.elements["email"].value = PERSONS_DD[index]["mail"];
    form.elements["age"].value = PERSONS_DD[index]["age"];
    form.elements["gender"].value = PERSONS_DD[index]["gender"];
    form.elements["country"].value = PERSONS_DD[index]["country"].toUpperCase();

    // Adding Value to CheckBox Element in HTML.
    const hobby_checkboxes = document.getElementsByName('hobbies');
    for (let box_index = 0; box_index < hobby_checkboxes.length; box_index++) {
        if (PERSONS_DD[index]["hobbies"].includes(hobby_checkboxes[box_index].value)) {
            hobby_checkboxes[box_index].checked = true;
        }
    }

    // Creating New Cancle Button
    let cancleButton = document.createElement("button");
    cancleButton.id = "cancle";
    cancleButton.name = "cancle";
    cancleButton.type = "button";
    cancleButton.textContent = "Cancle";
    cancleButton.addEventListener("click", onCancleButton);


    // Creating New Updated Button
    let updateButton = document.createElement("button");
    updateButton.id = "update";
    updateButton.name = "update";
    updateButton.type = "button";
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", function(){
        onEditButton(index);
      });

    // Replacing Submit button with Cancle and Update Button
    let originalButton = document.getElementById("button1");
    originalButton.replaceWith(updateButton, cancleButton);

}