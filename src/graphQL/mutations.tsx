import { gql } from "@apollo/client";

const LOGIN_REQUEST = gql`
    mutation login {
  login(input:{identifier:$email, password: $email}){
    jwt
  }
}
`;

export { LOGIN_REQUEST };
