//Reverse a String: Write a function that reverses a given string.
function ReverseText(text_1) {
    var textInverse = text_1.split("").reverse().join("");
    return textInverse
}

//Count Characters: Create a function that counts the number of characters in a string.
function SumString(text_2) {
    let tab_2 = text_2.split(' ')
    let sum = 0
    for (var elem of tab_2){
        sum += elem.length
    }
    return sum
}

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function Capitilizing(text_3) {
    return text_3.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function minMax(arr_1) {
    var extrem = [Math.min(...arr_1), Math.max(...arr_1)]
    return extrem
}

//Sum of Array: Create a function that calculates the sum of all elements in an array.
function SumArrey(arr_2) {
    let sum = 0
    for (var i of arr_2){
        sum += i
    }
    return sum
}

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr_3) {
    //Filtre la liste pour ne garder que les éléments qui sont des nombres
    var filtedarr = []
	for (var i of arr){
        if (i >= 0 && typeof i === 'number'){
            filtedarr.push(i);
        }
    }
    return filtedarr;
}

//Factorial: Write a function to calculate the factorial of a given number.
function factorielle(num_1){
    if (num_1 === 0||num_1 === 1){
        return 1
    }else{
        return num_1 * factorielle(num_1 - 1)
    }
}
//Prime Number Check: Create a function to check if a number is prime or not.
function PrimeNumber(num_2){
    if (num_2 <=1){
        return false
    }
    for (let i = 2, end = Math.sqrt(num_2); i <= end; i++){
        if (num_2 % i == 0) {return "Pas premier"}
    return "Premier"}
}

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function Fibonacci(num_3){
    let tab_fib = [0, 1]
    for (let i = 2; i < num_3; i++){
    tab_fib[i] = tab_fib[i - 1] + tab_fib[i - 2]
    }
    return tab_fib
}
