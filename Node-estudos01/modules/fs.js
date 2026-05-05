const fs = require('fs');
const path = require('path');


// // criar uma pasta
// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//     if (error) return console.log('Erro ao criar a pasta:', error);
//     console.log('Pasta criada com sucesso');

//     // criar um arquivo
//     fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello World', (error) => {
//         if (error) return console.log('Erro ao criar o arquivo:', error);
//         console.log('Arquivo criado com sucesso');

//         // adicionar conteudo a um arquivo
//         fs.appendFile(path.join(__dirname, 'test', 'test.txt'), ' Hello Node', (error) => {
//             if (error) return console.log('Erro ao adicionar conteudo:', error);
//             console.log('Conteudo adicionado com sucesso');

//             // ler um arquivo
//             fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf8', (error, data) => {
//                 if (error) return console.log('Erro ao ler o arquivo:', error);
//                 console.log(data); // Hello World Hello Node
//             });
//         });
//     });
// });