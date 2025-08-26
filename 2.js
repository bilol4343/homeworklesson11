let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,

    addExpense: function(type, amount) {
        if (this.hasOwnProperty(type)) {
            this[type] += amount;
        } else {
            console.log(`${type} degan xarajat turi mavjud emas.`);
        }
    },

    removeExpense: function(type, amount) {
        if (this.hasOwnProperty(type)) {
            this[type] -= amount;
            if (this[type] < 0) this[type] = 0;
        } else {
            console.log(`${type} degan xarajat turi mavjud emas.`);
        }
    },

    
    printMonthlyReport: function() {
        console.log(`Suv uchun oylik xarajat: $${this.water}`);
        console.log(`Gaz uchun oylik xarajat: $${this.gas}`);
        console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`);
        console.log(`Umumiy: $${this.water + this.gas + this.electricity}`);
    }
};

Expenses.addExpense("water", 40);
Expenses.addExpense("gas", 25);
Expenses.addExpense("electricity", 60);

Expenses.printMonthlyReport();
