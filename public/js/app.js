class EventSetter {
  static setSignUpEvents() {
    // Evento Submeter Criação de usuário
    document.getElementById('signUpForm').addEventListener('submit', event => {
      event.preventDefault()

      const userName = document.getElementById('userNameInput').value
      const userEmail = document.getElementById('userEmailInput').value
      const userPassword = document.getElementById('userPasswordInput').value
      console.log(userName, userEmail)
      const authenticatedUser = Store.createUser(
        userName,
        userEmail,
        userPassword
      )
      if (authenticatedUser) {
        UI.loadPage('dashboard')
      }
    })

    // Evento Navegar para LogIn
    document
      .getElementById('logInPageLink')
      .addEventListener('click', event => {
        event.preventDefault()
        UI.loadPage('signIn')
      })
  }

  static setSignInEvents() {
    // Evento efetuar LogIn
    document.getElementById('signInForm').addEventListener('submit', event => {
      event.preventDefault()

      const userEmail = document.getElementById('userEmailInput').value
      const userPassword = document.getElementById('userPasswordInput').value
      const authenticatedUser = Store.logInUser(userEmail, userPassword)
      if (authenticatedUser) {
        console.log(authenticatedUser)
        UI.loadPage('dashboard')
      }
    })

    // Evento Navegar para Criação de Usuário

    document
      .getElementById('signUpPageLink')
      .addEventListener('click', event => {
        event.preventDefault()
        UI.loadPage('signUp')
      })
  }

  static setDashBoardEvents() {
    // Evento Abrir Modal de Edição

    // Evento Deletar Tarefa
    // Evento Cancelar Edição
    document
      .getElementById('cancelUpdateButton')
      .addEventListener('click', function () {
        UI.closeUpdateTodoModal()
      })
    // Evento Submeter Edição
    // Evento Abrir Modal de Criação
    document
      .getElementById('addTodoButton')
      .addEventListener('click', event => {
        UI.openCreateTodoModal()
      })
    // Evento Submeter Criação
    document
      .getElementById('createTodoForm')
      .addEventListener('submit', event => {
        event.preventDefault()
        const todoTitle = document.querySelector('#createTodoForm #todoTitle')
          .value
        const todoDescription = document.querySelector(
          '#createTodoForm #todoDescription'
        ).value

        const todoStatuses = document.getElementsByName('createTodoStatus')

        Store.createTodo(todoTitle, todoDescription, todoStatuses)
        UI.displayTodos()
        UI.closeCreateTodoModal()
      })
    // Evento Cancelar Criação
    document
      .getElementById('cancelCreateButton')
      .addEventListener('click', event => {
        event.preventDefault()
        UI.closeCreateTodoModal()
      })
  }

  static setClickableTitles() {
    const todosTitleArray = document.querySelectorAll('td a')
    for (let i = 0; i < todosTitleArray.length; i++) {
      todosTitleArray[i].addEventListener('click', event => {
        event.preventDefault()
        const editingTodo = Store.loadTodos().find(
          todo => todo.id == event.currentTarget.id
        )
        UI.loadUpdateTodoFields(editingTodo)
        UI.openUpdateTodoModal()
      })
    }
  }
}

class UI {
  static loadPage(pageName) {
    const xhr = new XMLHttpRequest()
    const contentContainer = document.getElementById('contentContainer')

    xhr.onload = function () {
      if (this.status === 200) {
        contentContainer.innerHTML = xhr.responseText
        console.log(`Visitando página:${pageName} `)

        switch (pageName) {
          case 'signUp':
            EventSetter.setSignUpEvents()
            break
          case 'signIn':
            EventSetter.setSignInEvents()
            break
          case 'dashboard':
            EventSetter.setDashBoardEvents()
            UI.displayTodos()
            break
        }
      } else {
        console.warn('Error loading page content')
      }
    }
    xhr.open('GET', `/${pageName}.html`)
    xhr.send()
  }

  static displayTodos() {
    const userTodos = Store.loadUserTodos()

    const todosTable = document
      .getElementById('todosTable')
      .getElementsByTagName('tbody')[0]

    todosTable.innerHTML = ''
    for (let i = 0; i < userTodos.length; i++) {
      let parsedStatus
      switch (userTodos[i].status) {
        case 0:
          parsedStatus = 'Backlog'
          break
        case 1:
          parsedStatus = 'Em andamento'
          break
        case 2:
          parsedStatus = 'Finalizado'
          break
      }

      const todoRow = `<tr>
                          <td>${userTodos[i].id}</td>
                          <td><a href="" id="${userTodos[i].id}">${userTodos[i].title}</a></td>
                          <td>${userTodos[i].date}</td>
                          <td>${parsedStatus}</td>
                        </tr>`
      todosTable.innerHTML += todoRow
    }

    EventSetter.setClickableTitles()
  }

  static loadUpdateTodoFields({ title, description, status }) {
    document.querySelector('#updateTodoForm #todoTitle').value = title
    document.querySelector(
      '#updateTodoForm #todoDescription'
    ).value = description
    const todoStatuses = document.getElementsByName('updateTodoStatus')

    for (let i = 0; i < todoStatuses.length; i++) {
      if (todoStatuses[i].value == status) {
        todoStatuses[i].checked = true
      }
    }
  }

  static openCreateTodoModal() {
    document.getElementById('createTodoModalContainer').classList.add('active')
  }

  static closeCreateTodoModal() {
    document
      .getElementById('createTodoModalContainer')
      .classList.remove('active')
    document.querySelector('#createTodoForm #todoTitle').value = ''
    document.querySelector('#createTodoForm #todoDescription').value = ''
    const todoStatuses = document.getElementsByName('createTodoStatus')
    for (let i = 0; i < todoStatuses.length; i++) {
      todoStatuses[i].checked = false
    }
  }

  static openUpdateTodoModal() {
    document.getElementById('updateTodoModalContainer').classList.add('active')
  }

  static closeUpdateTodoModal() {
    document
      .getElementById('updateTodoModalContainer')
      .classList.remove('active')
    document.querySelector('updateTodoForm #todoTitle').value = ''
    document.querySelector('#updateTodoForm #todoDescription').value = ''
    const todoStatuses = document.getElementsByName('createTodoStatus')
    for (let i = 0; i < todoStatuses.length; i++) {
      todoStatuses[i].checked = false
    }
  }
}

class Todo {
  constructor(userId, title, description, status) {
    this.id = parseInt(Math.random().toString().substr(2, 8))
    this.userId = userId
    this.title = title
    this.description = description
    this.date = new Date()
    this.status = status
  }
}

class User {
  constructor(id, name, email, password) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}

class Store {
  static loadTodos() {
    let todos
    if (sessionStorage.getItem('todos') === null) {
      todos = []
    } else {
      todos = JSON.parse(sessionStorage.getItem('todos'))
    }
    return todos
  }

  static loadUserTodos() {
    const authenticatedUser = Store.getAuthenticatedUser()
    const todos = this.loadTodos()
    const userTodos = todos.filter(todo => todo.userId === authenticatedUser.id)
    return userTodos
  }

  static createTodo(title, description, statuses) {
    const authenticatedUser = Store.getAuthenticatedUser()
    const todos = Store.loadTodos()
    let todoStatusParsed
    for (let i = 0; i < statuses.length; i++) {
      if (statuses[i].checked) {
        todoStatusParsed = parseInt(statuses[i].value)
      }
    }

    const createdTodo = new Todo(
      authenticatedUser.id,
      title,
      description,
      todoStatusParsed
    )

    todos.push(createdTodo)

    sessionStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos)
  }

  static deleteTodo(todoId) {}
  static updateTodo(todoId) {}
  static createUser(userName, userEmail, userPassword) {
    let users
    let authenticatedUser
    if (sessionStorage.getItem('users') === null) {
      users = []
      const user = new User(1, userName, userEmail, userPassword)

      users.push(user)
      authenticatedUser = user

      sessionStorage.setItem('users', JSON.stringify(users))
      sessionStorage.setItem(
        'authenticatedUser',
        JSON.stringify(authenticatedUser)
      )

      return authenticatedUser
    } else {
      users = JSON.parse(sessionStorage.getItem('users'))
      if (users.find(user => user.userEmail === userEmail)) {
        alert('Esse email já está registrado')
      } else {
        const user = new User(
          users.length + 1,
          userName,
          userEmail,
          userPassword
        )

        users.push(user)
        authenticatedUser = user

        sessionStorage.setItem('users', JSON.stringify(users))
        sessionStorage.setItem(
          'authenticatedUser',
          JSON.stringify(authenticatedUser)
        )
      }
    }
  }

  static logInUser(userEmail, userPassword) {
    let users
    let authenticatedUser
    if (sessionStorage.getItem('users') === null) {
      users = []
    } else {
      users = JSON.parse(sessionStorage.getItem('users'))
    }
    const foundUser = users.find(user => user.email === userEmail)

    if (foundUser) {
      if (foundUser.password === userPassword) {
        authenticatedUser = foundUser
        sessionStorage.setItem(
          'authenticatedUser',
          JSON.stringify(authenticatedUser)
        )
        alert('Login')
      } else {
        alert('A senha informada está incorreta')
      }
    } else {
      alert('Não foi encontrado um usuário com o e-mail fornecido')
    }

    return authenticatedUser
  }

  static logOutUser() {}

  static getAuthenticatedUser() {
    const authenticatedUser = JSON.parse(
      sessionStorage.getItem('authenticatedUser')
    )

    return authenticatedUser
  }
}

document.addEventListener('DOMContentLoaded', () => {
  UI.loadPage('signIn')
})
