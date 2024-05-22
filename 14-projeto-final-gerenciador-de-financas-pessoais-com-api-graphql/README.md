# Introdução ao Projeto

## Visão Geral

### Gerenciador de Finanças Pessoais

- Criar conta (para se autentica)
- Criar Lançamentos (Receita ou Despesa)
- Criar Contas (ex: Cartão de Crédito, Dinheiro)
- Criar Categorias
- Listar Lançamentos por mês
- Filtrar Lançamentos
- Visualizar saldo total no dia
- Visualizar saldo do mês
- Visulaizar relatório do mês (via Gráfico)

## Back-End

- API GraphQL (Node JS)
- Prisma IO (Server e Client);: substitui os ORM's tradicionais,  
DAL(Data Access Layer)
- GraphQL Yoga: Servidor GraphQL completo com foco em   
fácil configuração, desempenho e excelente experiência do  
desenvolvedor
- Autenticação JWT: JSON Web Tokens e bcrypt para  
criptografia de senhas
- Moment JS: Manipular Datas

## Front-End

- Vue
- Vue Router
- Vuex
- Vuetify: Components de Interface
- Vuelidate: Validação de Formulários
- Apollo Client (via Apollo Boost): Integração com a API GraphQL
- Chart JS: Gráficos

## Big Picture
<img src="./assets/big-picutere-md.png" width="600" />

### 6. Prisma CLI Novo serviço para se conectar ao Prisma Server

#### Instalando o prisma 
`npm i -g prisma@1.28`  

#### Criar um serviço
`prisma init --endpoint http://localhost:4466`

##### Rodar um deploy
`prisma deploy`

#### Rodar um generate
`prisma generate`

### 13. Manipulando dados no PostgreSQL com Prisma Client

#### Criar um package.json
`npm init -y`

#### instalar o prisma-client-lib
`npm i -E prisma-client-lib@1.28.3`

### 14. GraphQL Yoga camada para lógica de negócio
`npm i -E graphql-yoga@1.17.4`

### 25. Instalando jsonwebtoken e bcryptjs
`npm i -E bcryptjs@2.4.3 jsonwebtoken@8.5.0`

### 34. Bônus validando data com Moment JS  
`npm i -E moment@2.24.0`


### Comandos docker
`docker composer up -d`  
`sudo systemctl stop docker.socket`  
`docker compose up -d --build --no-deps api`

### Comandos Playground PrismaServer

#### Criar Conta

````
mutation {
  createAccount(data: {
    description: "Cartão de Crédito"
  }) {
    id
    user {
      name
    }
  }
}
````

#### Busca todas as Contas

``
{
  accounts {
    id
    user {
      name
      email
    }
    description
  }
}
``

#### Busca Contas com Filtro

``
{
  accounts (
    where: {
      OR: [
        {
          user: {
            id: ""
          }
        },
        {
          user: null
        }
      ]
    }
  ) {
    id
    user {
      name
      email
    }
    description
  }
}
``

#### Criar Record

``
mutation {
  createRecord 
  (
    data : {
      amount: 50.00,
      type: DEBIT,
      date: "2024-05-21",
      description: "Combustível",
      tags: null,
      note: null,
      user: {
        connect: {
          id: ""
        }
      },
      account: {
        connect: {
          id: ""
        }
      },
      category: {
        connect: {
          id: ""
        }
      }
    }
  ) {
    id
    date
    amount
    type
    user {
      name
    }
  	category {
      description
    }
  }
}
``

#### Filtro Avançado records

``
{
  records (
    where: {
      AND: [
        {
          user: { id: "clwgr06re008f08715vk68o2g" }
        },
        {
          type: DEBIT
        },
        {
          OR: [
            {
              account: { id: "clwgr5e6l008n0871qkak5ll9" }
            },
            {
              account: { id: "clwgr5e6l008n0871qkak5ll9" }
            }
          ]
        },
        {
          OR: [
            {
              category: { id: "clwgr93dy009s0871qwd2wc3l" }
            },
            {
              category: { id: "clwgr93dy009s0871qwd2wc3l" }
            }
          ]
        },
        {
          date_gte: "2024-05-15T00:00.000Z",
          date_lte: "2024-05-21T23:59.999Z",
        }
      ]
    },
    orderBy: date_ASC
  ) {
    id
    date
    description
    amount
    type
    user {
      id
      name
    }
    category {
      id
      description
    }
    account {
      id
      description
    }
  }
}
``

### Comandos Playground GraphQL

#### Signup

``
mutation {
  signup (
    email: "",
    password: "",
    name: ""
  ) {
    token
    user {
      id
      name
      email
    }
  }
}
``

#### Login

``
mutation {
  login(
    email: ""
    password: ""
  ) {
    token
    user {
      id
      name
      email
    }
  }
}
``

#### Header Authorization (HTTP HEADERS)

``
{
  "Authorization": "token"
}
``

#### Usuário authenticado
``
{  
  user {  
    name,  
    email  
  }  
}   
``

#### Criar Conta

``
mutation {
  createAccount(description: "Dinheiro"){
    id
    user{
      name
      email
    }
    description
  }
}
``

#### Listas Contas

``
{
  accounts {
    id
    description
    user {
      name
      email
    }
  }
}
``

#### Criar Categoria

``
mutation {
  createCategory(
    description: "Alimentação"
    operation: DEBIT
  ){
    id
    description
    operation
    user {
      name
      email
    }
  }
}
``

#### Listar Categorias

``
  {
  categories {
    id
    description
    operation
    user {
      name
    }
  }
}
``

#### Listar Categorias com Filtro

``
  {
  categories(
    operation: DEBIT
  ) {
    id
    description
    operation
    user {
      name
    }
  }
}
``

#### Criar Record (Lançamentos)

``
mutation {
  createRecord(
    accountId: "clwgr5e6l008n0871qkak5ll9",
    categoryId: "clwgr93dy009s0871qwd2wc3l",
    amount: 45,
    type: DEBIT,
    date: "2024-05-21",
    description: "Mercado",
    tags: null
  ) {
    id
    date
    description
    amount
    type
    user {
      name
    }
    category {
      description
    }
    account {
      description
    }
  }
}
``

#### Filtrar records

``
{
  records {
    id
    date
    description
    amount
    type
    user {
      id
      name
    }
    category {
      id
      description
    }
    account {
      id
      description
    }
  }
}
``

#### Filtrar records com parametros

``
{
  records (
    month: "03-2024",
    accountsIds: [],
    categoriesIds: ["clwgr93dy009s0871qwd2wc3l"]
  ) {
    id
    date
    description
    amount
    type
    user {
      id
      name
    }
    category {
      id
      description
    }
    account {
      id
      description
    }
  }
}
``



