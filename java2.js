function Angles() {
	var Angle1 = prompt("Please enter a positive integer for your 1st angle.");
	var Angle2 = prompt("Now please enter a second positive integer for your 2nd angle.");
	var Angle3 = 180 - Angle1 - Angle2;
	alert("After doing the math, your third angle is: " + Angle3 + ".");
}

/*Triangles have to have a total of 180 if the angles are all added up
so 180 - angle1 - angle 2 should be angle 3 because you're finding the difference
an example is if angle1 is 30 and angle2 is 40,
180 - 30 - 40 = angle3 and,
angle3 would be 110
*/

function Century() {
	var Year1 = prompt("Please, enter a year. I can calculate and tell you the century it's in.")
	var Century1 = Math.floor((Year1 - 1) / 100) + 1;
  let a = (Math.floor((Year1 - 1) / 100) + 1);  
  a = a.toString();
  if (a.slice(-1) == "1"){
alert("The year is in the " + Century1 + "st century."); 
  }
  else if (a.slice(-1) == "2"){
alert("The year is in the " + Century1 + "nd century.")
}
 else if (a.slice(-1) == "3"){
alert("The year is in the " + Century1 + "rd century.")
}
else{
alert("The year is in the " + Century1 + "th century.")


//*let a =  (Math.floor((Year1 - 1) / 100) +1)  

//*a = str(a)
//*if (a[-1] == 1){
//*  alert("The year is in the " + Century1 + "st century."); 




/* 1800 is in the 18th century but 1801 is in the 19th so by subtracting one from it will be 1799 (which also happens to be in the 18th century). 
1799 divided by 100 would be 17.99, and math.floor will round it down despite only being 1 off of 18 (which it only is because of this specific scenario)
 and then add 1 back to it to find the century. 17 + 1 = 18, meaning 1800 is in the 18th century.
 */


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
}
}