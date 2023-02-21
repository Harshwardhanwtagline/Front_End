const COUNTRY_STATE_CITY_DD = { 
    "india": {
      "gujarat": ["Surat", "Rajkot", "Jamnagar", "Vadodara"],
      "up": ["Kanpur", "Agra", "Noida", "Saharanpur"],
      "dehli": ["Gokalpuri", "New-Dehli", "Mandoli", "Taj-Pul"]
    },
    "usa": { 
      "texas": ["Austin", "SanAntonio", "Dallas", "Houston"],
      "chicago": ["Lyons", "ForestPark", "RiverForest", "Lincolnwood"],
      "lasVegas": ["SpringValley", "Boulder", "Paradise", "Henderson"]
    }
  };
function getCountryValue(){
    let countryDropdown = document.getElementById("country").value;
    var stateDropdown = document.getElementById("states");
    stateDropdown.innerHTML = ""
    if (data.hasOwnProperty(countryDropdown)){
        var states = Object.keys(COUNTRY_STATE_CITY_DD[countryDropdown]);
    }
    for (var index = 0; index < states.length; index++) {
        var option = document.createElement("option");
        option.text = states[index].toUpperCase();
        stateDropdown.add(option);
      }
}

function getStateValue(){
    let countryDropdown = document.getElementById("country").value;
    let stateDropdown = document.getElementById("states").value.toLowerCase();
    var cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = ""

    if (data[countryDropdown].hasOwnProperty(stateDropdown)){
        var cities = data[countryDropdown][stateDropdown];
    };

    for (var index = 0; index < cities.length; index++) {
        var option = document.createElement("option");
        option.text = cities[index].toUpperCase();
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
    name =  document.getElementById("name").value;
    email =  document.getElementById("email").value;
    gender = getSelectedRadio();
    hobbies = getSelectedCheckboxes();
    country = document.getElementById("country").value;
    states = document.getElementById("states").value;
    city = document.getElementById("city").value;

    console.log(name, email, gender, hobbies, country, states, city)

}
window.onload = function(){
    for(let data of person_data){
        let table = document.getElementById("myTable");
        let newRow = `<tr><td>${data["name"]}</td><td>${data["mail"]}</td><td>${data["gender"]}</td><td>${data["hobbies"]}</td><td>${data["country"]}</td><td>${data["state"]}</td><td>${data["city"]}</td></tr>`;
        table.insertAdjacentHTML("beforeend", newRow);
    }
}