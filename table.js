 
        
        const arr = [{"name": "Harsh", "mail":"Hvwaghela@", "gender":"male", "hobbies": ["sports"], "country":"india", "state":"gujarat", "city":"surat"}, 
        {"name": "Harry", "mail":"Harrywaghela@", "gender":"male", "hobbies": ["sports", "Reading"], "country":"india", "state":"gujarat", "city":"surat"}]
        window.onload = function(){
            for(let i of arr){
                var table = document.getElementById("myTable");
                var newRow = `<tr><td>${i["name"]}</td><td>${i["mail"]}</td><td>${i["gender"]}</td><td>${i["hobbies"]}</td><td>${i["country"]}</td><td>${i["state"]}</td><td>${i["city"]}</td></tr>`;
                table.insertAdjacentHTML("beforeend", newRow);
            }
        }
