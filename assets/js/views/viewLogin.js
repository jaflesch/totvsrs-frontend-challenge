const ViewLogin = () => (
`<div class="viewBase viewLogin clearfix">
        <h2>Faça Login para continuar</h2>
        <form>
            <input type="text" name="email" placeholder="Digite seu email">
            <input type="password" name="senha" placeholder="Digite sua senha">
            <button data-view="ViewPrincipal" class="btn btn-solid btn-voltar">Voltar</button>
            <button data-view="viewAreaUsuario" class="btn btn-unfilled btn-logar">Logar</button>
        </form>
    </div>`
);

