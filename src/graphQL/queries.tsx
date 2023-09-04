import { gql } from "@apollo/client";

export const RegisteredTimesQuery = gql`
  query RegisteredTimes($limit: Int) {
    registeredTimes(limit: $limit) {
      user {
        username
        id
      }
      created_at
      updated_at
      timeRegistered
      published_at
      id
    }
  }
`;

export const RegisteredTimesQueryById = gql`
  query RegisteredTimesById($id: String!) {
    registeredTimes(limit: 6, where: { user: { id: $id } }) {
      user {
        username
        id
      }
      created_at
      updated_at
      timeRegistered
      published_at
      id
    }
  }
`;

export const userQuery = gql`
  query user {
    me {
      username
      id
      email
      role {
        id
        name
        description
        type
      }
    }
  }
`;
