function enterRoom() {
	var name = prompt("Enter room name:");
	var password = prompt("Enter password");	
	if(name = "euphonium" && password == "euphonium") {
		window.location.href='demo.html';
	}
	else if(input != "") {
		alert("Wrong room name/password. Please try again");
		enterRoom();
	}
	else {
		return;
	}
}