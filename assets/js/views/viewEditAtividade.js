const ViewEditAtividade = (titulo, descricao , date , status) => {


    return(
    `<div class="viewBase modalAtividade clearfix">
            <h2>Edite os dados de sua atividade</h2>
            <form>
                <input type="text" value="${titulo}" name="titulo" placeholder="Digite o título da atividade">
                <textarea name="descricao" rows="4" cols="50">${descricao}</textarea>
    
                <div class="formRow clearfix">
                    <input name="date" type="datetime-local" value="${date}">
                    <select name="status">
                        <option value="0" ${status === "0" ? "selected" : ""}>Backlog</option>
                        <option value="1" ${status === "1" ? "selected" : ""}>Em Andamento</option>
                        <option value="2" ${status === "2" ? "selected" : ""}>Finalizado</option>
                    </select>
                </div>
                <div class="btns-box">
                    <button class="btn btn-solid btn-cancelar">Cancelar</button>
                    <button class="btn btn-solid btn-salvar">Salvar</button>
                    <button class="btn btn-solid btn-excluir">Excluir</button>
                </div>
            </form>
        </div>`
    );
}

    