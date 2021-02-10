*Passo de como rodar a aplicação*
Para abrir a aplicação simplesmente clique no arquivo index.html, ele te levara para a pagina inicial da aplicação.
Ao acessar a página inicial você deve criar uma conta, caso não tenha uma, ou fazer o login.
Após feito o login você poderá ver a lista de tarefas existentes no seu usuario.
Para criar uma nova tarefa clique em "Adicionar nova tarefa".
Para editar ou deletar clique no titulo da tarefa selecionada, isso criará a janela de Alterações.
Na janela de alterações voce pode sobrescrever o titulo, status e descrição da tarefa escolhida, então deve clicar no botão "Salvar" para que a alteração seja salva.
Para fechar a janela de alterações, clique no botão "Cancelar".
Para excluir uma tarefa, clique no botão "Excluir" na janela de alterações.
Ao terminar o uso do sistema, simplesmente clique no botão "Sair" na pagina de tarefas.

*Breve descrição da solução utilizada*
Como não possui muita experiencia com Front End acabei por fazer o sistema bem simples, apenas usando javascript puro.
Deixei as divs das páginas prontas e escondi elas quando a janela carrega, e apenas mudo qual div deixo aparecendo conforme o usuario "troca de tela".
Usei a sessão do navegador para salvar as informações, como solicitado, e carrego as informaçoes na tabela criando novas linhas e colocando as informações salvas.