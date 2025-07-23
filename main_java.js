//Find the Smallest and Biggest Numbers
function minMax(arr) {
    var extrem = [Math.min(...arr), Math.max(...arr)]
    return extrem
}

//Sum of Cubes
function sumOfCubes(nums) {
	var sum = 0
    for ( var i in nums) {
        sum += nums[i]**3;
    }
    return sum
}

//Square Every Digit
function squareDigits(n) {
    var nombreStr = String(n);
    var tableauDeChaines = nombreStr.split('');
    var tab_1 = tableauDeChaines.map(Number);
    var tab_2 = [];
    var sqr_dgt = "";
    for (var i of tab_1){
        tab_2.push(i**2)
    }
    for (var j of tab_2){
        sqr_dgt += String(j)
    }
    return parseInt(sqr_dgt)
}

//Is the Number Symmetrical?
function isSymmetrical(num) {
	var numstr = num.toString();
    var numInversestr = numstr.split("").reverse().join("");
    var numInverse = parseInt(numInversestr, 10);
    if (num === numInverse)
        return true
    else
        return false
}

//Filter out Strings from an Array
function filterArray(arr) {
    var filtedarr = []
	for (var i of arr){
        if (i >= 0 && typeof i === 'number'){
            filtedarr.push(i);
        }
    }
    return filtedarr;
}

//How Edabit Works
function hello() {
	return "hello edabit.com"
}

//Maximum Edge of a Triangle
function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

//Seven Boom!
function sevenBoom(arr) {
    var num_a = "";
    for (var i of arr){
        num_a += String(i)
    }
    var nombrestr = String(num_a);
    var tableaudechaine = nombrestr.split('');
    var arr_2 = tableaudechaine.map(Number);
	var verif_for_seven = arr_2.indexOf(Number("7"))
    if (verif_for_seven == -1){
        return "there is no 7 in the array"
    }
    else{
        return "Boom!"
    }
}
