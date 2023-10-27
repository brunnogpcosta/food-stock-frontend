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


export { GET_STOCKS, POST_STOCK }
