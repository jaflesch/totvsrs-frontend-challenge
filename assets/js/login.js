$('#btnAcessar').click(function(e){
    e.preventDefault();

    $('#emailHelp').addClass('d-none');
    $('#senhaHelp').addClass('d-none');
    
    let validation = {hasError: false, fields:[]};
    let email = $('#email');
    let senha = $('#senha');

    if(isUndefinedOrEmpty(email.val())){
        validation.hasError = true;
        validation.fields['email'] = 'Email obrigatório.';
    }
    else if(!validateEmail(email.val())){
        validation.hasError = true;
        validation.fields['email'] = 'Email incorreto.';
    }
    
    if(isUndefinedOrEmpty(senha.val())){
        validation.hasError = true;
        validation.fields['senha'] = 'Senha obrigatória.';
    }

    if(validation.hasError){
        if(!isUndefinedOrEmpty(validation.fields['email'])){
            $('#emailHelp').html(validation.fields['email']);
            $('#emailHelp').removeClass('d-none');
        }

        if(!isUndefinedOrEmpty(validation.fields['senha'])){
            $('#senhaHelp').html(validation.fields['senha']);
            $('#senhaHelp').removeClass('d-none');
        }
    }
    else{
        let user = getUserByEmail(email.val());
        if(!isObjectWithAttribute(user)){
            let id = getUserIdNext();
            let vetEmail = email.val().split('@');
            let nome = vetEmail[0];
            let user = {id: id, nome: nome, email: email.val(), senha: senha.val()};
            addUser(user);    
        }
        else if(user.senha !== senha.val()){
            $('#loginAlert').removeClass('d-none');
            return;
        }

        localStorage.setItem('auth', true);
        localStorage.setItem('userName', user.nome);
        $('#profile-dynamic').loadTemplate('views/profile.html');
        $('#body-dynamic').loadTemplate('views/list.html');
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}