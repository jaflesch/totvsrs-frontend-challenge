class UserRepository {
    constructor() {
        this.user = [];
    }

    async createUser(userData) {
        if(sessionStorage.getItem('user'))
        {
            this.user = JSON.parse(sessionStorage.getItem('user'))
        }
        const idValue = new Uint32Array(10);
        const id = global.crypto.getRandomValues(idValue);
        
        Object.assign(userData,
            {
            id: id[1]
        })
        
        this.user.push(userData);
        sessionStorage.setItem('user', JSON.stringify(this.user));
        return userData;
    }


    async findUserByEmail(email) {
        if(sessionStorage.getItem('user'))
        {
            this.user = JSON.parse(sessionStorage.getItem('user'))
        }
        const findUser = this.user.find(user => user.email === email);
        return findUser;
    }

}

export default UserRepository;