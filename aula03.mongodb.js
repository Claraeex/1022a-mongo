use("fecinavidb")
db.dropDatabase("fecinavidb")
use("fecinavidb")

db.createCollection("trabalhos");

//Inserir 4 trabalhos com insertMany
db.trabalhos.insertMany([ 
    {
    titulo:"Cyberbullying no IFMS",
    area:"humanas",
    autores:[
        {
            nome: "Tainara",
            email:"tainara.dias@estudante.ifms.edu.br",
        }
    ],
    dataEnvio: "10/08/2024",
    avaliadores:[
        {
            CPF: "08637875173",
            nome: "Adão",
            nota: "10",
        }
    ],
    mediaAvaliacoes: "10",
   },

   {
    titulo:"Plantas medicinais",
    area:"Biológicas",
    autores:[
        {
            nome: "Gabriele",
            email:"gabizinha@gmail.com",
        }
    ],
    dataEnvio:"10/08/2024",
    avaliadores:[
        {
            CPF: "069785176973",
            nome: "Terenciani",
            nota: "08",
        }
    ],
    mediaAvaliacoes: "08",
   },

   {
    titulo:"Café filosófico",
    area:"humanas e sociais",
    autores:[
        {
            nome: "Angela",
            email:"angela.filosofia@estudante.ifms.edu.br",
        }
    ],
    dataEnvio: "10/08/2024",
    avaliadores:[
        {
            CPF: "08987647898",
            nome: "Danilo",
            nota: "10",
        }
    ],
    mediaAvaliacoes: "10",
   },

   {
    titulo:"Mulheres no trabalho",
    area:"Humanas e sociais",
    autores:[
        {
            nome: "Nicolle",
            email:"nicollechan@gmail.com",
        }
    ],
    dataEnvio: "10/08/2024",
    avaliadores:[
        {
            CPF: "08967854323",
            nome: "Gabi Burgati",
            nota: "05",
        }
    ],
    mediaAvaliacoes: "05",
   }
])

//Usando o insetOne



db.trabalhos.insertOne({
    titulo:"Agricultura e plantações",
    area:"Biológicas",
    autores:[
        {
            nome: "Narriane",
            email:"narriebonitinha@gmail.com",
        }
    ],
    dataEnvio: "10/08/2024",
    avaliadores:[
        {
            CPF: "06898765423",
            nome: "Diego",
            nota: "09",
        }
    ],
    mediaAvaliacoes: "09",
})


db.trabalhos.find({area:"Biológicas"}).pretty()
db.trabalhos.find().pretty()

