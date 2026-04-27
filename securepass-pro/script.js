function generatePassword(){

let chars="abcdefghijklmnopqrstuvwxyz";

if(document.getElementById("uppercase").checked)
chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if(document.getElementById("numbers").checked)
chars += "0123456789";

if(document.getElementById("symbols").checked)
chars += "@#$%&";

let length=document.getElementById("length").value;

let password="";

for(let i=0;i<length;i++){

password += chars.charAt(
Math.floor(Math.random()*chars.length)
);

}

document.getElementById("password").value=password;

}



function analyzePassword(){

let pass=document.getElementById("password").value;

let commonPasswords=[
"123456",
"password",
"admin",
"qwerty",
"password123"
];

let score=0;

if(pass.length>=8)
score++;

if(/[A-Z]/.test(pass))
score++;

if(/[0-9]/.test(pass))
score++;

if(/[@#$%&]/.test(pass))
score++;

let bar=document.getElementById("bar");


if(score<=2){

document.getElementById("strength").innerHTML=
"Weak Password";

bar.style.width="35%";
bar.style.background="red";

}

else if(score==3){

document.getElementById("strength").innerHTML=
"Medium Password";

bar.style.width="65%";
bar.style.background="orange";

}

else if(score==4){

document.getElementById("strength").innerHTML=
"Very Strong Password";

bar.style.width="100%";
bar.style.background="green";

}


/* Breach Check */

if(commonPasswords.includes(pass)){

document.getElementById("breach").innerHTML=
"⚠ Common breached password detected";

}

else{

document.getElementById("breach").innerHTML=
"No common breach risk found";

}


/* Entropy Score */

let entropy=pass.length*4;

document.getElementById("entropy").innerHTML=
"Entropy Score: "+entropy+" bits";

}



function copyPassword(){

let pass=document.getElementById("password");

navigator.clipboard.writeText(pass.value);

alert("Password Copied!");

}



function togglePassword(){

let pass=document.getElementById("password");

if(pass.type=="password"){
pass.type="text";
}
else{
pass.type="password";
}

}