let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,

    addExpense: function(type, amount) {
        if (this.hasOwnProperty(type)) {
            this[type] += amount;
            console.log(`${type} uchun ${amount} qo‘shildi. Hozirgi qiymat: ${this[type]}`);
        } else {
            console.log(`${type} degan xarajat turi mavjud emas.`);
        }
    },

    removeExpense: function(type, amount) {
        if (this.hasOwnProperty(type)) {
            this[type] -= amount;
            if (this[type] < 0) this[type] = 0; 
            console.log(`${type} dan ${amount} olib tashlandi. Hozirgi qiymat: ${this[type]}`);
        } else {
            console.log(`${type} degan xarajat turi mavjud emas.`);
        }
    },

    printMonthlyReport: function() {
        console.log(" Oylik Xarajatlar Hisoboti:");
        console.log(` Suv: ${this.water}`);
        console.log(` Gaz: ${this.gas}`);
        console.log(` Elektr: ${this.electricity}`);
        console.log(`Umumiy: ${this.water + this.gas + this.electricity}`);
    }
};


Expenses.addExpense("water", 50);
Expenses.addExpense("gas", 30);
Expenses.removeExpense("water", 10);
Expenses.printMonthlyReport();
