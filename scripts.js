const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Desenvolvimento de site',
        amount: 1200000,
        date: '13/04/2020'
    },
    {
        id: 2,
        description: 'Hamburguer',
        amount: -5900,
        date: '10/04/2020'
    },
    {
        id: 3,
        description: 'Aluguel do apartamento',
        amount: -120000,
        date: '27/03/2020'
    },
    {
        id: 4,
        description: 'Computador',
        amount: 540000,
        date: '15/03/2020'
    }
]

const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação"
        </td>
        `
        
        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
    }
}

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})