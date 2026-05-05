const path = require('path');

// Basename: Retorna o nome do arquivo atual
console.log(path.basename(__filename));

// Dirname: Retorna o diretório atual
console.log(path.dirname(__filename));

// Extname: Retorna a extensão do arquivo atual
console.log(path.extname(__filename));

// Parse: Retorna um objeto com o path analisado
console.log(path.parse(__filename));

// Join: Concatena paths
console.log(path.join(__dirname, 'test', 'test.txt'));