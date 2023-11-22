const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// lettura tramite slug
prisma.post
    .findUnique({
        where: {
            slug: "nuova-espansione-world-of-warcraft",
        },
    })
    .then((post) => {
        console.log(post);
    })
    .catch((error) => console.log(error));

// lettura tutti i post
prisma.post
    .findMany()
    .then((post) => {
        console.log(post)
    })
    .catch((error) => console.log(error))