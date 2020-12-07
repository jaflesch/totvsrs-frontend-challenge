function login()
{
    if(!required())
    {
        return false;
    }



}

function required()
{
    if(document.getElementById("inputEmail").value === "")
    {
        document.getElementById("inputEmail").focus();
        mostrarErro("CAMPO EMAIL OBRIGATÓRIO");
        return false;
    }

    if(document.getElementById("inputPassword").value === "")
    {
        document.getElementById("inputPassword").focus();
        mostrarErro("SENHA OBRIGATÓRIA");
        return false;
    }

    return true;
}