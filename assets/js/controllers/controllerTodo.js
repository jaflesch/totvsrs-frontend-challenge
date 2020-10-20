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
        console.log("disparou");
        let titulo      = document.querySelector('[name="titulo"]');
        let descricao   = document.querySelector('[name="descricao"]');
        let date        = document.querySelector('[name="date"]');
        let status      = document.querySelector('[name="status"]');

        todoModel.salvarTodo(titulo.value ,descricao.value ,date.value ,status.value);

        //Atualiza a lista após adicionar o novo TODO
        this.updateTodoDOM();
    }

    //Renderiza os ToDos na DOM
    updateTodoDOM() {
 
        let lista       = todoModel.getUserTodos();
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
                        data-titulo=${item.titulo}
                        data-descricao=${item.descricao}
                        data-date=${item.date}
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
        setModalContent(ViewCreateAtividade());
        this.bindListeners();
    }
}   