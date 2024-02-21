// Importações
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Definindo variáveis
const PORT = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Configurando o servidor
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
function checkPostExistence(req, res, next) {
    // Armazena o ID do post dentro de postId
    const postId = parseInt(req.params.id);
    
    // Irá encontrar a primeiro post que tenha o ID igual ao postId
    const post = posts.find(post => post.ID === postId);

    // Se post for nulo...
    if (!post) {
        console.error(`Post com ID ${postId} não encontrado.`);
        return res.redirect("/");
    }

    // Adiciona o post ao objeto req para ser utilizado nas rotas subsequentes
    req.post = post;

    next();
}

// Definindo variáveis
let IDs = 0;
let posts = [];


// Rotas HTTP

app.get("/", (req, res) => {

    // Renderiza a página index.ejs enviando um formulário com o ano e o array de posts
    res.render("index.ejs", {
        year: new Date().getFullYear(),
        posts: posts
    });

});

app.post("/submit", (req, res) => {

    // Definindo as variáveis
    const message = req.body["textArea"];
    const title = req.body["title"];
    const ID = posts.length + 1;

    // cria o post novo
    const post = {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        message: message,
        title: title,
        ID: ID
    };

    // unshift adiciona o post criado ao índice 0 da lista (pilha)
    posts.unshift(post);

    res.redirect("/");
});

app.post("/deletePost", (req, res) => {

    // Definindo as variáveis
    var postID = req.body["postID"];

    // Se o postID não for um número
    if (isNaN(postID)) {
        console.log("ID inválido.");
        return res.redirect("/");
    }

    // Converte para número inteiro
    postID = parseInt(postID);

    // Encontra o índice do post com a ID especificado (postID)
    const index = posts.findIndex(post => post.ID === postID);

    // Se o indíce for diferente de -1
    if (index !== -1) {
        // remove 1 elemento a partir do indíce epecificado
        posts.splice(index, 1);
        console.log(`Post com ID ${postID} removido.`);
    } else {
        console.log(`Post com ID ${postID} não encontrado.`);
    }

    res.redirect("/");
});

// Rota que executa quando você entra nela (/editPost/:id)
app.get("/editPost/:id", checkPostExistence, (req, res) => {

    const data = {
        post: req.post,
        year: new Date().getFullYear()
    };

    res.render("editPost.ejs", data);
});

// Rota que executa quando você clica no botão de editar (antes de entrar na URL)
app.post("/editPost/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedMessage = req.body.updatedText;
    const updatedTitle = req.body.title;

    // Encontra o indíce do post com a ID especificada na URL
    const postIndex = posts.findIndex(post => post.ID === postId);

    // Se o índice for diferente de -1
    if (postIndex !== -1) {
        // A mensagem será atualizada
        posts[postIndex].message = updatedMessage;
        posts[postIndex].title = updatedTitle;
        console.log(`Post com ID ${postId} atualizado.`);
    } else {
        console.log(`Post com ID ${postId} não encontrado.`);
    }

    res.redirect("/");
});



app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`)
});