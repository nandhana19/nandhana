let url="https://api.openweathermap.org/data/2.5/weather?q= bengaluru&appid=bd81bf3fbf4e95a7ffaed66dbfcd56ea"


let cityInput=document.getElementaryById("city")
let searchBtn=document.querySelector("#search-btn")
searchBtn.addEventListener("click",()=>{
    let city=cityInput.value.trim()
    if (city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd81bf3fbf4e95a7ffaed66dbfcd56ea`)
        .then(response=> response.json())
        .then(data=> console.log(data))
        .catch(error=> console.log(error))
}  
else{
    alert("First write the city name")
}


})
