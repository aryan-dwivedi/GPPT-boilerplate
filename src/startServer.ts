import { ApolloServer } from "apollo-server";
import { createContext } from "./context/prismaContext";
const typeDefs = `
    type Query {
        hello(name: String): String
    }
`;

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || "World"}`,
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
  });

  await server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

export default startServer;
