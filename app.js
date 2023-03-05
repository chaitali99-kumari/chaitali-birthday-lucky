const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber =document.querySelector("#Lucky-number");
const chckBtn = document.querySelector("#check");
const letCheck = document.querySelector("#let-check");

function chckDate() {
  let date = dateOfBirth.value;
  date = date.replaceAll("-" ,"");
  let sum=0;
  if(date&&luckyNumber.value){
  for(let i=0 ; i<date.length;i++)
  {
    sum = sum + Number(date.charAt(i));
  }
  console.log(sum);
  if(sum%luckyNumber.value==0)
  letCheck.innerText = "Bingo !!your birthday is lucky..🎉🎉";
  else
  letCheck.innerText = "your birthday is not lucky.😥";
}
else
 {
  letCheck.innerText = "plz enter both content";
 }
}
chckBtn.addEventListener('click', chckDate);