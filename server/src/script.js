// 1
const { PrismaClient } = require("@prisma/client");

// 2
const prisma = new PrismaClient();

//3
async function main() {
  const allProducts = await prisma.product.findMany();

  const newProduct = await prisma.product.create({
    data: {
      productName: "Fullstack tutorial for GraphQL",
      productURL: "www.howtographql.com",
      productQty: "500gms",
      Category: "Fruits",
    },
  });

  console.log(allProducts);
}

//4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
