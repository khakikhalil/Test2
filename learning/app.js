const h1 = document.querySelector('h1');
h1.addEventListener('mouse over', callback = ()=>{
	let userNumber1 = prompt("Give me a number you would like to see the square root of!")
	let userNumber2 = prompt("Give me anpother number you would like to see the square root of!")
	let numbers = [];
	numbers.push(userNumber1);
	numbers.push(usernumber2)
	let rootedNumbers = numbers.map(x=>Math.sqrt(x));
	h1.innerHTML = rootedNumbers;
	h1.style.background = "red"


})