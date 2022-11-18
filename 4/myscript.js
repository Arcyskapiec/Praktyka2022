function handleRangeForm(form){
    document.getElementById("rangeResult").innerHTML = range(form.x.value, form.y.value);
}

function range(x, y){
    x = parseInt(x);
    y = parseInt(y);
    let z = x;
    /*switch (x){
        case (x > y):
            x -= 1;
            break;
        
        case (x < y):
            x += 1;
            break;

        default:
            return z;
            break;
    };
    console.log(z + ", " + range(x, y));*/
    if ( x <= y ){
        console.log(x);
        range(x + 1, y);
    }
    else{
        return 0;
    }
}


