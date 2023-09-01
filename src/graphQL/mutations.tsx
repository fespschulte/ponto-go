import { gql, useMutation } from "@apollo/client";
import { useAuthToken } from "../services/auth";

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

type MutationResult = {
  data?: {
    login: {
      jwt: string;
      user: {
        role: {
          name: string;
          type: string;
        };
      };
    };
  };
};

export function useLoginMutation() {
  const [setAuthToken, removeAuthToken] = useAuthToken();

  const [mutation] = useMutation(LOGIN_REQUEST);

  async function login(email: string, password: string) {
    removeAuthToken();
    try {
      const result: MutationResult = await mutation({
        variables: {
          email,
          password,
        },
      });

      if (result.data && result.data.login && result.data.login.user) {
        setAuthToken(result.data.login.jwt);
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  }

  return [login, mutation];
}

// import { gql } from "@apollo/client";

// const LOGIN_REQUEST = gql`
//   mutation login($email: String!, $password: String!) {
//     login(input: { identifier: $email, password: $password }) {
//       jwt
//     }
//   }
// `;

// export { LOGIN_REQUEST };
