const mudarView = (e) => {

    const appElement = document.querySelector('#appContainer');
    let view = e.target.dataset.view

    switch(view){
        case "ViewLogin":
            case "ViewLogin":  
                appElement.innerHTML = ViewLogin();
                break;
            case "ViewRegistrar":
                appElement.innerHTML = viewRegistrar();
                break;
            case "ViewPrincipal":
                appElement.innerHTML = ViewPrincipal();
                break;
        default:
            break;
    }
}

