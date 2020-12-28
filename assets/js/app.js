localStorage.setItem("page", "home");

if (localStorage.getItem("page") == "home"){
	$("#body-dynamic").loadTemplate("views/login.html");
}

function isUndefinedOrEmpty(text){
    if(text === undefined || text == null || text.trim() === '')
        return true;
    return false;
}