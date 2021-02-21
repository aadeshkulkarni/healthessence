function postedBy(parent, args, context) {
  return context.prisma.product
    .findUnique({ where: { id: parent.id } })
    .postedBy();
}

module.exports = {
  postedBy,
};
