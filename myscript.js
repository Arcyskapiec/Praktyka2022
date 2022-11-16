function handleCalculatorForm(form){
    //console.log(form.x.value);
    //let toDisplay = form.inputbox.value;
    document.getElementById("calcResult").innerHTML = calculate(form.x.value, form.y.value, form.operation.value);
}

function handlePalindromeForm(form){

    //let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = checkPalindrome(form.palindrome.value);
}

function calculate(x, y, o){
    x = parseInt(x);
    y = parseInt(y);
    let z = 0;
    switch (o) {
        case "+":
            z = x + y;
            break;
        
        case "-":
            z = x - y;
            break;

        case "/":
            if (y == 0){
                alert("can't divide by 0");
                break;
            }
            z = x / y;
            break;

        case "*":
            z = x * y;
            break;

        case "log":
            z = Math.log(x) / Math.log(2);
            break;

        case "pow":
            z = x;
            z = power(x, y, z);
            break;
            

        case "%":
            z = x % y;
            break;

        default:
            alert("error");
            break;
    }
    return z;
}

function power(x, y, z){
    z = z * x;
    y -= 1;
    if(y = 0){
        return z;
    }
    else{
        return power(x, y, z);
    }
}

function checkPalindrome(p){
    let p2 = "";
    for(let i = p.length; i >= 0; i--){
        p2 += p.substr(i, 1);
    }
    if(p == p2){
        return true;
    }
    else{
        return false;
    }
}

function handleAnagramForm(form){

    let word1 = form.inputbox3.value;
    let word2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = anagram(word1, word2);
}

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
                break;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}

console.log(anagram("siema", "siemb"));
console.log("a".charCodeAt(0));
console.log("b".charCodeAt(0));