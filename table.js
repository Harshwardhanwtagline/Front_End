        const PERSONS_DD = [
            {"name": "Harsh", "mail":"Hvwaghela@", "age":23, "gender":"male", "hobbies": ["Sports"], "country":"usa", "state":"gujarat", "city":"surat"}, 
            {"name": "Harry", "mail":"Harrywaghela@", "age":50, "gender":"male", "hobbies": ["Sports", "Reading"], "country":"india", "state":"gujarat", "city":"surat"}
        ]
        let table = document.getElementById("myTable");

        function addTableData(array, position){
            let index_arr = array.entries();
            for(let data of index_arr){
                let newRow = `<tr><td>${data[0]+1}</td><td>${data[1]["name"]}</td><td>${data[1]["mail"]}</td><td>${data[1]["age"]}</td><td>${data[1]["gender"]}</td><td>${data[1]["hobbies"]}</td><td>${data[1]["country"]}</td><td>${data[1]["state"]}</td>
                <td>${data[1]["city"]}</td><td><button id="delete" name="delete" onclick="onDelete(${data[0]}) "type="button">Delete</button></td><td><button id="edit" onclick="onUpdate(${data[0]})" name="edit" type="button">Edit</button></td></tr>`;
                table.insertAdjacentHTML(position, newRow);
            }
        }
        window.onload = addTableData(PERSONS_DD, "beforeend");
