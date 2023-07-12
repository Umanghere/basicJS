document.write("Here is the Program to Illustrate If-Else Statement by User..." + "</br></br>");

let a = prompt("Enter your Age: ")

if (a<=13){
    document.write("You are a Child");
}

else if (a>13 && a<=17){
    document.write("You are a Teenager");
}

else{
    document.write("You are an Adult");
}