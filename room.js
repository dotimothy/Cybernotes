function enterRoom() {
	var name = prompt("Enter room name:");
	var password = prompt("Enter password");
	var login = document.getElementById('login');	
	var demo = document.getElementById('demo');
	if(name = "euphonium" && password == "euphonium") {
		login.setAttribute("style","display:none");
		demo.setAttribute("style","display:block");
		return name;
	}
	else if(input != "") {
		alert("Wrong room name/password. Please try again");
	}
	else {
		return;	
	}
}
