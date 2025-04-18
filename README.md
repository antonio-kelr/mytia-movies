# MyTia Movies

Uma aplicação web moderna para descobrir e explorar filmes, desenvolvida com React e TypeScript. O projeto utiliza a API do The Movie Database (TMDb) para fornecer informações atualizadas sobre filmes populares, permitindo aos usuários descobrir novos filmes e buscar por títulos específicos.

![Image](https://github.com/user-attachments/assets/a82e27ee-75e5-4b8e-8c13-d4b441b6d0a8)



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
- Vitest (para testes unitários e de integração)
- Testing Library (para testes de componentes React)
- Jest DOM (para asserções específicas do DOM)

### React Hooks Utilizados
- `useState`: Gerenciamento de estado local
- `useEffect`: Efeitos colaterais e chamadas à API
- `useCallback`: Memorização de funções
- `useParams`: Acesso a parâmetros da URL
- `useNavigate`: Navegação programática
- Hooks Customizados:
  - `useMovies`: Hook personalizado para gerenciar o estado e lógica relacionada aos filmes

## 🧪 Testes

### Ferramentas de Teste
- **Vitest**: Framework de testes rápido e moderno, compatível com Jest
- **Testing Library**: Suite de utilitários para testar componentes React
- **Jest DOM**: Extensões de matcher para testes DOM

### Tipos de Testes
- **Testes Unitários**: Testagem isolada de funções e componentes
- **Testes de Integração**: Verificação da interação entre componentes
- **Testes de Serviços**: Validação das chamadas à API e manipulação de dados

### Como Executar os Testes
\`\`\`bash
# Executar todos os testes
npm test

# Executar testes com coverage
npm test -- --coverage

# Executar testes em modo watch
npm test -- --watch
\`\`\`

### Estrutura de Testes
- Arquivos de teste são localizados junto aos arquivos que testam
- Nomenclatura: `*.test.ts` ou `*.test.tsx`
- Testes são organizados em suites usando `describe` e casos usando `it`

### Exemplos de Testes
- Testes de Serviços: Validação de chamadas à API
- Testes de Componentes: Verificação de renderização e interação
- Testes de Hooks: Validação de comportamento de hooks customizados

## 📁 Estrutura do Projeto

```
src/
  ├── components/      # Componentes React
  ├── config/         # Configurações (axios, i18n)
  ├── styles/        # Arquivos de Estilizacao
  ├── mocks/          # Mocks para testes
  ├── services/       # Serviços de API
  ├── types/          # Tipos TypeScript
  └── utils/          # Funções utilitárias
```
## 🐳 Rodando com Docker

### Pré-requisitos
- Docker
- Docker Compose

### Usando Docker Compose (Recomendado)

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/mytia-movies.git
cd mytia-movies
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

3. Adicione sua chave da API do TMDB ao arquivo .env

4. Inicie o container com Docker Compose:
```bash
docker-compose up
```

O aplicativo estará disponível em `http://localhost:5173`

### Comandos Docker Úteis

```bash
# Iniciar os containers em background
docker-compose up -d

# Parar os containers
docker-compose down

# Ver logs
docker-compose logs -f

# Rebuildar a imagem (após mudanças no Dockerfile)
docker-compose up --build
```

### Estrutura Docker

O projeto utiliza:
- `Dockerfile`: Configuração da imagem do container
- `docker-compose.yml`: Orquestração dos serviços
- Node.js Alpine como imagem base para melhor performance
- Volume montado para desenvolvimento com hot-reload

## ⚙️ Configuração do Ambiente

### Instalação Local (Sem Docker)

1. Clone o repositório
2. Copie o arquivo de exemplo de variáveis de ambiente:
```bash
cp .env.example .env
```
3. Obtenha sua chave de API do TMDB (instruções abaixo) e adicione ao arquivo .env
4. Instale as dependências:
```bash
npm install
```
5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### ⚠️ Importante
O arquivo `.env` contém informações sensíveis e não deve ser commitado. Use o arquivo `.env.example` como template para configurar seu ambiente local.

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
