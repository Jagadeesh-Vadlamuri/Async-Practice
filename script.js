let btn = document.getElementById("btn-1");
const divi = document.getElementById("J");
btn.addEventListener("click", happy);

const url = "https://api.openbrewerydb.org/breweries";


async function happy(){
    let result = await fetch(url).then((response)=>response.json());
    divi.innerHTML = "Loading....."
    for(var i=0; i<result.length; i++){
       if(divi.innerHTML ==="Loading....."){
            divi.innerHTML = "";

       }else{
            divi.innerHTML += 
            `<div class="card">
                <div class="card-title">
                    <div class="card-body">
                        <h2>${result[i].id}</h2>
                        <p>${result[i].name}</p>
                        <p>${result[i].brewery_type}</p>
                        <p>${result[i].city}</p>
                        <p>${result[i].state}</p>
                        <p>${result[i].country}</p>
                        <p>${result[i].phone}</p>
                    </div>
                </div>
            </div>`
       }
        
    }
}