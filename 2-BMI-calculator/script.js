const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
 e.preventDefault();
 const height = parseInt(document.querySelector("#height").value);
 const weight = parseInt(document.querySelector("#weight").value);
 const results = document.querySelector("#results");
 const warning = document.querySelector("#warning");
 const cancel = document.querySelector("#cancel");


 if (height === "" || height < 0 || isNaN(height)) {
  document.getElementById('warning').style.display = 'block';
  warning.innerHTML = "Please give a valid height";
  setTimeout(function(){
    document.getElementById('warning').style.display = 'none';
  },3000);
}
  
  
  else if (weight === "" || weight < 0 || isNaN(weight)) {
  document.getElementById('warning').style.display = 'block';
  warning.innerHTML = "Please give a valid weight";
  setTimeout(function(){
    document.getElementById('warning').style.display = 'none';
  },3000);
 } 
 
 else {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let msg = "";
  if (bmi < 18.6) msg = "under Weight";
  else if (bmi >= 18.6 && bmi < 24.9) msg = "Normal";
  else msg = "overWeight";
  results.innerHTML = `
        <span>Your BMI is ${bmi} and You are in ${msg} Range</span>
       `;
  document.getElementById('results').style.display = 'block';
 }
});
