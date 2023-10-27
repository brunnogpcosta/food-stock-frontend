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
export { GET_STOCKS }
