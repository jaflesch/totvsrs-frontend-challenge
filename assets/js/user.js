function getUserIdNext(){
    let users = JSON.parse(localStorage.getItem('users'));
    let id = Object.keys(users).length + 1;
    return id;
}

function addUser(user){
    let users = JSON.parse(localStorage.getItem('users'));
    let key  = 'user' + user.id;
    users[key] = user;
    localStorage.setItem('users', JSON.stringify(users));
}

function getUserByEmail(email){
    let users = JSON.parse(localStorage.getItem('users'));
    if(Object.keys(users).length == 0){
        return '';
    }
    else{
        for (i = 0; i < Object.keys(users).length; i++) {
            let index = Object.keys(users);
            let key = index[i];
            
            if(users[key]['email'] === email)
                return users[key];
        }
        return '';
    }
}