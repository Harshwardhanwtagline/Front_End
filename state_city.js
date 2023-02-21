
const data = { 
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
        var states = Object.keys(data[countryDropdown]);
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