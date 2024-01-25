let Name = prompt("please enter your name");

let Marks = prompt("enter your marks" +     Name);
switch(true){
    case Marks > 90 && Marks <= 100:
        result = "Great you are topper" + Name
        break;
        case Marks > 70 && Marks <= 90:
            result = "congratulations you got the first class" +   Name 
            break;
            case Marks > 40 && Marks <= 70:
                result = "congratulations you got the second class" + Name 
                break;
                case Marks > 10 && Marks <= 40:
                    result = "sorry you are failed better luck next time" + Name 
                    break;
                    default:
                        result = "error"
                        break;
                    
}
document.write("Hello" +   Name  + "<h1>" + result + "</h1>")    
