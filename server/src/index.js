const { ApolloServer, gql } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const { getUserId } = require("./utils");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Product = require("./resolvers/Product");

const prisma = new PrismaClient();

const products = [
  {
    productName: "Apple",
    productURL: "xyz",
    productQty: "500 gms",
  },
  {
    productName: "Banana",
    productURL: "xyz",
    productQty: "1 dozen",
  },
  {
    productName: "Anar",
    productURL: "xyz",
    productQty: "500 gms",
  },
  {
    productName: "Strawberries",
    productURL: "xyz",
    productQty: "1 dozen",
  },
  {
    productName: "Chikoo",
    productURL: "xyz",
    productQty: "500 gms",
  },
];

const resolvers = {
  Query,
  Mutation,
  User,
  Product,
};

/* Step 3: Create Apollo Server */
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
