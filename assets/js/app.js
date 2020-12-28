localStorage.setItem('page', 'home');
localStorage.setItem('auth', false);
localStorage.setItem('userName', '');

if(isUndefinedOrEmpty(localStorage.getItem('users'))){
    localStorage.setItem('users', '{}');
}

if (localStorage.getItem('page') == 'home'){
	$('#body-dynamic').loadTemplate('views/login.html');
}

if(!localStorage.getItem('auth')){
    $('#profile').remove();
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