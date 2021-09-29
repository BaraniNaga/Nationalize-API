function myFunction() {
  var x = document.getElementById("info").value;  
  document.getElementById("name").innerHTML = x;
  get(x);
}
async function get(myFunction) {
  try{
  let data = await fetch(`https://api.nationalize.io/?name=${myFunction}`);
  let result = await data.json();
  let res = create(result);
  }
  catch(err) {
    console.log(err.message)};  
}
function create(res) {
  try {
  let prob = document.querySelector("#result");
  prob.innerText = 
  `Country is ${res.country[0]["country_id"]}, Probability is ${res.country[0].probability}
   Country is ${res.country[1]["country_id"]}, Probability is ${res.country[1].probability}`;
}
catch(err) {
  console.log(err.message)};  
}
document.body.append(prob);