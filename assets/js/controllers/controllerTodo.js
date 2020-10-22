class ControllerTodo {

    constructor() {
        this.appElement  = document.querySelector('#appContainer');

        // todoModel.deleteALL(); 
        //Inicialmente a View do Modal é a de EDIT
        setModalContent(ViewCreateAtividade());
    }

    //Adiciona os event Listeners iniciais
    bindListeners() {
        this.bindAdicionar();
        this.bindCreate();
        this.bindCancelar();
        this.bindEditar();
    }

    //Adiciona os event listeners do botões edit/titulo
    bindEditar() {
        let btnsEdit      = document.querySelectorAll('.btn-edit');

        if(btnsEdit){
            btnsEdit = [...btnsEdit];

            btnsEdit.map(btn =>{
                btn.addEventListener('click', (e)=> {
                    e.preventDefault();

                    let titulo      = e.target.dataset.titulo;
                    let descricao   = e.target.dataset.descricao;
                    let date        = e.target.dataset.date;
                    let status      = e.target.dataset.status;

                    setModalContent(ViewEditAtividade(titulo,descricao,date, status));

                    this.bindCancelar();
                    this.bindExcluir(e);
                    this.bindSalvar(e);

                    openModal();
                })
            })
        }
    }

    //Adiciona o event listener do botão excluir
    bindExcluir(e) {
        let btnExcluir     = document.querySelector('.btn-excluir');
        let id = e.target.dataset.id;

        if(btnExcluir){
            btnExcluir.addEventListener('click', (e)=> {
                e.preventDefault();

                db.excluirTodo(id);
                closeModal();
                this.updateTodoDOM();
                setModalContent(ViewCreateAtividade());
                this.bindListeners();

            })
        }
    }

    //Adiciona o event listener do botão salvar
    bindSalvar(e) {
        let btnSalvar     = document.querySelector('.btn-salvar');
        let id = e.target.dataset.id;

        if(btnSalvar){
            btnSalvar.addEventListener('click', (e)=> {
                e.preventDefault();

                let titulo      = document.querySelector('[name="titulo"]');
                let descricao   = document.querySelector('[name="descricao"]');
                let date        = document.querySelector('[name="date"]');
                let status      = document.querySelector('[name="status"]');

                let todo = new TodoModel(titulo.value, descricao.value, date.value, status.value);

                db.updateItem(id,todo);
                this.renderTODO();
            })
        }
    }

    //Adiciona o event listener do botão criar
    bindCreate() {
        let btnCreate     = document.querySelector('.btn-create');

        if(btnCreate){
            btnCreate.addEventListener('click', (e)=> {
                e.preventDefault();
                this.adicionarTODO();
            })
        }
    }

    //Adiciona o event listener do botão cancelar
    bindCancelar() {
        let btnCancelar   = document.querySelector('.btn-cancelar');

        if(btnCancelar){

            btnCancelar.addEventListener('click', (e)=> {
                e.preventDefault();

                closeModal();

                setModalContent(ViewCreateAtividade());
                this.bindListeners();
            })
        }
    }

    //Adiciona o event listener do botão Adicionar
    bindAdicionar() {
        let btnAdd        = document.querySelector('.btn-adicionar');

        if(btnAdd){

            btnAdd.addEventListener('click', (e)=> {
                e.preventDefault();
                openModal();
            })
        }
    }

    //Salva a nova ToDo com as informações da DOM
    adicionarTODO() {
        
        let titulo      = document.querySelector('[name="titulo"]');
        let descricao   = document.querySelector('[name="descricao"]');
        let date        = document.querySelector('[name="date"]');
        let status      = document.querySelector('[name="status"]');

        let todo = new TodoModel(titulo.value, descricao.value, date.value, status.value);

        db.salvarTodo(todo);

        //Atualiza a lista após adicionar o novo TODO
        this.updateTodoDOM();
    }

    //Renderiza a Todo List
    renderTODO() {
        let lista       = db.getUserTodos();
        let tableBody   = document.querySelector('.listaTODOS');
        let html        = '';

        if(lista.length > 0 ){
            lista.map(item =>{
                let statusString = "";

                switch(item.status){
                    case "0":
                        statusString = "Backlog";
                        break;
                    case "1":
                        statusString = "Em andamento";
                        break;
                    case "2":
                        statusString = "Finalizado";
                        break;
                    default:
                        statusString = "Backlog";
                        break;
                }
                
                html += `
                    <tr>
                        <td>${item.id}</td>
                        <td>
                        <button class="btn btn-solid btn-edit"
                        data-id=${item.id}
                        data-titulo="${item.titulo}"
                        data-descricao="${item.descricao}"
                        data-date="${item.date}"
                        data-status=${item.status}
                        >${item.titulo}
                        </button>
                        </td>
                        <td>${item.date}</td>
                        <td>${statusString}</td>
                    </tr>
                `;
            })    
        }

        tableBody.innerHTML = html;
    }

    //Atualiza a DOM
    updateTodoDOM() {
        this.renderTODO();
        setModalContent(ViewCreateAtividade());
        this.bindListeners();
    }
}   