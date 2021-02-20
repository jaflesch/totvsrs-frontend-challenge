function setupDashboard() {
  // console.log('Visitando dashboard')

  // const authenticatedUser = JSON.parse(
  //   sessionStorage.getItem('authenticatedUser')
  // )

  // const tableRef = document
  //   .getElementById('todosTable')
  //   .getElementsByTagName('tbody')[0]

  // const createTodoModal = document.getElementById('createTodoModalContainer')
  // const closeCreateTodoModalButton = document.getElementById(
  //   'cancelCreateButton'
  // )

  // const updateTodoModal = document.getElementById('updateTodoModalContainer')
  // const closeUpdateTodoModalButton = document.getElementById(
  //   'cancelUpdateButton'
  // )

  // const

  // const { userTodos, allTodos } = loadTodos(authenticatedUser, tableRef)

  const todosTitleArray = document.querySelectorAll('td a')
  for (let i = 0; i < todosTitleArray.length; i++) {
    todosTitleArray[i].addEventListener('click', e => {
      e.preventDefault()
      updateTodoModal.classList.add('active')
      const editingTodo = allTodos.find(todo => todo.id == e.currentTarget.id)
      handleUpdateTodo(updateTodoForm, allTodos, editingTodo)
    })
  }
  const createTodoForm = {
    form: document.getElementById('createTodoForm'),
    todoTitle: document.querySelector('#createTodoForm #todoTitle'),
    todoDescription: document.querySelector('#createTodoForm #todoDescription'),
    todoStatuses: document.getElementsByName('createTodoStatus')
  }

  // const updateTodoForm = {
  //   form: document.getElementById('updateTodoForm'),
  //   todoTitle: document.querySelector('#updateTodoForm #todoTitle'),
  //   todoDescription: document.querySelector('#updateTodoForm #todoDescription'),
  //   todoStatuses: document.getElementsByName('updateTodoStatus')
  // }

  // const addTodoButton = document.getElementById('addTodoButton')
  // addTodoButton.addEventListener('click', function openModal() {
  //   createTodoModal.classList.add('active')
  // })

  // createTodoForm.form.addEventListener('submit', event => {
  //   event.preventDefault()
  //   handleCreateTodo(createTodoForm, authenticatedUser, allTodos)
  //   createTodoModal.classList.remove('active')
  //   createTodoForm.todoTitle.value = ''
  //   createTodoForm.todoDescription.value = ''
  //   for (let i = 0; i < createTodoForm.todoStatuses.length; i++) {
  //     createTodoForm.todoStatuses[i].checked = false
  //   }
  //   loadTodos(authenticatedUser, tableRef)
  //   todosTitleArray = document.querySelectorAll('td a')
  //   for (let i = 0; i < todosTitleArray.length; i++) {
  //     todosTitleArray[i].addEventListener('click', e => {
  //       e.preventDefault()
  //       const editingTodo = allTodos.find(todo => todo.id == e.currentTarget.id)
  //       handleUpdateTodo(updateTodoForm, allTodos, editingTodo)
  //     })
  //   }
  // })

  // closeCreateTodoModalButton.addEventListener('click', function () {
  //   createTodoModal.classList.remove('active')
  //   createTodoForm.todoTitle.value = ''
  //   createTodoForm.todoDescription.value = ''
  //   for (let i = 0; i < createTodoForm.todoStatuses.length; i++) {
  //     createTodoForm.todoStatuses[i].checked = false
  //   }
  // })

  // closeUpdateTodoModalButton.addEventListener('click', function () {
  //   updateTodoModal.classList.remove('active')
  //   updateTodoForm.todoTitle.value = ''
  //   updateTodoForm.todoDescription.value = ''
  //   for (let i = 0; i < updateTodoForm.todoStatuses.length; i++) {
  //     updateTodoForm.todoStatuses[i].checked = false
  //   }
  // })
  // loadTodos(authenticatedUser, tableRef)
  console.log(allTodos)
}

function handleCreateTodo(
  { todoTitle, todoDescription, todoStatuses },
  authenticatedUser,
  allTodos
) {
  let todoStatusParsed
  for (let i = 0; i < todoStatuses.length; i++) {
    if (todoStatuses[i].checked) {
      todoStatusParsed = parseInt(todoStatuses[i].value)
    }
  }

  const createdTodo = {
    id: parseInt(Math.random().toString().substr(2, 8)),
    userId: authenticatedUser.id,
    title: todoTitle.value,
    description: todoDescription.value,
    date: new Date(),
    status: todoStatusParsed
  }

  allTodos.push(createdTodo)

  sessionStorage.setItem('todos', JSON.stringify(allTodos))
  console.log(allTodos)
}

function loadTodos(authenticatedUser, table) {
  let todos = JSON.parse(sessionStorage.getItem('todos'))
  let userTodos = []
  table.innerHTML = ''

  if (todos) {
    userTodos = todos.filter(todo => todo.userId === authenticatedUser.id)
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
      table.innerHTML += todoRow
    }
    // const todosTitleArray = document.querySelectorAll('td a')
    // for (let i = 0; i < todosTitleArray.length; i++) {
    //   todosTitleArray[i].addEventListener('click', e => {
    //     e.preventDefault()
    //     console.log(todos.find(todo => todo.id == e.currentTarget.id))
    //   })
    // }
  } else {
    todos = []
  }

  return {
    userTodos,
    allTodos: todos
  }
}

function handleUpdateTodo(
  { todoTitle, todoDescription, todoStatuses },
  allTodos,
  editingTodo
) {
  // todoTitle.value = editingTodo.title
  // todoDescription.value = editingTodo.description
  // for (let i = 0; i < todoStatuses.length; i++) {
  //   if (todoStatuses[i].value == editingTodo.status) {
  //     todoStatuses[i].checked = true
  //   }
  // }
  // console.log(allTodos.findIndex(todo => todo.id === editingTodo.id))
  //   const editingTodo = allTodos.find(todo => todo.id == e.currentTarget.id)
}

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
        console.log(authenticatedUser)
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
        // Limpar o formulário de Criação (UI)
        // Fechar Modal (UI)
      })
    // Evento Submeter Edição
    // Evento Abrir Modal de Criação
    document
      .getElementById('addTodoButton')
      .addEventListener('click', event => {})
    // Evento Submeter Criação
    document
      .getElementById('createTodoForm')
      .addEventListener('submit', event => {
        event.preventDefault()
        // Criar o Todo (Storage)
        // Atualizar lista de todos (UI)
        // Limpar o formulário de Criação (UI)
        // Fechar o Modal (UI)
      })
    // Evento Cancelar Criação
    document
      .getElementById('cancelCreateButton')
      .addEventListener('click', event => {
        event.preventDefault()
        //
        // Limpar o formulário de Criação (UI)
        // Fechar o Modal (UI)
      })
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
        }
      } else {
        console.warn('Error loading page content')
      }
    }
    xhr.open('GET', `/${pageName}.html`)
    xhr.send()
  }

  static displayTodos() {
    Store.loadUserTodos()

    const todosTable = document
      .getElementById('todosTable')
      .getElementsByTagName('tbody')[0]
  }

  static loadUpdateTodoFields() {
    document.querySelector('#updateTodoForm #todoTitle').value = 0
    document.querySelector('#updateTodoForm #todoDescription').value = 0
    document.getElementsByName('updateTodoStatus').value = 0

    for (let i = 0; i < todoStatuses.length; i++) {
      if (todoStatuses[i].value == editingTodo.status) {
        todoStatuses[i].checked = true
      }
    }
  }

  static clearUpdateTodoFields() {}

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

  static loadUserTodos(userId) {}

  static createTodo(todo) {}
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
  UI.loadPage('signUp')
})
