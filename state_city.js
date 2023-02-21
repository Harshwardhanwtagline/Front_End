
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

function addOption(dropdown, array){
  for (var index = 0; index < array.length; index++) {
    var option = document.createElement("option");
    option.text = array[index].toUpperCase();
    dropdown.add(option);
  }
  return dropdown;
}
function getCountryValue(){
    let country_dropdown = document.getElementById("country").value;
    var state_dropdown = document.getElementById("states");
    state_dropdown.innerHTML = ""
    if (COUNTRY_STATE_CITY_DD.hasOwnProperty(country_dropdown)){
        var states = Object.keys(COUNTRY_STATE_CITY_DD[country_dropdown]);
    }
    state_dropdown = addOption(state_dropdown, states);
}

function getStateValue(){
    let country_dropdown = document.getElementById("country").value;
    let state_dropdown = document.getElementById("states").value.toLowerCase();
    var city_dropdown = document.getElementById("city");
    city_dropdown.innerHTML = ""

    if (COUNTRY_STATE_CITY_DD[country_dropdown].hasOwnProperty(state_dropdown)){
        var cities = COUNTRY_STATE_CITY_DD[country_dropdown][state_dropdown];
    };
    city_dropdown =  addOption(city_dropdown, cities);
}