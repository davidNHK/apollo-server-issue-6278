import {startApolloServer} from "../app.js"
import { gql } from 'apollo-server-core';


await startApolloServer(gql`
    type App {
        key: String!
    }

    type Query {
        sayHello: App!
    }

    type Mutation {
        sayWhatYouWant(input: AppInput!): App!
    }

    input AppInput {
        key: String!
    }
`, {
    Query: {
        sayHello: () => ({key: "hello"})
    },
    Mutation: {
        sayWhatYouWant: (root, args) => ({key: args.input.key})
    }
})