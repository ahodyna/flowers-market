const usersDB = [
    {
        "login": "kavabanga",
        "password": "123"
    }
]

export default {
    loginUser: function (login, password) {
        const existedUser = usersDB.find(user => user.login === login && user.password === password)

        if (existedUser != null) {
            const token = 'tok' + (Math.ceil(Math.random() * 1000000))
            existedUser.token = token
            return existedUser    
        } else {
            return null
        }
    },
    authorizeUser: function (token) {
        console.log(token, usersDB)
        return usersDB.find(user => user.token != undefined && user.token === token)
    }
}

