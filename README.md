# MyTia Movies

Uma aplicação web para consultar filmes populares e buscar filmes pelo título, utilizando a API do The Movie Database (TMDb).

## 🚀 Tecnologias

- TypeScript
- React.js
- React Router
- Axios
- Styled Components

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Chave de API do TMDb

## 🔧 Configuração

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/mytia-movies.git
cd mytia-movies
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do TMDb:
```
VITE_TMDB_API_KEY=sua_chave_api_aqui
```

Para obter uma chave de API do TMDb:
1. Acesse [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Crie uma conta
3. Vá para Configurações > API
4. Solicite uma chave de API

## 🎯 Funcionalidades

- Lista de filmes populares
- Busca de filmes por título
- Detalhes do filme
- Paginação dos resultados
- Interface responsiva

## 🚀 Executando o projeto

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📦 Estrutura do Projeto

```
📦 mytia-movies
 ┣ 📂 src
 ┃ ┣ 📂 components    # Componentes reutilizáveis
 ┃ ┣ 📂 pages         # Páginas da aplicação
 ┃ ┣ 📂 services      # Configuração da API
 ┃ ┣ 📂 hooks         # Hooks personalizados
 ┃ ┣ 📂 styles        # Estilos globais
 ┃ ┣ 📜 App.tsx       # Componente principal
 ┃ ┣ 📜 main.tsx      # Renderização do React
 ┃ ┗ 📜 routes.tsx    # Definição das rotas
 ┣ 📜 package.json    # Dependências do projeto
 ┣ 📜 tsconfig.json   # Configuração do TypeScript
 ┗ 📜 README.md       # Documentação do projeto
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
