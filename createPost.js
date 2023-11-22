const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.post
    .createMany({
        data: [
            {
                title: "nuova espansione world of warcraft",
                slug: "nuova-espansione-world-of-warcraft",
                image: "https://www.nerdpool.it/wp-content/uploads/2023/09/world_of_warcraft.jpeg",
                content: "un gioco online in cui giocatori di tutto il mondo assumono il ruolo di personaggi eroici ed esplorano un universo virtuale fatto di magie, misteri e avventure a non finire",
                published: true,
            },
            {
                title: "dove sono i cinepanettoni di una volta",
                slug: "dove-sono-i-cinepanettoni-di-una-volta",
                image: "https://www.cinefily.com/wp-content/uploads/2018/12/cover-cinepanettoni.jpg",
                content: "Un cinepanettone è un film comico di produzione italiana distribuito nelle sale cinematografiche durante il periodo natalizio",
                published: true,
            },
            {
                title: "vasco rossi primato mondiale",
                slug: "vasco-rossi-primato-mondiale",
                image: "https://www.reporter.it/wp-content/uploads/2017/07/foto_apertura.jpg",
                content: "Per il concerto del 1º luglio 2017 sono stati venduti oltre 220.000 biglietti, battendo i precedenti record mondiali di 198.000 paganti per il concerto degli A-ha al festival Rock in Rio 2 del 26 gennaio 1991",
                published: true,
            }
        ],
    })
    .then ((newPost) => {
        console.log("nuovo post creato:", newPost);
    })
    .catch((error) => console.log(error));
