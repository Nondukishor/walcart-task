import { gql } from '@apollo/client';
export const CREATE_CATEGORY = gql`
mutation CreateCategory($category: CategoryCreateInput!) {
  createCategory(category: $category) {
    message
    statusCode
    result {
      uid
      name
      parent {
        uid
        name
      }
      parents {
        uid
        name
      }
      isActive
      inActiveNote
      createdAt
      updatedAt
    }
  }
}
`
export const UPDATE_CATEGORY = gql`mutation UpdateCategory(
  $category: updateCategoryCreateInput!
  $categoryUid: String!
) {
  updateCategory(category: $category, categoryUid: $categoryUid) {
    message
    statusCode
    result {
      uid
      name
      parent {
        uid
        name
      }
      parents {
        uid
        name
      }
      isActive
      inActiveNote
      createdAt
      updatedAt
    }
  }
}

`

