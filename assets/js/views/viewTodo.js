const ViewTodo = () => {

    return(
        `<div class="viewBase viewTodo clearfix">
        <h2>Bem vindo(a)</h2>
        <p>Aqui estão suas atividades registradas</p>
        <div class="tableContainer">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Data</th>
                    <th>Status</th>
                </thead>
                <tbody class="listaTODOS">
                
                </tbody>
            </table>
        </div>
        <button class="btn btn-solid btn-adicionar">Adicionar Atividade</button>
        </div>`
    );  
}