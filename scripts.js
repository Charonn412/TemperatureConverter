
function fahrenheitConversion(temperature){
    temperature = parseFloat(temperature);
    document.getElementById("celsius").value=(temperature-32)/1.8;
  }

function celsiusConversion(temperature){
  temperature = parseFloat(temperature);
  document.getElementById("fahrenheit").value=(temperature*1.8)+32;
}







//get me the input in the fahrenheit div
/* const fahrenheitInput = document.querySelector('#fahrenheit > input') */
//get me the input in the celsius div
/* const celsiusInput = document.querySelector('#celsius > input')

document.getElementById("myBtn").addEventListener("click", function( ) {
    console.log(celsiusInput.value);
}); */