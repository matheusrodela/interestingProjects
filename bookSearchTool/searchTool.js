const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            { 
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title:"O homem mais rico da Babilônia",
                author:"George S. Clason",
            },
            {
                title:"Pai rico, pai pobre",
                author:"Robert T. Kiosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title:"Você é insubstituível",
                author:"Augusto Cury",
            },
            {
                title:"Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title:"Os 7 habitos das pessoas altamente eficazes",
                author:"Sterphen R. Covey",
            }
        ],
    },
];

// Contar o número de categorias e o número de livros em cada categoria;
    //Número de categorias
        const categoryAmount = booksByCategory.length;
        console.log('Total de categorias: ', categoryAmount);

    //Número de autores
        for (let arrays of booksByCategory) {
            console.log('Total de livros da categoria:', arrays.category)
            console.log(arrays.books.length)
        }


// Contar o número de autores;
    function countAuthors(){
        let authors = [];

        for(let category of booksByCategory) { //loop que pega a categoria da array 
            //agora vamos precisar de outra estrutura de repetição que entra em cada array e pega o autor
            for(let book of category.books){ // category.book é um array de onde estamos extraindo um objeto e chamando ele de book.
                if(authors.indexOf(book.author)== -1){ //varifica se no array existe um elemento com o autor do livro. Se a expressão retornar -1, o autor não foi encontrado. Se retornar a posição, foi encontrado.
                    authors.push(book.author);
                }
            }
         }
        console.log("Total de autores:" ,authors.length);
    }
countAuthors();


//Transformar a função acima em uma função que ira receber o nome do autor e devolver os livros desse autor.
function booksByAuthor(searchString){
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === searchString){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${searchString}:  ${books.join("; ")}`);
}
booksByAuthor('Augusto Cury')