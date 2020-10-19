const viewRegistrar = () => (
`<div class="viewBase viewRegistrarUsuario clearfix">
        <h2>Digite seus dados para realizar seu cadastro!</h2>
        <form>
            <input type="text"  name="nome" placeholder="Digite seu nome">
            <input type="email"  name="email" placeholder="Digite seu email">
            <input type="password"  name="senha" placeholder="Digite sua senha">
            <input type="password"  name="senha2" placeholder="Digite sua senha novamente">
            <button data-view="ViewPrincipal" class="btn btn-solid btn-voltar">Voltar</button>
            <button data-view="ViewTodo" class="btn btn-unfilled btn-registrar">Registrar-se</button>
        </form>
    </div>`
);

    