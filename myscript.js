let firstName;
let lastName;
let favouriteColor;
let superSafePassword;
let myH2;

alert`Crea la tua password super sicura!`;

firstName = prompt("Qual è il tuo nome?");

console.log(firstName);

lastName = prompt("Qual è il tuo cognome?");

console.log(lastName);

favouriteColor = prompt("Qual è il tuo colore preferito ? ");

console.log(favouriteColor);

superSafePassword = `Password: ${firstName}${lastName}${favouriteColor}21`;

console.log(superSafePassword);

alert` La tua password super sicura è....`;

myH2 = document.getElementById('password');
myH2.innerText = superSafePassword;





