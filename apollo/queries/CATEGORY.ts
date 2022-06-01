import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
query GetCategories($filter: CategoryFilterInput, $pagination: PaginationInput) {
  getCategories(filter: $filter, pagination: $pagination) {
    statusCode
    result {
      count
      categories {
        updatedAt
        uid
        parents {
          uid
          name
        }
        parent {
          name
          uid
        }
        name
        isActive
        inActiveNote
        createdAt
      }
    }
  }
}

`;
