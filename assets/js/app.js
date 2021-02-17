const db_Dados = [];

let data_index;

const geraId = () =>  Math.floor((Math.random() * 100) + 1);

function closeModal(){
    const modal = document.getElementById("myModal"); 
    modal.style.display = "none";
}

function excluirDados(){
    let resultadoDeleta = window.confirm("Você realmente deseja excluir?");
    const modal = document.getElementById("myModal"); 
    if(resultadoDeleta){
        db_Dados.splice(data_index,1);
        preencheTable();
        modal.style.display = "none";
    }
}

function salvaDados(){  
    const formCad = document.getElementById("edit_form");

    let edit_titulo = document.getElementById("edit_titulo").value;
    let edit_descricao = document.getElementById("edit_descricao").value;
    let edit_date = document.getElementById("edit_date").value;
    let edit_status = document.getElementById("edit_status").value;
    let text_edit_status = edit_status === '0' ? "Backlog": edit_status === '1' ? "Em andamento": "Finalizado";
    if(edit_titulo !== ''  && edit_descricao !=='' &&
        edit_date !== '' && edit_status !== '' ){     
        
        db_Dados[data_index].titulo = edit_titulo;
        db_Dados[data_index].descricao = edit_descricao;
        db_Dados[data_index].date = edit_date;
        db_Dados[data_index].status = text_edit_status;
        preencheTable()
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        formCad.reset();
        

    }else{
        alert("Verique os dados Preenchidos!")
    }


  
}

function preencheDadosModal(index){
    const formCad = document.getElementById("edit_form");
    formCad.reset();
    document.getElementById("edit_titulo").value = db_Dados[index].titulo;
    document.getElementById("edit_descricao").value = db_Dados[index].descricao;
    document.getElementById("edit_date").value = db_Dados[index].date;
    let status_Select = db_Dados[index].status === 'Backlog' ? "0": db_Dados[index].status === 'Em andamento' ? "1": "2";
    document.getElementById('edit_status').value = status_Select;
   
}

function openModal(index) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    preencheDadosModal(index)
    data_index=index;

}

const createClick = () => {
    let all_td_clicl = document.querySelectorAll(".td_Open");
    all_td_clicl.forEach((td)=>{
        td.addEventListener('click', (e)=>{
            let [,index] =  e.path[0].id.split("-");
            openModal(index);
    })
    })
    
};


function preencheTable (){
    let corpoTable = document.querySelector("tbody");
    corpoTable.innerHTML = '';
    // console.log(db_Dados)
    db_Dados.forEach( (dado, index) => {
        let {date} = dado;
        let [ano, mes, dia] = date.split("-");
        let dataFormatada = `${dia}-${mes}-${ano}`;
        corpoTable.innerHTML+=`
        <tr >
            <td>${dado.id}</td>
            <td class="td_Open" id="id-${index}">${dado.titulo}</td>
            <td>${dado.descricao}</td>
            <td>${dataFormatada}</td>
            <td>${dado.status}</td>
        </tr>
        `
    });
    createClick()
    
}

const formCad = document.getElementById("Cad_form");
formCad.reset();
formCad.onsubmit = function(e) {
    e.preventDefault();
    let cad_titulo = document.getElementById("cad_titilo").value;
    let cad_descricao = document.getElementById("cad_descricao").value;
    let cad_date = document.getElementById("cad_date").value;
    let cad_status = document.getElementById("cad_status").value;
    let text_cad_status = cad_status === '0' ? "Backlog": cad_status === '1' ? "Em andamento": "Finalizado";
    let cad_dados = {
        userId: 1,
        id: geraId(),
        titulo: cad_titulo,
        descricao: cad_descricao,
        date: cad_date,
        status: text_cad_status,

    } 
    if(cad_dados.titulo !== ''  && cad_dados.descricao !=='' &&
        cad_dados.date !== '' && cad_dados.date !== '' ){     
        db_Dados.push(cad_dados)
        preencheTable()
        formCad.reset();
    }else{
        alert("Verique os dados Preenchidos!")
    }
}


// data.addEventListener('blur', e => handleOnChangeDatas(e));