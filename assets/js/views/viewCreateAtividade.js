const ViewCreateAtividade = () => (
`<div class="viewBase modalAtividade clearfix">
        <h2>Digite os dados de sua atividade</h2>
        <form>
            <input type="text" name="titulo" placeholder="Digite o título da atividade">
            <textarea name="descricao" rows="4" cols="50"></textarea>

            <div class="formRow clearfix">
                <input name="date" type="datetime-local">
                <select name="status">
                    <option value="0">Backlog</option>
                    <option value="1">Em Andamento</option>
                    <option value="2">Finalizado</option>
                </select>
            </div>
            <div class="btns-box">
            <button class="btn btn-solid btn-cancelar">Cancelar</button>
            <button class="btn btn-unfilled btn-create">Criar Atividade</button>
            </div>
        </form>
    </div>`
);

    