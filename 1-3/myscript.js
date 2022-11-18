const arr1 = [1, 5, 10, 15];
const arr2 = [1, 1, 3, 3, 4, 4];
const arr3 = ["Ala", "Robert", "Stanislaw"];

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
            z = log(x);
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

function log(n)
{
    return (n > 1) ? 1 + log(n / 2) : 0;
}

function power(x, y, z){
    z = z * x;
    y -= 1;
    if(y == 1){
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

function handleArrayForm(form){
    document.getElementById("arrayResult").innerHTML = arrayFunction(form.arrayName.value);
}

function arrayFunction(arr){
    let x, y;
    //return eval(arr);
    switch (typeof eval(arr)[0]){
        case "number":
            x = 0;
            y = 0;
            for(let i = 0; i < eval(arr).length; i++){
                if(eval(arr)[i] > x){
                    y = x;
                    x = eval(arr)[i];
                };
            }
            break;

        case "string":
            x = "";
            y = "";
            for(let i = 0; i < eval(arr).length; i++){
                if(eval(arr)[i].length > x.length){
                    y = x;
                    x = eval(arr)[i];
                };
            }
            break;

        default:
            alert("lol");
            break;
    }
    return y;
}



