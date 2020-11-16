// Variables

let currency__one = document.getElementById("currency_one");
let amount__one = document.getElementById("amount_one");

let currency__two = document.getElementById("currency_two");
let amount__two = document.getElementById("amount_two");
//console.log(amount__two);

let swap__botton = document.getElementById("rate");
let rate = document.querySelector(".rate");

// Fetch exchange rates and update the Dom
function calculate(){
    const currencyOne = currency__one.value;
    const currencyTwo = currency__two.value;
    //console.log(currencyOne, currencyTwo);
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
      
       let dateRate = data.rates[currencyTwo];
       amount__two.value = (amount__one.value * dateRate).toFixed(2);

       rate.innerHTML = `${amount__one.value} ${currencyOne} = ${amount__two.value} ${currencyTwo}`
    })

}


//Event listeners
currency__one.addEventListener("change", calculate);
amount__one.addEventListener("input", calculate);
currency__two.addEventListener("change", calculate);
amount__two.addEventListener("input", calculate);


swap__botton.addEventListener("click", ()=>{

    const temp = currency__one.value;
    currency__one.value = currency__two.value;
    currency__two.value = temp;

    calculate();
});




calculate();