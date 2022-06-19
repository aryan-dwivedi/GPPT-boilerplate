import { ApolloServer } from "apollo-server";

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
  });

  await server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

export default startServer;
