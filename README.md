# MyTia Movies

Uma aplicação web moderna para descobrir e explorar filmes, desenvolvida com React e TypeScript. O projeto utiliza a API do The Movie Database (TMDb) para fornecer informações atualizadas sobre filmes populares, permitindo aos usuários descobrir novos filmes e buscar por títulos específicos.
(assets/img-movies.png)


## 💡 Sobre o Projeto

MyTia Movies é uma plataforma que oferece:
- Visualização de filmes populares em tempo real
- Busca avançada de filmes por título
- Detalhes completos dos filmes, incluindo sinopse, elenco e avaliações
- Interface responsiva e moderna
- Carrossel de filmes em destaque
- Paginação para navegar através do catálogo

## 🚀 Tecnologias

### Core
- TypeScript
- React.js 18
- Vite

### Bibliotecas Principais
- React Router Dom (para roteamento)
- Axios (para requisições HTTP)
- Styled Components (para estilização)
- Docker (para containerização)

### React Hooks Utilizados
- `useState`: Gerenciamento de estado local
- `useEffect`: Efeitos colaterais e chamadas à API
- `useCallback`: Memorização de funções
- `useParams`: Acesso a parâmetros da URL
- `useNavigate`: Navegação programática
- Hooks Customizados:
  - `useMovies`: Hook personalizado para gerenciar o estado e lógica relacionada aos filmes

## 📋 Pré-requisitos

### Para rodar com Docker (Recomendado)
- Docker
- Docker Compose

### Para desenvolvimento local
- Node.js (versão 20 ou superior)
- npm ou yarn
- Chave de API do TMDb

## 🔧 Configuração e Instalação

### 🐳 Usando Docker (Recomendado)

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/mytia-movies.git
cd mytia-movies
\`\`\`

2. Configure as variáveis de ambiente:
   - Crie um arquivo \`.env\` na raiz do projeto:
   \`\`\`env
   VITE_TMDB_API_KEY=sua_chave_api_aqui
   \`\`\`

3. Inicie o container:
\`\`\`bash
docker-compose up
\`\`\`

O aplicativo estará disponível em \`http://localhost:5173\`

### 💻 Instalação Local

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/mytia-movies.git
cd mytia-movies
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Configure as variáveis de ambiente:
   - Crie um arquivo \`.env\` na raiz do projeto:
   \`\`\`env
   VITE_TMDB_API_KEY=sua_chave_api_aqui
   \`\`\`

4. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

## 🎯 Funcionalidades Detalhadas

### Lista de Filmes Populares
- Exibição dos filmes mais populares do momento
- Atualização em tempo real
- Paginação para navegar através do catálogo

### Busca de Filmes
- Busca por título
- Resultados instantâneos
- Filtragem avançada

### Detalhes do Filme
- Informações completas sobre cada filme
- Sinopse
- Classificação
- Data de lançamento
- Elenco principal

### Interface Responsiva
- Design adaptável para diferentes tamanhos de tela
- Experiência otimizada para dispositivos móveis
- Navegação intuitiva

## 📁 Estrutura do Projeto

\`\`\`
src/
├── components/           # Componentes reutilizáveis
│   ├── Layout/          # Layout principal
│   ├── MovieCard/       # Card de filme
│   ├── MovieCarousel/   # Carrossel de filmes
│   └── Navbar/          # Barra de navegação
├── hooks/               # Hooks customizados
│   └── useMovies.ts     # Hook para gerenciamento de filmes
├── pages/               # Páginas da aplicação
│   ├── Home/           # Página inicial
│   ├── Movies/         # Lista de filmes
│   └── MovieDetails/   # Detalhes do filme
├── services/           # Serviços e configurações
│   └── api.ts         # Configuração do Axios
├── styles/            # Estilos
│   ├── global/        # Estilos globais
│   └── components/    # Estilos dos componentes
└── types/             # Definições de tipos TypeScript
\`\`\`

## 🔑 Obtendo a Chave da API TMDb

1. Acesse [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Crie uma conta ou faça login
3. Vá para Configurações > API
4. Solicite uma chave de API
5. Copie a chave e adicione ao seu arquivo .env

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a Branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

 [GitHub](https://github.com/antonio-kelr/antonio-kelr)
