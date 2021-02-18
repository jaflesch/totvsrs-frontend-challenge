let authStatus

window.onload = () => {
  loadPage('signUp');
}

function loadPage (pageName) {
  xhr = new XMLHttpRequest();

  const contentContainer = document.getElementById('contentContainer')

  xhr.onload = function() {
    if (this.status === 200) {
      contentContainer.innerHTML = xhr.responseText
    } else {
      console.warn('Error loading page content')
    }
  }
  xhr.open('GET', `../../src/views/${pageName}.html`)
  xhr.send()
}


function setupSignUpForm () {
  const signUpForm = document.querySelector('#signUpForm')
  signUpForm.addEventListener('submit', handleCreateAccount)
}

function handleCreateAccount () {


}
