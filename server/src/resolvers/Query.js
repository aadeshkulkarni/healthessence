async function products(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { productName: { contains: args.filter } },
          { productQty: { contains: args.filter } },
          { category: { contains: args.filter } },
        ],
      }
    : {};

  const productList = await context.prisma.product.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });

  return productList;
}

module.exports = {
  products,
};
