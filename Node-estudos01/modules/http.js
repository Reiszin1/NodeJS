const http = require('http');

const port = 8080;

// Criando um servidor HTTP
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        // Definindo o tipo de conteúdo como HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Retornando a resposta com o conteúdo da página de home
        res.end('<h1>Home Page</h1>');
    }
    // Rota para listar usuários
    if (req.url === '/users') {
        // Criando um array de usuários
        const users = [
            {
                name: 'John Doe',
                email: 'john.doe@example.com'
            },
            {
                name: 'Jane Doe',
                email: 'jane.doe@example.com'
            }
        ];
        // Definindo o tipo de conteúdo como JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Convertendo os usuários em formato JSON e retornando a resposta
        res.end(JSON.stringify(users));
    }
});

// Iniciando o servidor na porta 8080
// Quando o servidor iniciar, a função callback será executada
server.listen(port, () => {
    // Logando a mensagem de que o servidor está rodando na porta 8080
    console.log(`Server is running on port ${port}`);
});