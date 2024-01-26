let show = document.getElementById("display2");

const cal = document.getElementById("Calculator");

let one = document.getElementById("1st");
let two = document.getElementById("2nd");
let thr = document.getElementById("3rd");
let fou = document.getElementById("4th");

let text;
let buffer;

let ret2;

let index=0;
let index2=0;

cal.addEventListener("click", function (event) {
    if (index==1) {
        if (index2==1) {
            one.textContent= buffer;
            show.textContent = ret2;                
        }
        else if (index2==2) {
            two.textContent= buffer;
            show.textContent = ret2;                
        }
        else if (index2==3) {
            thr.textContent= buffer;
            show.textContent = ret2;                
        }
        else if (index2==4) {
            fou.textContent= buffer;
            show.textContent = ret2; 
            index2 = 0;               
        }   
        index=0;
    }
    if (event.target.matches(".operand")) {
        let value = event.target.getAttribute("data-value");
        if (show.textContent == "0") {
            show.textContent = value
        } else {
            show.textContent += value;
        }


    }
    else if (event.target.matches(".operator")) {
        let value = event.target.getAttribute("data-value");
        if (value == '=') {
            text = show.textContent;
            let parts = text.match(/[+\-x÷]|\d+/g);
            let ret = 0;
            let i = 0;

            while (i < parts.length) {
                if (i == 0) {
                    switch (parts[i + 1]) {
                        case '+':
                            ret = parseInt(parts[i]) + parseInt(parts[i + 2]);
                            break;
                        case '-':
                            ret = parseInt(parts[i]) - parseInt(parts[i + 2]);
                            break;
                        case '÷':
                            ret = parseInt(parts[i]) / parseInt(parts[i + 2]);
                            break;
                        case 'x':
                            ret = parseInt(parts[i]) * parseInt(parts[i + 2]);
                            break;
                        default:
                            break;
                    }
                    i += 1;
                } else {
                    switch (parts[i + 1]) {
                        case '+':
                            ret += parseInt(parts[i + 2]);
                            break;
                        case '-':
                            ret -= parseInt(parts[i + 2]);
                            break;
                        case '÷':
                            ret /= parseInt(parts[i + 2]);
                            break;
                        case 'x':
                            ret *= parseInt(parts[i + 2]);
                            break;
                        default:
                            break;
                    }
                    i += 1;
                }
            }
        index =1;            
        show.textContent= ret;
        ret2=ret;
        buffer=text+"="+ret.toString();
        index2+=1;
        } 
        else {
            show.textContent += value;
        }

    }
    else if(event.target.matches(".bully")){
        let value = event.target.getAttribute("data-value");
        if(value == "CE"){
            show.textContent = 0;                        
        }
    }

})
let str = "192+89-90*180";
let parts = str.match(/[+\-*/]|\d+/g);
str.match(/[+\-*/]|\d+/g);
console.log(parts);