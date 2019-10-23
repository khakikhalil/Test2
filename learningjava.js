
const h1 = document.queryselector('h1');
const paragraph = document.queryselector('.paragraph')
const image = document.queryselector('#image1');

paragraph.innerHTML = "Khalil Pitter"

h1.addEventListener('click', callback() =>
	{
		if(h1.style.color === "black"){
			h1.style.color = "blue";
		}
		else{
			h1.style.color = "black";
		}
	}