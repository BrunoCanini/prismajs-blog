const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.post
    .update({
        where: {
            id: 1,
        },
        data: {
            published: false
        },
    })
    .then((postUpdate) => {
        console.log(postUpdate);
    })
    .catch((error) => console.log(error))