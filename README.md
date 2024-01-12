# To-Do List

Repositório: [To-Do List](https://github.com/Gustavo2022003/To-Do-list)

## Estrutura do Projeto

```
To-Do-list/
|-- node_modules/
|-- public/
|   `-- styles/
|       `-- main.css
|-- views/
|   |-- editpost.ejs
|   |-- index.ejs
|   `-- partials/
|       |-- footer.ejs
|       |-- header.ejs
|       `-- post.ejs
|-- index.js
|-- package-lock.json
`-- package.json
```

## Descrição

Este é um projeto de lista de tarefas (To-Do List) desenvolvido em Node.js com Express.js e EJS como engine de visualização. A aplicação permite a adição, edição e remoção de tarefas.

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/Gustavo2022003/To-Do-list.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd To-Do-list
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o servidor:

   ```bash
   node index.js
   ```

5. Abra o navegador e acesse [http://localhost:5000](http://localhost:5000).

## Funcionalidades

- Adição de novas tarefas com título e descrição.
- Edição de tarefas existentes.
- Remoção de tarefas.
- Exibição da lista de tarefas na página inicial.

## Estrutura do Código

### index.js

O arquivo principal do servidor que configura o Express, define rotas e lida com requisições.

### views/

Este diretório contém os arquivos EJS (Embedded JavaScript) que são usados para renderizar as páginas HTML. Os arquivos incluem:

- `editpost.ejs`: Página de edição de uma tarefa existente.
- `index.ejs`: Página inicial que exibe a lista de tarefas.
- `partials/`: Componentes parciais reutilizáveis, como header e footer.

### public/

Contém recursos públicos, como folhas de estilo.

- `styles/main.css`: Arquivo CSS com estilos para a aplicação.

## Middlewares

### checkPostExistence

Um middleware utilizado para verificar a existência de uma tarefa com base no ID. Ele é utilizado antes de acessar a rota de edição para garantir que a tarefa exista.

# Configuração e Personalização do Servidor

## Configuração do Servidor (index.js)

O arquivo `index.js` é responsável pela configuração e execução do servidor usando o framework Express.js. Abaixo estão alguns passos para entender e personalizar o servidor conforme suas necessidades.

### 1. Instalação de Dependências

Antes de iniciar, certifique-se de ter as dependências instaladas. No terminal, execute:

```bash
npm install
```

### 2. Porta de Execução

A porta na qual o servidor será executado é definida pela variável `PORT`. Por padrão, está configurada para 5000, mas você pode alterá-la conforme necessário.

```javascript
const PORT = 5000;
```

### 3. Configuração do Diretório Público

Se houver arquivos estáticos (como CSS, imagens, etc.) a serem servidos, o Express pode configurar um diretório público usando `express.static`. Certifique-se de que o diretório público esteja corretamente configurado.

```javascript
app.use(express.static("public"));
```

### 4. Configuração da View Engine (EJS)

Este projeto utiliza o EJS como a engine de visualização. A seguinte linha de código configura o Express para usar o EJS:

```javascript
app.set("view engine", "ejs");
```

### 5. Middleware de Análise de Corpo (Body Parser)

Para processar dados do corpo das requisições, é utilizado o middleware `body-parser`. Certifique-se de que está configurado no início do arquivo.

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```

### 6. Rotas e Lógica de Roteamento

Personalize as rotas conforme necessário para atender aos requisitos da sua aplicação. Adicione lógica para manipular requisições e renderizar as páginas apropriadas.

### 7. Middlewares Personalizados

Se necessário, você pode adicionar middlewares personalizados. No exemplo fornecido, há um middleware `checkPostExistence` que verifica a existência de uma tarefa antes de acessar a rota de edição. Você pode adicionar ou modificar middlewares conforme necessário para suas funcionalidades específicas.

### 8. Execução do Servidor

Por fim, inicie o servidor usando o método `listen`. Por padrão, está configurado para ouvir na porta definida pela variável `PORT`.

```javascript
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
```

## Personalização Adicional

### Estrutura de Diretórios

Certifique-se de que a estrutura de diretórios do projeto esteja organizada da maneira desejada. O README já inclui uma seção que descreve a estrutura do projeto.

### Personalização de Vistas (EJS)

Os arquivos EJS na pasta `views/` contêm as visualizações da aplicação. Personalize-os conforme necessário para atender ao design desejado.

### Estilos (CSS)

O arquivo `public/styles/main.css` contém estilos para a aplicação. Faça alterações nesse arquivo para ajustar o design conforme suas preferências.

### Middlewares Adicionais

Adicione outros middlewares conforme necessário para funcionalidades específicas do seu aplicativo.

### Dependências Adicionais

Se necessário, adicione outras dependências ao projeto usando `npm install <package-name>`.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar pull requests para melhorar o projeto.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
