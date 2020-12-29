if(isUndefinedOrEmpty(localStorage.getItem('auth'))){
    localStorage.setItem('auth', false);
}

if(isUndefinedOrEmpty(localStorage.getItem('users'))){
    localStorage.setItem('users', '{}');
}

if(isUndefinedOrEmpty(localStorage.getItem('list'))){
    localStorage.setItem('list', '{}');
}

if(isUndefinedOrEmpty(localStorage.getItem('page'))){
    localStorage.setItem('page', 'home');
}

let currentPage = localStorage.getItem('page');
if (currentPage == 'home'){
	$('#body-dynamic').loadTemplate('views/login.html');
}
else if(currentPage == 'list'){
    $('#body-dynamic').loadTemplate('views/list.html');
}
else if(currentPage == 'list-add'){
    $('#body-dynamic').loadTemplate('views/list-add.html');
}

if(!JSON.parse(localStorage.getItem('auth'))){
    $('#profile').remove();
}
else{
    $('#profile-dynamic').loadTemplate('views/profile.html');
}

function isUndefinedOrEmpty(text){
    if(text === undefined || text == null || text.trim() === '')
        return true;
    return false;
}

function isObjectWithAttribute(obj){
    if(Object.keys(obj).length > 0){
        return true;
    }
    return false;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function dateFormatBr(date){
    return date.format("HH:MM dd/mm/yyyy");
}