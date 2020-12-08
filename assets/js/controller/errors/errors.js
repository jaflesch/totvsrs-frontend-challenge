
/** ALERTS LOGIN **/

function mostrarErro(text) {
    document.getElementById('inner-alert').innerHTML = text;
    document.getElementById('alert').style.display = 'block';
    esconderAlert();

}


function esconderAlert() {
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none';
    }, 6000);
}

/** ALERTS CADASTRO*/

function esconderAlertCadastro()
{
    setTimeout(() => {
        document.getElementById("alert-cadastro").style.display = 'none';
    },6000);
}

function mostrarErroCadastro(text)
{
    document.getElementById("inner-alert-cadastro").innerHTML = text;
    document.getElementById("alert-cadastro").style.display = 'block';
    esconderAlertCadastro();
}
