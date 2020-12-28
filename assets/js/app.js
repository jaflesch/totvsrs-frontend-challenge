localStorage.setItem("page", "home");

if (localStorage.getItem("page") == "home"){
	$("#body-dynamic").loadTemplate("views/login.html");
}