
var nome , cognome , colore;

nome = prompt("Inserire nome");
nome = nome.toLowerCase();
console.log(nome);

cognome = prompt("Inserire cognome");
cognome = cognome.toLowerCase();
console.log(cognome);

colore = prompt("Inserire colore preferito");
colore = colore.toLowerCase();
console.log(colore);

var pwd;





var i;
var arrNome = [];
var pwd = [];
nome = nome.trim();
var nomeLen = nome.length;

for (i = 0; i < nomeLen; i++) {
    arrNome = nome.split("");
    var x = arrNome[i];


    if (i == 0 || i % 2 == 0){
        x = x.toUpperCase();
    }
    pwd.push(x);
    console.log(pwd);
  } 

console.log(pwd);

// ---------------------------------------------------------------


var i;
var arrCognome = [];
cognome = cognome.trim();
var cognomeLen = cognome.length;

for (i = 0; i < cognomeLen; i++) {
    arrCognome = cognome.split("");
    var x = arrCognome[i];


    if (i == 0 || i % 2 == 0){
        x = x.toUpperCase();
    }
    pwd.push(x);
    console.log(pwd);
  } 

console.log(pwd);



// -----------------------------------------------


var i;
var arrColore = [];
colore = colore.trim();
var coloreLen = colore.length;

for (i = 0; i < coloreLen; i++) {
    arrColore = colore.split("");
    var x = arrColore[i];


    if (i == 0 || i % 2 == 0){
        x = x.toUpperCase();
    }
    pwd.push(x);
    console.log(pwd);
  } 

console.log(pwd);




var password = pwd.toString();
password = password.replace(/,/g, "");
password = password + "21"
console.log(password);

document.getElementById("pwd").innerHTML = password;