// UI

const getdisplay = document.getElementsByClassName("display-screen")[0];
const getfirnum = document.getElementsByClassName("firstnumber-input");
const getsecnum = document.getElementsByClassName("seconnumber-input");
const getsign = document.getElementsByClassName("sign-input");
const getnumbtns = document.querySelectorAll(".num-btn");
const getsignbtns = document.querySelectorAll(".sign-btn");
const getequlbtn = document.getElementById("equal-btn");
const getclearbtn = document.getElementById("clear-btn");
const getinputbtns = document.querySelectorAll(".btn");


getdisplay.value = "";
// getdisplay.value = "Harry Poter";

// getfirnum[0].type = "";
// getsecnum[0].type = "text";
// getsign[0].type = "text";

// console.log(getcalbtns);

// Use for obj
// for( calbtn in getcalbtns ){
//
//     console.log(calbtn);
//     console.log(getcalbtns[calbtn]);
//
// }

console.log(getcalbtns.length);

let signArr = ["+","-","*","/"];


// for( let idx = 0 ; idx < getcalbtns.length ; idx++){
//
//     // console.log(getcalbtns[idx]);
//     // console.log(getcalbtns[idx].value);
//
//     getcalbtns[idx].addEventListener("click",function(event){
//
//         // console.log(event);
//         // console.log(event.type);
//         // console.log(event.target);
//         // console.log(event.target.value);
//         // console.log(getdisplay);
//         // console.log(getdisplay.className); // undefined
//         // console.log(getdisplay[0]);
//         // console.log(getdisplay[0].className);
//         // console.log(getdisplay[0].value);
//         // let cond = Array.isArray(getdisplay);
//         // console.log(cond);
//         // let displaytoarr = Array.from(getdisplay);
//         // console.log(Array.isArray(displaytoarr));
//         // console.log(displaytoarr[0]);
//         // console.log(displaytoarr[0].value);
//
//
//
//     });
// }



let firstnumber , secondnumber , result ;

getnumbtns.forEach(function(getnumbtn){

    // console.log(getnumbtn);
    // console.log(getnumbtn.value);

    getnumbtn.addEventListener("click",function(event){

        // console.log(event.target);
        // console.log(getfirnum[0].value);

        if( getsign[0].value === "" ){

            getfirnum[0].value += event.target.value;

        }else{

            getsecnum[0].value += event.target.value;
        }

        firstnumber = +getfirnum[0].value;
        secondnumber = Number(getsecnum[0].value);
    });

});



getinputbtns.forEach(function( getinputbtn ){

    // console.log(getinputbtn);

    getinputbtn.addEventListener("click",function(){

        // console.log(getdisplay.value);

        // console.log(getdisplay.value[getdisplay.value.length - 2]);

        // getdisplay.value[getdisplay.value.length - 1] === "+" || 
        // getdisplay.value[getdisplay.value.length - 1] === "-" ||
        // getdisplay.value[getdisplay.value.length - 1] === "*" || 
        // getdisplay.value[getdisplay.value.length - 1] === "/" ? 

        // // console.log(getdisplay.value[getdisplay.value.length - 1])

        // // console.log(getdisplay.value)

        // getdisplay.value = getdisplay.value.substring(0,getdisplay.value.length-1) + getinputbtn.value :
        // getdisplay.value += getinputbtn.value;

        test(getinputbtn.value,getdisplay.value[getdisplay.value.length - 1]);

    });
});

getsignbtns.forEach(function( getsignbtn){

    getsignbtn.addEventListener("click",function(eve){

        getsign[0].value = getsignbtn.value;

    });

});


getequlbtn.addEventListener("click",() => {



    // console.log(calculation(getsign[0].value))

    getdisplay.value = calculation(getsign[0].value);
    getfirnum[0].value = getdisplay.value;
    getsecnum[0].value = "";
    getsign[0].value = "";

});



function calculation( sign ){

    console.log(firstnumber,secondnumber);

    switch(sign){

        case "+":
            result = firstnumber + secondnumber;
        break;

        case "-":
            result = firstnumber - secondnumber;
        break;

        case "*":
            result = firstnumber * secondnumber;
        break;

        case "/":
            result = firstnumber / secondnumber;
        break;

        case "%":
            result = firstnumber % secondnumber;
        break;

    }

    return result ;

}



function test( getInput , getDisplay ){

    // for( value of signArr ){

    //     if( getInput === value ){

    //         console.log("hello");
        
    //     }else{

    //         getdisplay.value += getInput;
    //     }

    // }

    getdisplay.value += getInput;

    console.log(getInput);
    console.log(getDisplay);

    
    !signArr.includes(getInput) ? null :

    signArr.includes(getDisplay)   ?  getdisplay.value = getdisplay.value.substring(0,getdisplay.value.length - 2) + getInput : console.log("number") ; 

}



