let books = new Map()

function addBook(name,author,price,count){
    if (books.has(name)){
        let book = books.get(name)
        book.count += count
        book.set(name,book)
    }else{
        books.set(name,{author:author,price:price,count:count})
    }
}

function sellBook(name,quantity){
    if (!books.has(name)){
        console.log(`bizda "${name}" dgan kitob yo `)
        return
    }

    let book = books.get(name)
    if (books.count < quantity){
        console.log(`bizda "${name}" kitob yetarli emas `)
    }else{
        book.count -= quantity
        books.set(name,book)
        console.log(`${quantity} ta "${name}" sotildi`)
    }
}

function showBooks(){
    if (books.size === 0){
        console.log("Kitobla yoo")
        return
    }
    console.log("Magazdegi kitobla ")
    books.forEach((value,key) => {
        console.log(`${key} => Author: ${value.author}, Price: ${value.price}$, Count: ${value.count}`);
    });
}
function mostExpensiveBook(){
    if (books.size === 0){
        console.log("Bunaqa kitob yoq ")
    }
    let maxPrice = -Infinity;
    let expensiveBook = null

    books.forEach ((value,key)=> {
        if (value.price > maxPrice){
            maxPrice = value.price
            expensiveBook = {name:key , ...value}
        }
    });
}

addBook("O'tkan Kunlar", "Cholpon", 15, 5)
addBook("Alpomish", "Anonim", 20, 3)
console.log(books)


sellBook("O'tgan kunlar", 2)
sellBook("Alpomish",4)


showBooks()

mostExpensiveBook()