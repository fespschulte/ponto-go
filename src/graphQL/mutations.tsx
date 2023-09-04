import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;

export const createRegisteredTimeMutation = gql`
  mutation createRegisteredTime(
    $timeRegistered: DateTime!
    $user: ID!
    $published_at: DateTime!
    $created_by: ID!
    $updated_by: ID!
  ) {
    createRegisteredTime(
      input: {
        data: {
          timeRegistered: $timeRegistered
          user: $user
          published_at: $published_at
          created_by: $created_by
          updated_by: $updated_by
        }
      }
    ) {
      registeredTime {
        id
        created_at
        updated_at
        timeRegistered
        published_at
      }
    }
  }
`;
