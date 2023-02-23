const PERSONS_DD = [
            {"name": "Harsh Waghela", "mail":"Hvwaghela@gmail.com", "age":23, "gender":"male", "hobbies": ["Sports"], "country":"USA", "state":"LASVEGAS", "city":"BOULDER"}, 
            {"name": "Harry Waghela", "mail":"Harrywaghela@gmail.com", "age":50, "gender":"male", "hobbies": ["Sports", "Reading"], "country":"INDIA", "state":"GUJARAT", "city":"SURAT"},
            {"name": "Brad Google", "mail":"Brad22@gmail.com", "age":40, "gender":"female", "hobbies": ["Reading"], "country":"USA", "state":"CHICAGO", "city":"LYONS"},
            {"name": "Alia Shake", "mail":"shake23@gmail.com", "age":32, "gender":"female", "hobbies": ["Sports", "Travelling"], "country":"INDIA", "state":"UP", "city":"KANPURS"},
            {"name": "Meet Patel", "mail":"patel001@gmail.com", "age":27, "gender":"male", "hobbies": ["Sports", "Reading", "Travelling"], "country":"USA", "state":"CHICAGO", "city":"LYONS"}
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
