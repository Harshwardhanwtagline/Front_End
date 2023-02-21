 
        
        const person_data = [{"name": "Harsh", "mail":"Hvwaghela@", "gender":"male", "hobbies": ["sports"], "country":"india", "state":"gujarat", "city":"surat"}, 
        {"name": "Harry", "mail":"Harrywaghela@", "gender":"male", "hobbies": ["sports", "Reading"], "country":"india", "state":"gujarat", "city":"surat"}]
        window.onload = function(){
            for(let data of person_data){
                let table = document.getElementById("myTable");
                let newRow = `<tr><td>${data["name"]}</td><td>${data["mail"]}</td><td>${data["gender"]}</td><td>${data["hobbies"]}</td><td>${data["country"]}</td><td>${data["state"]}</td><td>${data["city"]}</td></tr>`;
                table.insertAdjacentHTML("beforeend", newRow);
            }
        }
