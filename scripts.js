function add(a,b){
    return parseFloat(a)+parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a)-parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a)*parseFloat(b);
}

function divide(a,b){
    return parseFloat(a)/parseFloat(b);
}

function operator(a,b,operation){
    if(operation == 'add'){
        return add(a,b);
    }
    else if(operation == 'subtract'){
        return subtract(a,b);
    }
    else if(operation == 'multiply'){
        return multiply(a,b);
    }
    else if(operation == 'divide'){
        return divide(a,b);
    }
}

function input(e){
    if(operation == null){ // either we add to a, or this is an operator
        if(isNaN(e.target.id) == false){
            a += `${e.target.id}`;
            result = "";
            display(a);
        }
        else if(e.target.id == 'add' || e.target.id == 'subtract' || e.target.id == 'multiply' || e.target.id == 'divide'){
            operation = e.target.id;
            if(result){
                a = result;
                result = "";
            }
            display(parseFloat(parseFloat(a).toFixed(5)));
        }
        else if(e.target.id == 'clear'){
            a = "";
            b = "";
            result = "";
            operation = null;
            display(0);
        }
        else if(e.target.id == 'delete'){
            if(result){
                console.log(result);
                a = result.toString();
                console.log(a);
                result = "";
            }
            a = a.slice(0,-1);
            if(a == ""){
                display(0);
            }
            else{
                display(a);
            }
        }
        else if(e.target.id == 'period'){
            console.log('hi');
            if(!a.includes('.')){
                a += '.'
                display(a);
            }
        }
    }
    else{
        if(isNaN(e.target.id) == false){
            b += `${e.target.id}`;
            display(b);
        }
        else if(e.target.id == 'add' || e.target.id == 'subtract' || e.target.id == 'multiply' || e.target.id == 'divide'){
            if(b != ""){ // if b = "", we are just changing operations, else, calculate it
                a = operator(a,b,operation);
                display(a);
                b = "";
            }
            operation = e.target.id;
            
        }
        else if(e.target.id == 'clear'){
            a = "";
            b = "";
            result = "";
            operation = null;
            display(0);
        }
        else if(e.target.id == 'delete'){
            b = b.slice(0,-1);
            if(b == ""){
                display(0);
            }
            else{
                display(b);
            }
        }
        else if(e.target.id == 'equal'){
            if(b != ""){ // if b == "" do nothing
                if(b == 0 && operation=='divide'){
                    a = "";
                    b = "";
                    result = "";
                    operation = null;
                    display("Err");
                }
                else{
                    result = operator(a,b,operation);
                    a = "";
                    b = "";
                    operation = null;
                    display(parseFloat(result.toFixed(5)));
                }
            }
        }
        else if(e.target.id == 'period'){
            if(!b.contains('.')){
                b += '.'
                display(b);
            }
        }

    }
}

function display(string){
    let answer = document.querySelector("#answer-container");
    answer.innerHTML = string;
}


let buttons = document.querySelectorAll('button');
let a = "";
let b = "";
let result = "";
let operation = null;
buttons.forEach(button =>{
    button.addEventListener('click',input)
})