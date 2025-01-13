function getFormvalue(event) {
	event.preventDefault();
    //Write your code here
	let a=document.getElementById("fname").value;
	let b=document.getElementById("lname").value;
   let message=a+b;
	alert(message);
}
