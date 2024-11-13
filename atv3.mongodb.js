/* *1-) Explique, com suas palavras, o que é um banco de dados NoSQL. Compare-o com um banco de 
dados relacional, destacando pelo menos três diferenças principais.*
Os Bancos de Dados NoSql são também conhecidos como banco de dados “não relacionais”. Eles processam grandes
volumes de dados não estruturados, e que estão em constante mudança. Três diferenças principais dele para o 
relacional:
O banco de dados relacional armazena dados de acordo com esquemas específicos, diferente do NoSql que
pode ser salvo em qualquer esquema.
O banco de dados NoSql são mais flexíveis e escaláveis
O Banco de dados Relacional requer que os dados sejam organizados em tabelas com esquemas pré-definidos.


*2-) O que são collections no MongoDB? Como elas se comparam a tabelas em bancos de dados relacionais?*
O mongoDB armazena dados em “collections”, ou seja é um agrupamento de documentos, essas coleções são a mesma 
coisa que as tabelas no banco de dados relacional, e serve para armazenar os dados. Os documentos têm campos, 
e os campos são semelhantes às colunas de um banco de dados relacional.

*3-)Qual a função do comando `insertOne`? Em quais situações você o utilizaria?*
O comando  “Insert One” insere apenas uma informação. Pode ser usado em situações em que não precisa colocar 
um número grande de dados em uma coleção ou inserção controlada e automizada, para que caso de erro seja em
apenas uma informação.

*4-)Diferencie o comando `insertOne` de `insertMany`. Quando você deveria optar por usar um ou outro?*
O “Insert One” pode inserir apenas uma informação, já o “Inser Many” consegue inserir uma ou mais informações. É melhor usar o “Insert Many” quando você precisar inserir vários itens em uma collection, e o “Insert One” quando for necessário apenas um.

*5-)O que o comando `find` faz? Dê exemplos de buscas possíveis com este comando.*
O comando “find” é usado para realizar buscas de arquivos e diretórios dentro de uma collection. 
Exemplo:
db.users.find({ hobbies: "futebol" })
Este comando busca documentos onde o campo hobbies contém o valor "futebol" dentro do array.

*6-)Imagine que você está criando um sistema de biblioteca online. Quais informações você armazenaria em 
uma collection de livros? Descreva pelo menos 5 campos que seriam necessários para representar um livro no 
MongoDB.*
Título(string), autor(string), preço(number), gênero(string) e ano de publicação(string).

7-)*Como você armazenaria os dados de empréstimos de livros? Descreva um exemplo de document que poderia
representar um empréstimo, incluindo referências ao usuário e ao livro.*
Para isso seria necessário três collections: “biblioteca”, “usuários” e “emprestimos”. Na coleção “emprestimos” cada documento representaria um empréstimo individual, contendo referências tanto ao usuário quanto ao livro.

{
“id”: “1132424”
“usuario_id": "64aefddc",
"biblioteca_id": "5f6e8f5e”,
"data_emprestimo": "2024-10-24T10:00:00Z",
"data_devolucao": "2024-11-24T10:00:00Z",
"preço": "R$100,90",
}

*/

use("bibliotecadb")
db.dropDatabase("bibliotecadb")
use("bibliotecadb")

db.createCollection("biblioteca");

//Usando o insetOne
db.biblioteca.insertOne({
    titulo:"O Senhor dos Anéis",
    autor:"J.R.R. Tolkien",
    ano_publicacao: 1954,
    genero: "Fantasia",
    disponivel: true
})

//Inserir 4 trabalhos com insertMany
db.biblioteca.insertMany([
    {
        titulo: "1984",
        autor: "George Orwell",
        ano_publicacao: 1949,
        genero: "Distopia",
        disponivel: true
   },

   {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        ano_publicacao: 1943,
        genero: "Infantil",
        disponivel: false
   }
   
])

//Consultas com `find`:
//Faça uma busca para encontrar todos os livros disponíveis na biblioteca.
db.biblioteca.find({disponivel: true}).pretty()

///Realize uma consulta para encontrar os livros publicados antes do ano 1950.
db.biblioteca.find({ano_publicacao:{$lt:1950}})

//Encontre todos os livros que pertencem ao gênero "Fantasia".
db.biblioteca.find({genero: "Fantasia"}).pretty()

//Altere o estado de disponibilidade do livro "O Pequeno Príncipe" para `true` (disponível) utilizando um comando de atualização.
db.biblioteca.updateOne(
    { titulo: "O Pequeno Príncipe" },  
    { $set: { disponivel: true }}
)