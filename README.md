# Handtalk Analytics Data Extraction Plugin

![GitHub](https://img.shields.io/github/license/erikwtg/data_extraction_plugin)
![Docker](https://img.shields.io/badge/Docker-✓-blue)
![Node.js](https://img.shields.io/badge/Node.js-✓-green)
![TypeScript](https://img.shields.io/badge/TypeScript-✓-blue)
![React](https://img.shields.io/badge/React-✓-blue)
![Vite](https://img.shields.io/badge/Vite-✓-blue)

**Handtalk Analytics Data Extraction Plugin**

## O projeto foi feito com a estrutura em containers Docker e é estruturado como um monorepo. Este projeto inclui serviços interconectados, como uma API, um plugin de extração de dados e um frontend. Abaixo estão as instruções para configurar e rodar o ambiente de desenvolvimento.

## Tecnologias Utilizadas

- **Node.js** e **TypeScript** para o desenvolvimento da API.
- **React** e **TypeScript** para o desenvolvimento da página de blog.
- **Vite** para o desenvolvimento do plugin com Vanilla JS + Typescript.
- **Docker** e **Docker Compose** para facilitar a execução de todos os serviços em containers.
- **Monorepo** para organizar múltiplos serviços no mesmo repositório.

## Estrutura do Projeto

O projeto segue uma estrutura de monorepo, com cada serviço dentro de uma pasta separada. Abaixo está a lista de serviços incluídos:

- **api**: API backend utilizando Node.js, TypeScript, Design Patterns (Template Method, SOLID, Factory Functions).
- **plugin**: Plugin de extração de dados com Vanilla JS + Typescript.
- **page**: Página de blog com React + TypeScript.

Existe um arquivo docker-compose.yml para orquestrar os serviços.

## Requisitos

- **Docker** (com Docker Compose) instalado.
- **Node.js**

## Instalação e Execução

### 1. Clonar o Repositório

Primeiro, clone este repositório para sua máquina local:

```bash
git clone https://github.com/erikwtg/data_extraction_plugin.git
cd data_extraction_plugin
```

### 2. Construção e Execução em Modo Desenvolvimento

O projeto já possui um arquivo docker-compose.yml configurado para orquestrar os serviços.

### 3. Build e Start dos Containers

Para rodar os serviços em modo desenvolvimento, execute o seguinte comando:

```bash
./deployment.sh
```

ou

```bash
docker network create handtalk_extraction_plugin_network

docker-compose -f docker-compose.yml up -d --build
```

Esse comando irá:

Criar a rede handtalk_extraction_plugin_network.

Construir os containers necessários.

Rodar os serviços na porta configuradas no docker-compose.yml.

### 4. Rodar o projeto manualmente

#### API
```bash
cd api
npm install
npm run dev
```

#### Plugin - Obs O plugin gera uma build que fica na pasta /dist
- Pode ser injetado no html da página através de um <script src="http://localhost:4000/plugin/data_scrapper_plugin.es.js"></script> na url.
- Ou pode ser importado manualmente através de um <script src="./data_scrapper_plugin.es.js"></script> no html da página.

```bash
cd plugin
npm install
npm run build
```

#### Página
```bash
cd page
npm install
npm run dev
```





### DESIGN PATTERNS E ARQUITETURA

- **Template Method**: Utilizado para definir o esqueleto de algoritmos, permitindo que subclasses forneçam implementações específicas.
- **SOLID**: O código foi estruturado com base nos princípios SOLID para garantir maior coesão e baixa acoplabilidade.
- **Factory Functions**: Para a criação de objetos, melhorando a extensibilidade do código.

## Acesso às Aplicações

Depois de executar o comando de inicialização, você pode acessar as aplicações através dos seguintes endereços:

- **Page**: http://localhost:5173
- **API**: http://server:3000
- **Plugin**: http://plugin:3333

## Funcionalidades Implementadas

- Autenticação validação do token de acesso.
- Criação das coletas de dados.
- Listagem de coletas de dados.

## Melhorias (Coisas que gostaria de ter feito)

Embora o projeto tenha sido desenvolvido com as melhores práticas disponíveis dentro do tempo e dos requisitos do desafio, há algumas melhorias que gostaria de ter implementado:

1. Abstração dos Controllers: A arquitetura do código poderia ser melhorada ao abstrair os controllers de maneira mais eficaz, separando melhor as responsabilidades e tornando o código mais modular e fácil de manter. (Principalmente no controller de transações)
2. Testes Unitários: Gostaria de implementar testes para melhorar a cobertura e a confiança na estabilidade do sistema.
3. Observabilidade: A inclusão de logs e métricas mais detalhadas ajudaria a entender melhor o comportamento da aplicação.
4. Tratamento de Erros e Validações no Frontend para o plugin: Embora o tratamento de erros no backend tenha sido abordado, a validação e o tratamento de erros no frontend podem ser aprimorados. Gostaria de ter implementado uma validação de dados mais robusta e um sistema de feedback mais amigável para o usuário final.
5. Documentação da API: A documentação da API poderia ser gerada automaticamente pelo Swagger.

## Problemas Encontrados

Plugin apresentou um problema ao ser carregado no browser do google chrome, porém funcionou perfeitamente no firefox.

## Tecnologias e Estruturas Utilizadas

A escolha das tecnologias e das estruturas foi feita com base no desafio proposto.

1. Node.js e TypeScript: foi escolhido pela sua performance e pela familiaridade com o ecossistema JavaScript. É uma tecnologia excelente suporte para APIs assíncronas e alto desempenho em sistemas que exigem escalabilidade.

5. ReactJS: foi escolhido para o frontend, pela sua familiaridade e pela sua performance.

6. Docker e Docker Compose: foi escolhido para facilitar a execução de todos os serviços em containers.

7. Monorepo: foi escolhido para organizar todos os serviços em um único repositório, facilitando.