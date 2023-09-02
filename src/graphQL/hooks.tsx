import { useMutation } from "@apollo/client";
import { loginMutation } from "../services/api";

export function useLogin() {
  const [mutate, { loading }] = useMutation(loginMutation);

  const login = async (email: string, password: string) => {
    const {
      data: { dataLogin },
    } = await mutate({
      variables: { input: { email, password } },
    });
    return dataLogin;
  };

  return {
    login,
    loading,
  };
}

// import { gql } from "@apollo/client";

// import { getAccessToken } from '../auth';

// const client = new GraphQLClient('http://localhost:9000/graphql', {
//   headers: () => {
//     const accessToken = getAccessToken();
//     if (accessToken) {
//       return { 'Authorization': `Bearer ${accessToken}` };
//     }
//     return {};
//   },
// });

// import { gql } from "@apollo/client";
// // import { useAuthToken } from "../services/auth";

// export const LOGIN_REQUEST = gql`
//   mutation login($email: String!, $password: String!) {
//     login(input: { identifier: $email, password: $password }) {
//       jwt
//       user {
//         role {
//           name
//           type
//         }
//       }
//     }
//   }
// `;
