let star_war =document.getElementById("starwar");
let id;
async function searchStarwar(){
    try{
        const search=document.getElementById("search").value
        let res= await fetch(`https://swapi.dev/api/people/?search=${search}`)
        let data =await res.json()
        
        return data;
    }catch(err){
        console.log(err)
    }
}

function appendData(results){
    star_war.innerHTML=null;
    results.forEach(function(el){
        let div=document.createElement("div")
        let div1=document.createElement("div")
        div1.setAttribute("id","flex")

        let name =document.createElement("p")
        name.setAttribute("id","name")
        name.innerText=el.name;
        let doy=document.createElement("p")
        doy.innerText=el.birth_year;
        let gender=document.createElement("p")
        gender.innerText=el.gender;
        div1.append(name,gender)
        div.append(div1,doy)
        star_war.append(div)
      
    })
}

async function main(){
    let data=await searchStarwar();
    if(data==undefined){
        return false
    }
    appendData(data.results);
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id =setTimeout(function(){
        func()
    },delay);

}