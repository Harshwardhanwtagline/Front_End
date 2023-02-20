// const states = ["gujarat", "Dehli", "UP", "kerala"]

function getStateValue(){
    let stateDropdown = document.getElementById("states").value;
    console.log(stateDropdown)
    var cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = ""
    if (stateDropdown.toLowerCase()=="gujarat"){
        var cities = ["Surat", "Rajkot", "Jamnagar", "Vadodara"]
    }else if(stateDropdown.toLowerCase()=="dehli"){
        var cities = ["Gokalpuri", "New-Dehli", "Mandoli", "Taj-Pul"]
    }else if(stateDropdown.toLowerCase()=="up"){
        var cities = ["Kanpur", "Agra", "Noida", "Saharanpur"]
    }else if(stateDropdown.toLowerCase()=="kerala"){
        var cities = ["Kochi", "Kannur", "Malappuram", "Thrissur"]
    }

    for (var i = 0; i < cities.length; i++) {
        var option = document.createElement("option");
        option.text = cities[i];
        cityDropdown.add(option);
      }
}