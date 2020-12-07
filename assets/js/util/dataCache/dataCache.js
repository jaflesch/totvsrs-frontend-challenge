function setCache(key,data)
{
    let dados = JSON.stringify({
        data: data
    });

    localStorage.setItem(key,dados);
}

function getCache(key)
{
    let dados = JSON.parse(localStorage.getItem(key));
    if (dados !== null) {
        dados = JSON.parse(localStorage.getItem(key));
        return dados;
    } else {
        return false;
    }
}

function removeCache(key) {
    localStorage.removeItem(key);
}