$('#logout').click(function(e){
    e.preventDefault();

    localStorage.setItem('auth', false);

    $('#body-dynamic').loadTemplate('views/login.html');
    $('#profile').remove();
});

let name = capitalizeFirstLetter(localStorage.getItem('userName'));
$('#userName').html(name);