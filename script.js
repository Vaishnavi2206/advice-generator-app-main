const apiUrl = 'https://api.adviceslip.com/advice';
let result = "";
let desc = document.getElementById("desc");

function getAdvice(){
    fetch(apiUrl)
    .then(async(response)=>{
        console.log("response",response);
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data); // Handle the data
        result = data.slip.advice;
        console.log(result)
    
        desc.innerHTML = result;
    })
    .catch((error)=>{
        console.log("error",error);
        alert("Oops! An Error occured...")
    });
}



let diceBtn = document.getElementById("dice-btn");
diceBtn.addEventListener('click',()=>{
    desc.innerHTML = "Loading...";
    getAdvice();
})