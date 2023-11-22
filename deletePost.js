const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.post
    .delete({
        where: {
            slug: "",
        },
    })
    .then((postDeleted) => {
        console.log(postDeleted);
    })
    .catch((error) => console.log(error))