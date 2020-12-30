$('#logout').click(function(e){
    e.preventDefault();

    localStorage.setItem('auth', false);

    $('#body-dynamic').loadTemplate('views/login.html');
    $('#profile').remove();
});

let user = localStorage.getItem('user');
let userName = capitalizeFirstLetter(JSON.parse(user).nome);
$('#user-name').html(userName);