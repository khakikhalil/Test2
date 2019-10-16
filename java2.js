function Angles() {
	var Angle1 = prompt("Give 1st angle");
	var Angle2 = prompt("Give 2nd angle");
	var Angle3 = 180 - Angle1 - Angle2;
	alert("The third angle is: " + Angle3);
}

function Century() {
	var Year1 = prompt("Please, enter a year. I can calculate and tell you the century.")
	var Century1 = Math.floor((Year1 - 1) / 100) + 1;
	alert("The year is in the " + Century1 + "st century.");

}

//*	var Century1 = ((Year1 - 1) / 100) + 1;*//

function Numbers1(){
  for(var i = 1; i<=100; i++){
   if(i%4 ===0 && i%10 ===0) {
   	console.log("Tenfour!")
   } 

   else if(i%4 ===0) {
   	console.log("Four")
   } 

   else if(i%10 ===0) {
   	console.log("Ten")
   }
   else{
   	console.log(i);
   }
}
  }