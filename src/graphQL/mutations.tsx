import { gql } from "@apollo/client";
// import { useAuthToken } from "../services/auth";

export const LOGIN_REQUEST = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        role {
          name
          type
        }
      }
    }
  }
`;
