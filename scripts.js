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

function calculate(a,b,operation){
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
    if(operation == null){ // either we add to a, or this is an calculate
        if(isNaN(e.target.id) == false){
            a += `${e.target.id}`;
            result = "";
            display();
        }
        else if(e.target.id == 'add' || e.target.id == 'subtract' || e.target.id == 'multiply' || e.target.id == 'divide'){
            operation = e.target.id;
            if(result){
                a = parseFloat(result.toFixed(5));
                result = "";
                b = "";
            }
            display();
        }
        else if(e.target.id == 'clear'){
            a = "";
            b = "";
            result = "";
            operation = null;
            display();
        }
        else if(e.target.id == 'delete'){
            if(result){
                a = result.toString();
                result = "";
            }
            a = a.slice(0,-1);
            if(a == ""){
                display();
            }
            else{
                display();
            }
        }
        else if(e.target.id == 'period'){
            if(a=="" && result != ""){
                a = `${result}`;
                result = '';
            }

            if(!a.includes('.')){
                a += '.'
            }
            display();
        }
    }
    else{
        if(isNaN(e.target.id) == false){
            b += `${e.target.id}`;
            display();
        }
        else if(e.target.id == 'add' || e.target.id == 'subtract' || e.target.id == 'multiply' || e.target.id == 'divide'){
            if(b != ""){ // if b = "", we are just changing operations, else, calculate it
                a = calculate(a,b,operation);
                b = "";
            }
            operation = e.target.id;
            display();
            
        }
        else if(e.target.id == 'clear'){
            a = "";
            b = "";
            result = "";
            operation = null;
            display();
        }
        else if(e.target.id == 'delete'){
            b = b.slice(0,-1);
            if(b == ""){
                display();
            }
            else{
                display();
            }
        }
        else if(e.target.id == 'equal'){
            if(b != ""){ // if b == "" do nothing
                if(b == 0 && operation=='divide'){
                    a = "";
                    b = "";
                    result = "";
                    operation = null;
                    answer.innerHTML = 'Larry';
                    
                }
                else{
                    result = calculate(a,b,operation);
                    a = "";
                    b = "";
                    operation = null;
                    display();
                }
            }
        }
        else if(e.target.id == 'period'){
            if(!b.includes('.')){
                b += '.'
                display();
            }
        }

    }
}

function inputKey(e){
    console.log(e);
    if(operation == null){ // either we add to a, or this is an calculate
        if(isNaN(e.key) == false){
            a += `${e.key}`;
            result = "";
            display();
        }
        else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '\/'){
            if(e.key == '+'){
                operation = 'add';
            }
            else if(e.key == '-'){
                operation = 'subtract';
            }
            else if(e.key == '*'){
                operation = 'multiply';
            }
            else if(e.key == '\/'){
                operation = 'divide';
            }
            if(result){
                a = parseFloat(result.toFixed(5));
                result = "";
                b = "";
            }
            display();
        }
        else if(e.key == 'c'){
            a = "";
            b = "";
            result = "";
            operation = null;
            display();
        }
        else if(e.key == 'Backspace'){
            if(result){
                a = result.toString();
                result = "";
            }
            a = a.slice(0,-1);
            if(a == ""){
                display();
            }
            else{
                display();
            }
        }
        else if(e.key == '.'){
            if(a=="" && result != ""){
                a = `${result}`;
                result = '';
            }

            if(!a.includes('.')){
                a += '.'
            }
            display();
        }
    }
    else{
        if(isNaN(e.key) == false){
            b += `${e.key}`;
            display();
        }
        else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '\/'){
            if(e.key == '+'){
                operation = 'add';
            }
            else if(e.key == '-'){
                operation = 'subtract';
            }
            else if(e.key == '*'){
                operation = 'multiply';
            }
            else if(e.key == '\/'){
                operation = 'divide';
            }
            if(b != ""){ // if b = "", we are just changing operations, else, calculate it
                a = calculate(a,b,operation);
                b = "";
            }
            operation = e.key;
            display();
            
        }
        else if(e.key == 'c'){
            a = "";
            b = "";
            result = "";
            operation = null;
            display();
        }
        else if(e.key == 'Backspace'){
            b = b.slice(0,-1);
            if(b == ""){
                display();
            }
            else{
                display();
            }
        }
        else if(e.key == 'Enter' || e.key == '='){
            console.log('enter');
            if(b != ""){ // if b == "" do nothing
                if(b == 0 && operation=='divide'){
                    a = "";
                    b = "";
                    result = "";
                    operation = null;
                    answer.innerHTML = 'Larry';
                    
                }
                else{
                    result = calculate(a,b,operation);
                    a = "";
                    b = "";
                    operation = null;
                    display();
                }
            }
        }
        else if(e.key == '.'){
            if(!b.includes('.')){
                b += '.'
                display();
            }
        }

    }
}
function display(){
    let s = ''
    if(result){
        result = parseFloat(result.toFixed(5));
        answer.innerHTML = `${result}`;
    }
    else if(a == ""){
        answer.innerHTML = "0";
    }
    else if(operation == null){
        answer.innerHTML = `${a}`;
    }
    else if (operation){
        let operator = document.querySelector(`#${operation}`);
        operator = operator.innerHTML; 
        s = `${a} ${operator}`
        if(b){
            s += ` ${b}`;
        }
        answer.innerHTML = s;
    }
}


let buttons = document.querySelectorAll('button');
let a = "";
let b = "";
let result = "";
let operation = null;
let answer = document.querySelector("#answer");
buttons.forEach(button =>{
    button.addEventListener('click',input);
})
document.addEventListener('keydown', inputKey);
