//1-) crie um banco de dados chamado test
use("test")

//2-) Use o banco "test" e crie uma coleção chamada "estudante"
use("test")
db.createCollection("estudante")

//3-) Use o banco "test" e na collection "estudante" insira os valores:
//nome = Tere, cpf=123123123, idade=28
use("test")
db.estudante.insertOne({
    "nome":"Tere",
    "cpf":"123123123",
    "idade":28
})

//4-) Use o banco "test" e na coleção "estudante"
//Insira 3 vários valores com um único comando: 
use("test")
db.estudante.insertMany([
    {
        "nome":"Clara",
        "cpf":"123123123",
        "idade":17
    },
    {
        "nome":"Nicolle",
        "cpf":"123123123",
        "idade":17
    },
    {
        "nome":"Tainara",
        "cpf":"123123123",
        "idade":18
    }
])

//5-) Utilizando o banco test liste todos os registros contidos na coleção estudante.
use("test")
db.estudante.find({})

//6-) Utilizando o banco teste liste todos os registros da coleção estudante
//Onde o nome for igual a tere
use("test")
db.estudante.find({"nome":"Tere"})

//7-) Utilizando o banco de dados test liste todos os registros da coleção estudante
//Onde a idade for maios ou igual a "17"
use("test")
db.estudante.find({"idade":{"$gte": 17 }})

//8-) Utilizando o banco test liste todos os registros estudantes
// onde a idade for maior que 17 e menor ou igual a 18 e o nome for difrente de "maria"
// mostre apenas os campos Nome e idade na resposta
use("test")
db.estudante.find({"idade":{"$gt": 17, "$gte":18}})