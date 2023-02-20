function getCountryValue(){
    let countryDropdown = document.getElementById("country").value;
    var stateDropdown = document.getElementById("states");
    stateDropdown.innerHTML = ""
    if(countryDropdown.toLowerCase()=="india"){
        var states = ["Gujarat", "UP", "Dehli"]
    }else if(countryDropdown.toLowerCase()=="usa"){
        var states = ["LasVegas", "Chicago", "Texas"]
    }

    for (var index = 0; index < states.length; index++) {
        var option = document.createElement("option");
        option.text = states[index];
        stateDropdown.add(option);
      }
}

function getStateValue(){
    let stateDropdown = document.getElementById("states").value;
    var cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = ""
    if (stateDropdown.toLowerCase()=="gujarat"){
        var cities = ["Surat", "Rajkot", "Jamnagar", "Vadodara"]
    }else if(stateDropdown.toLowerCase()=="dehli"){
        var cities = ["Gokalpuri", "New-Dehli", "Mandoli", "Taj-Pul"]
    }else if(stateDropdown.toLowerCase()=="up"){
        var cities = ["Kanpur", "Agra", "Noida", "Saharanpur"]
    }else if (stateDropdown.toLowerCase()=="chicago"){
        var cities = ["Lyons", "ForestPark", "RiverForest", "Lincolnwood"]
    }else if (stateDropdown.toLowerCase()=="texas"){
        var cities = ["Austin", "SanAntonio", "Dallas", "Houston"]
    }else if (stateDropdown.toLowerCase()=="lasvegas"){
        var cities = ["SpringValley", "Boulder", "Paradise", "Henderson"]
    }

    for (var index = 0; index < cities.length; index++) {
        var option = document.createElement("option");
        option.text = cities[index];
        cityDropdown.add(option);
      }
}

function getSelectedRadio(){
    var radios = document.getElementsByName("gender");
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked) {
            return radios[i].value;
            }
        }
    }
function getSelectedCheckboxes() {
    var checkboxes = document.getElementsByName("hobbies");
    var selected = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }
        }
    return selected;
    }
const person_data = [{"name": "Harsh", "mail":"Hvwaghela@", "gender":"male", "hobbies": ["sports"], "country":"india", "state":"gujarat", "city":"surat"}, 
        {"name": "Harry", "mail":"Harrywaghela@", "gender":"male", "hobbies": ["sports", "Reading"], "country":"india", "state":"gujarat", "city":"surat"}] 

function addData(){
    let name, email, country, hobbies, states, city;
    name =  getElementById("name").value;
    email =  getElementById("email").value;
    gender = getSelectedRadio();
    hobbies = getSelectedCheckboxes();
    country = getElementById("country").value;
    states = getElementById("states").value;
    city = getElementById("city").value;

    console.log(name, email, gender, hobbies, country, states, city)

}
window.onload = function(){
    for(let data of person_data){
        let table = document.getElementById("myTable");
        let newRow = `<tr><td>${data["name"]}</td><td>${data["mail"]}</td><td>${data["gender"]}</td><td>${data["hobbies"]}</td><td>${data["country"]}</td><td>${data["state"]}</td><td>${data["city"]}</td></tr>`;
        table.insertAdjacentHTML("beforeend", newRow);
    }
}