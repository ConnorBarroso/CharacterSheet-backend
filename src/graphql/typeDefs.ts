export const typeDefs = `#graphql
input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
} 

type User {
    username: String
    email: String
    password: String
    token: String
}

input LoginInput {
    email:String!
    password: String!
}


type Mutation {
    registerUser(RegisterInput: RegisterInput): User
}
`;
