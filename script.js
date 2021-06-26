// Exercicio 01 - transformar notas escolares

function transformNote(nota) {
    if (nota < 0 || nota > 100) throw "Invalid note"
    else if (nota < 60) return 'F';
    else if (nota < 70) return 'D';
    else if (nota < 80) return 'C';
    else if (nota < 90) return 'B';
    else return 'A';
}

console.log(transformNote(19));

// Exercicio 02 - Objeto de financias
// Propriedades: array de receitas e array de despesas
// Metodo: mostrar saldo e se esta negativo ou positivo

function Finances() {
    this.incomings = [];
    this.expenses = [];
    this.addIncome = (...newIncome) => {for (let income of newIncome) this.incomings.push(income)};
    this.addExpense = (...newExpense) => {for (let expense of newExpense) this.expenses.push(expense)};
    this.balance = () => {
        let totalIncome = this.incomings.reduce((a, b) => a + b, 0); 
        let totalExpense = this.expenses.reduce((a, b) => a + b, 0); 
        let finalBalance = totalIncome - totalExpense;
        if (finalBalance < 0) console.log("Negative balance of:", `${finalBalance.toFixed(2)}U$`);
        else console.log("Positive balance of:", `${finalBalance.toFixed(2)}U$`);
    }
}

let myFinance = new Finances();

myFinance.addIncome(50);
myFinance.addExpense(34);
myFinance.addIncome(...[5,10,20]);
myFinance.addExpense(...[1,3,4]);
myFinance.addExpense(7);

console.log(myFinance.incomings);
console.log(myFinance.expenses);
myFinance.balance();

// Exercicio 03 - conversao de temperaturas em uma string
// Celsius - C, Fahrenheit - F

function conversion(temp) {
    let tempNum = Number(temp.slice(0,-1));
    let tempSym = temp.charAt(temp.length-1)
    let newTemp;
    if (tempSym === "F") {
        newTemp = (tempNum - 32) * (5/9);
        return newTemp.toFixed(2) + "C";
    }
    else if (tempSym === "C") {
        newTemp = tempNum * (9/5) + 32;
        return newTemp.toFixed(2) + "F";
    }
    else return "Temperature not reconized. Please insert a #F or #C for conversion";
}

console.log(conversion("32F"));
console.log(conversion("42C"));
console.log(conversion("34R"));


// Exercicio 04 - Buscando e encontrando dados em array

const bookByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

function findCategories() {
    let _totalPerCategory = [];
    bookByCategory.forEach(thisCategory => {
        _totalPerCategory.push({
                                category: thisCategory.category, 
                                total: thisCategory.books.length
                            });
    })
    const categories = {
        totalCategories: bookByCategory.length,
        totalPerCategory: _totalPerCategory
    };

    return categories;

}

function findTotalAuthors() {
    let totalAuthors = [];
    bookByCategory.forEach(thisCategory => {
        thisCategory.books.forEach(thisBook => {
            if (!totalAuthors.includes(thisBook.author)) totalAuthors.push(thisBook.author);
        });
    });
    return totalAuthors;
}

function showBooksPerAuthor(authorName) {
    let booksFromAuthor = [];
    bookByCategory.forEach(thisCategory => {
        thisCategory.books.forEach(thisBook => {
            if (thisBook.author === authorName) booksFromAuthor.push(thisBook.title);
        })
    })
    return booksFromAuthor;
}

console.log(findCategories());
console.log(findTotalAuthors());
console.log(showBooksPerAuthor("Augusto Cury"));

// Obs: para printar arrays, usar .join(", "), ou outro separador de preferencia no argumento da função

