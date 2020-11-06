
function setItemCache(key, data) {
    let lsData = JSON.stringify({
        data: data
    });
    localStorage.setItem(key, lsData);
}

function getItemCache(key) {
    var data = JSON.parse(localStorage.getItem(key));
    if (data !== null) {
        data = JSON.parse(localStorage.getItem(key));
        return data;
    } else {
        return false;
    }
}