import { gql } from "apollo-angular";


const GET_STOCKS = gql`
  {
    allStocks
    {
      id
      nome
      createdAt
    }
  }
`

const POST_STOCK = gql`
  mutation CreateStock($nome: String!, $createdAt: String!) {
    createEstoque(createEstoqueInput: {
      nome: $nome,
      createdAt: $createdAt
    }) {
      id
      nome
      createdAt
    }
  }
`;

const GET_FOODS = gql`
{
  allFoods
  {
    id
    nome
  }
}

`;

const POST_ENTER = gql`
mutation ($expirate: String!, $qtd: Int!, $foodId: Int!, $stockId: Int!) {
  createEntrada(createEntradaInput: {
    validade: $expirate
    quantidade: $qtd
    alimento_id: $foodId
    estoque_id: $stockId
  }) {
    id
  }
}

`


const GET_UNITIES = gql`
{
  allUnities
  {
    id
    nome
  }
}

`;

const POST_FOOD = gql`
mutation ($nome: String!, $unidadeMedida: String!) {
  createFood(createAlimentoInput: {
    nome: $nome,
    unidadeMedidaId: $unidadeMedida
  }) {
    id
    nome
  }
}

`;





export { GET_STOCKS, POST_STOCK, GET_FOODS, POST_ENTER, GET_UNITIES, POST_FOOD }
