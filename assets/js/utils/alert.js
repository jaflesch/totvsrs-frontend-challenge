function showAlert() {
    document.getElementById('alert').style.display = 'block';
    hideAlert();
}

function hideAlert() {
    setTimeout(() => {
        document.getElementById('alert').style.display = 'none';
    }, 5000);
}

function changeTextAlert(text) {
    document.getElementById('inner-alert').innerHTML = text;
}