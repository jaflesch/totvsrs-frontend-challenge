//Função para abrir o modal
function openModal(id, titulo, descricao, status, tr){
    document.getElementById("fade").style.display = "flex";
    
    const initialDate = new Date();

    const hourDate = `
        ${initialDate.getHours()}:${initialDate.getMinutes()} `+
        `${initialDate.getDate()}/${initialDate.getMonth()+1}/${initialDate.getFullYear()}`

    document.getElementById("id_input").value = Number(id);
    document.getElementById("titulo_input").value = titulo;
    document.getElementById("descricao_input").value = descricao;
    document.getElementById("data_input").value = hourDate;
    document.getElementById("status_input").value = Number(status);
    document.getElementById("td_input").value = tr;
}

//Função para fechar o modal
function closeModal(){
    document.getElementById("fade").style.display = "none"; 
}

//Função para excluir um item do modal
function deleteModal(){
    if (window.confirm("Você tem certeza que deseja excluir?")) {
        $(`#${document.getElementById('td_input').value}`).hide();
        closeModal();
    }
}

//Função para salvar um item do modal
function saveModal(){
    const id = document.getElementById('td_input').value.split('_');

    console.log(document.getElementById(`id${id[1]}`));
    
    document.getElementById(`id${id[1]}`).innerHTML = document.getElementById("id_input").value;
    document.getElementById(`titulo${id[1]}`).innerHTML = document.getElementById("titulo_input").value;
    document.getElementById(`descricao${id[1]}`).innerHTML = document.getElementById("descricao_input").value;
    document.getElementById(`data${id[1]}`).innerHTML = document.getElementById("data_input").value;
    document.getElementById(`status${id[1]}`).innerHTML = document.getElementById("status_input").value;

    alert("Salvo com sucesso!");
}