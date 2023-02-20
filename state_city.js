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