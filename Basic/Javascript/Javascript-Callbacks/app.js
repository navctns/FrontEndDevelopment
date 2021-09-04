function myFirst(){
    myDisplayer("Hello");
}

function mySecond(){
    myDisplayer("Goodbye")
}

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

//CALLBACK

function mycalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    // return sum;
    myCallback(sum);
}

function displayResult(result){
    // let result = mycalculator(5,7);
    document.getElementById('result').innerHTML = result;
}

function calculationResult(num1, num2){
    mycalculator(num1, num2, displayResult);
}