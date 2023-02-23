function searchByName(query) {
    const searchNameArr = Array();
    for(let i in PERSONS_DD){
        if(PERSONS_DD[i].name.toLowerCase().includes(query.toLowerCase())){
            searchNameArr.push(PERSONS_DD[i]);
        }
    }
    return searchNameArr
}

const searchInput = document.getElementById("searchBar");
searchInput.addEventListener("input", function(event){
    const query = event.target.value;
    const results = searchByName(query);
    const table = document.getElementById("myTable");
    table.innerHTML = "";
    addTableData(results,  "beforeend");
});
