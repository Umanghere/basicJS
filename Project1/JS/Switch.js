
document.write("Here is the Program to Illustrate Switch Statement by User..." + "</br></br>");

let num= prompt("Enter Any Number From 1 to 7");

switch(num){

    case "1":
        document.write("Today is Monday");
        break;

    case "2":
        document.write("Today is Tuesday");
        break;

    case "3":
        document.write("Today is Wednesday");
        break;

    case "4":
        document.write("Today is Thursday");
        break;

    case "5":
        document.write("Today is Friday");
        break;      
        
    case "6":
        document.write("Today is Saturday");
        break;

    case "7":
        document.write("Today is Sunday");
        break;

    default:
        document.write("Not a valid Input");

}
