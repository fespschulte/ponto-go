import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

const userQuery = gql`
  query user {
    me {
      username
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

export const useUserQuery = () => useQuery(userQuery);
