
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

function addData(){
    let name, email, country, hobbies, states, city, new_table_data;
    name =  document.getElementById("name").value;
    email =  document.getElementById("email").value;
    gender = getSelectedRadio();
    hobbies = getSelectedCheckboxes();
    country = document.getElementById("country").value;
    states = document.getElementById("states").value;
    city = document.getElementById("city").value;

    // I have stored data in CURR_OBJ_DATA so that i can push it in PERSONS_DD.
    const USER_INPUT_DATA = {"name": name, "mail":email, "gender":gender, "hobbies": hobbies, "country":country, "state":states, "city":city}
    PERSONS_DD.push(USER_INPUT_DATA)

    // i have created new_table_data template string so that i can insert in table.
    new_table_data = `<tr><td>${USER_INPUT_DATA["name"]}</td><td>${USER_INPUT_DATA["mail"]}</td><td>${USER_INPUT_DATA["gender"]}</td><td>${USER_INPUT_DATA["hobbies"]}</td><td>${USER_INPUT_DATA["country"]}</td><td>${USER_INPUT_DATA["state"]}</td><td>${USER_INPUT_DATA["city"]}</td></tr>`;
    table.insertAdjacentHTML("beforeend", new_table_data);
    
    // clearing input data from form using reset() , after the data is display to the table 
    document.querySelector('#myForm').reset();
}