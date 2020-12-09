let users = [
    {
        id: 1,
        nome: "user",
        email: "user@user.com.br",
        senha: "12345"
    }
];

let todoListData = [

    {
        id: 1,
        userID: 1,
        titulo: "",
        descricao: "",
        data: "2020-12-07T01:40",
        status: 1
    }
]

function initApp()
{
    document.getElementById("inputEmail").focus();
    setCache("users",users);
    setCache("todoListData", todoListData);

}