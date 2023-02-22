function getSelectedRadio(){
    let radios = document.getElementsByName("gender");
    for (let index = 0; index < radios.length; index++){
        if (radios[index].checked) {
            return radios[index].value;
            }
        }
    }
function getSelectedCheckboxes() {
    let checkboxes = document.getElementsByName("hobbies");
    let selected = [];
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            selected.push(checkboxes[index].value);
        }
    }
    return selected;
    }


function getFormValue(){
    let name, email, age, country, hobbies, states, city;
    // getting all value from form.
    name =  document.getElementById("name").value;
    email =  document.getElementById("email").value;
    age = document.getElementById("age").value;
    gender = getSelectedRadio();
    hobbies = getSelectedCheckboxes();
    country = document.getElementById("country").value;
    states = document.getElementById("states").value;
    city = document.getElementById("city").value;
    
    // I have stored data in user input data in object and return it.
    return {"name": name, "mail":email, "age":age, "gender":gender, "hobbies": hobbies, "country":country, "state":states, "city":city}
}

function addData(){

    const USER_INPUT_DATA = getFormValue()
    PERSONS_DD.push(USER_INPUT_DATA)
    let USER_INPUT_DATA_INDEX = PERSONS_DD.indexOf(USER_INPUT_DATA)

    // i have created new_table_data template string so that i can insert in table.    
    new_table_data = `<tr><td>${USER_INPUT_DATA_INDEX+1}</td><td>${USER_INPUT_DATA["name"]}</td><td>${USER_INPUT_DATA["mail"]}</td><td>${USER_INPUT_DATA["age"]}</td><td>${USER_INPUT_DATA["gender"]}</td><td>${USER_INPUT_DATA["hobbies"]}</td><td>${USER_INPUT_DATA["country"]}</td><td>${USER_INPUT_DATA["state"]}</td>
    <td>${USER_INPUT_DATA["city"]}</td><td><button id="delete" name="delete" onclick="onDelete(${USER_INPUT_DATA_INDEX}) "type="button">Delete</button></td><td><button id="edit" onclick="onUpdate(${USER_INPUT_DATA_INDEX})" name="edit" type="button">Edit</button></td></tr>`;
    table.insertAdjacentHTML("beforeend", new_table_data);
    
    // clearing input data from form using reset() , after the data is display to the table 
    document.querySelector('#myForm').reset();
}