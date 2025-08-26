function checkout(items) {
  let total = 0;

  for (let item of items) {
    let subtotal = item.prc * item.qty;
    if (item.taxable) {
      subtotal += subtotal * 0.06; 
    }
    total += subtotal;
  }

  return Number(total.toFixed(2)); 
}

console.log(checkout([
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
]));
