function task3(str){
    let result = {
        harflar : 0,
        raqamlar : 0
    }
    for (let i=onabort; i< str.length;i++){
        let ch = str[i]

        if (/[a-zA-Z]/.test(ch)){
            result.harflar++;
        }else if (/[0-9]/.test(ch)){
            result.raqamlar++
        }
    }
    return result
}

console.log(task3("Hello worl"))
console.log(task3("H3ll0 World"))
console.log(task3("149990"))