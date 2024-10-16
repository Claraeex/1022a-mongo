//Criando um banco de dados com mongodb?
//Como criar um banco de dados?

//use("Nome Banco")
use("dbjogodobixo")
db.dropDatabase()
use("dbjogodobixo")

//O que tem no jogo do bixo?
//Deve ter os jogadores: nome,telefone
//Aposta: jogador, valor, 3xanimal
//Sorteio: data, 3xanimal

//NoSQL não é tão bom para relacionamentos NxN

//Como criar uma collection?
use("dbjogodobixo")

db.createCollection("jogadores");

use("dbjogodobixo")
db.createCollection("sorteio")
db.sorteio.insertOne({
    _id: "66fd62ec25e8a8f14115d70f",
    data:"2024-10-02",
    animais:["Vaca","Macaco","Porco","Pavão","Borboleta"]
})

//Como inserir dados na collection?
use("dbjogodobixo")
db.jogadores.insertOne({
    nome:"João",
    telefone:"996237654",
    apostas:[
        {
            sorteioID: "66fd62ec25e8a8f14115d70f",
            data:"2024-10-02",
            valor:50,
            quantidade:3,
            animais:["Vaca","Macaco","Veado"]
        },
        {
            sorteioID: "66fd62ec25e8a8f14115d70f",
            data:"2024-10-02",
            valor:150,
            quantidade:5,
            animais:["Borboleta","Pavão","Porco","Jacaré","Cabra"]
        }
    ]
})

//Para apagar o banco de dados
//use("tbtigrinho")
//db.dropDatabase()

//Código para apagar uma collection.
//use("dbjogodobixo")
//db.Jogadores.drop()


//1) Adicionem mais 1 sorteio para amanhã

//2) Crie 2 jogares com 2 apostas cada.

//No final deve ter 3jogadores e 2 sorteios.


// Inserindo mais de um Document ao mesmo tempo.
db.createCollection("professor")

db.professor.insertMany([
    {
        nome:"tere"
    },
    {
        nome:"Danilo"
    }
])






