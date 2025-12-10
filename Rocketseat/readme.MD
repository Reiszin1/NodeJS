# 🎥 API de Gerenciamento de Vídeos

API REST desenvolvida com Node.js, Fastify e PostgreSQL para gerenciar uma coleção de vídeos.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Fastify** - Framework web minimalista e performático
- **PostgreSQL** - Banco de dados relacional
- **postgres** - Driver PostgreSQL nativo para Node.js
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📋 Funcionalidades

- ✅ Criar novos vídeos
- ✅ Listar todos os vídeos
- ✅ Buscar vídeos por título
- ✅ Atualizar informações de um vídeo
- ✅ Deletar vídeos

## 🛠️ Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL instalado localmente ou acesso a um servidor PostgreSQL
- PgAdmin (opcional, para gerenciar o banco de dados)

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Rocketseat
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto:
```env
PGHOST=localhost
PGUSER=postgres
PGPASSWORD=sua_senha
PGDATABASE=rocketseat
PORT=3333
```

4. Crie o banco de dados:

No **PgAdmin**, crie um novo database chamado `rocketseat`.

5. Crie a tabela de vídeos:
```bash
node create-table.js
```

6. Inicie o servidor:
```bash
# Modo desenvolvimento (com auto-reload)
npm run dev

# Modo produção
npm start
```

O servidor estará rodando em `http://localhost:3333`

## 📡 Endpoints da API

### Criar Vídeo
```http
POST /videos
Content-Type: application/json

{
  "title": "Título do vídeo",
  "description": "Descrição do vídeo",
  "duration": 180
}
```

**Resposta:** `201 Created`

### Listar Vídeos
```http
GET /videos
```

**Resposta:** `200 OK`
```json
[
  {
    "id": "uuid",
    "title": "Título do vídeo",
    "description": "Descrição do vídeo",
    "duration": 180
  }
]
```

### Buscar Vídeos
```http
GET /videos?search=node
```

**Resposta:** `200 OK` - Retorna vídeos que contenham "node" no título

### Atualizar Vídeo
```http
PUT /videos/:id
Content-Type: application/json

{
  "title": "Novo título",
  "description": "Nova descrição",
  "duration": 200
}
```

**Resposta:** `204 No Content`

### Deletar Vídeo
```http
DELETE /videos/:id
```

**Resposta:** `204 No Content`

## 📁 Estrutura do Projeto

```
Rocketseat/
├── server.js              # Servidor Fastify com rotas
├── db.js                  # Configuração da conexão PostgreSQL
├── database-postgres.js   # Classe com operações do banco
├── database-memory.js     # Implementação em memória (dev)
├── create-table.js        # Script para criar tabela
├── routes.http            # Exemplos de requisições (REST Client)
├── .env                   # Variáveis de ambiente (não versionado)
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências e scripts
└── readme.MD              # Este arquivo
```

## 🧪 Testando a API

Use o arquivo `routes.http` com a extensão **REST Client** do VS Code, ou use ferramentas como:

- **Postman**
- **Insomnia**
- **Thunder Client**
- **cURL**

### Exemplo com cURL

```bash
# Criar vídeo
curl -X POST http://localhost:3333/videos \
  -H "Content-Type: application/json" \
  -d '{"title":"Meu Vídeo","description":"Descrição","duration":120}'

# Listar vídeos
curl http://localhost:3333/videos

# Buscar vídeos
curl http://localhost:3333/videos?search=node
```

## 🗄️ Estrutura do Banco de Dados

### Tabela `videos`

| Coluna      | Tipo    | Descrição                    |
|-------------|---------|------------------------------|
| id          | TEXT    | UUID gerado automaticamente  |
| title       | TEXT    | Título do vídeo             |
| description | TEXT    | Descrição do vídeo          |
| duration    | INTEGER | Duração em segundos         |

## 🔧 Scripts Disponíveis

```bash
npm start       # Inicia o servidor
npm run dev     # Inicia com hot-reload
```

## 🌐 Deploy

Para fazer deploy em produção (ex: Render, Railway):

1. Configure o `PORT` como variável de ambiente na plataforma
2. Configure as variáveis do PostgreSQL (`PGHOST`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`)
3. Execute `node create-table.js` após o primeiro deploy
4. O servidor já está configurado para aceitar conexões externas (`host: '0.0.0.0'`)

## 📝 Licença

ISC

## 👨‍💻 Autor

Desenvolvido durante o curso da **Rocketseat**

