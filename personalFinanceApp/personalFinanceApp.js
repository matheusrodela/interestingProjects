let familyCashFlow = {
    incomes:[],
    expenses: []
}

function sum(array) {
    let total = 0;
    
    for(let value of array){
        total += value.Quantia
    }

    return total
}


function calculateBalance() {
    const calculateIncomes = sum(familyCashFlow.incomes)
    const calculateExpenses = sum(familyCashFlow.expenses)

    const total = calculateIncomes - calculateExpenses

    const notInDebt = total >= 0 

    let balanceText = "Saldo Negativo"

    if (notInDebt){
        balanceText = "Saldo Positivo"
    }

    console.log(`${balanceText}: R$${total.toFixed(2).replace(".",",")}`)
}

//Add novas rendas
function Income(label, amount) {
    this.Renda = label
    this.Quantia = amount
}

let income1 = new Income('Salário', 3000)
let income2 = new Income("Aluguel", 1100)
let income3 = new Income("Pensão", 2000)

familyCashFlow.incomes.push((income1),(income2),(income3))


//Add novas despesas
function Expense(label, amount){
    this.Gasto = label
    this.Quantia = amount
}

let expense1 = new Expense('Parcela do carro', 1500)
let expense2 = new Expense('mercado', 1000)
let expense3 = new Expense('Plano de saúde', 1000)

familyCashFlow.expenses.push((expense1),(expense2),(expense3))


//Apagar despesas
//    let expenseIndex = familyCashFlow.expenses.indexOf(expense3)
//    familyCashFlow.expenses.splice(expenseIndex,1)

//Apagar receitas
//    let incomeIndex = familyCashFlow.incomes.indexOf(income2)
//    familyCashFlow.incomes.splice(incomeIndex,1)

console.log(familyCashFlow.incomes, familyCashFlow.expenses)
calculateBalance()