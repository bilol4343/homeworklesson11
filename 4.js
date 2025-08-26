function task4(arr) {
    let result = [];

    for (let str of arr) {
        if (/[0-9]/.test(str)) {  
            result.push(str);
        }
    }

    return result;
}

console.log(task4(["1a", "a", "2b", "b"])); 

console.log(task4(["abc", "abc10"])); 

console.log(task4(["abc", "ab10c", "a10bc", "bcd"])); 

console.log(task4(["this is a test", "test123", "hello"])); 

