const getball = document.querySelector(".ball");
const cbcontainer = document.querySelector(".changemodebox .container");
const getpane = document.querySelector(".pane");
const getcalbtns = document.querySelectorAll("table tr th input");
const getinstruction = document.querySelector(".instruction");
const getpostbtn = getinstruction.lastElementChild.children[getinstruction.lastElementChild.children.length - 1];


/*

// let getinput = document.querySelector(".mode");
// let getlight = document.querySelector(".light-btn");
// let getdark  = document.querySelector(".dark-btn");
/!*

getlight.addEventListener("click",function(){

    console.log(getball);
    console.log(getball.classList);
    getball.className = "ball active" ;

});
*!/
/!*

getdark.addEventListener("click",function(){


    console.log(getball);
    console.log(getball.classList);
    getball.className = "ball" ;


});
*!/

*/

cbcontainer.addEventListener("click",function(){

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.classList);
    //
    // console.log(getball.previousElementSibling);
    // console.log(getball.previousElementSibling.checked);

    let modebtn = getball.previousElementSibling;

/*
    // console.log(modebtn);

    // let checkmode = modebtn.checked ;

    // console.log(checkmode);

    // checkmode = !checkmode;

    */

    modebtn.checked === true ? modebtn.checked = false : modebtn.checked = true ;

    changebg(modebtn.checked);

    changebtncolor(modebtn.checked);

    getball.classList.toggle("active");

});

// console.log(getpane.children[1].children[0].backgroundColor);

function changebg(cond){

    if(cond){

        getball.style.backgroundColor = "var(--primary-color)";
        getball.parentElement.style.backgroundColor = "var(--third-color)";

        document.body.style.backgroundImage = `url("./img/day1.png")`;

        getpane.style.backgroundColor = "var(--sixth-color)";

        getpane.children[1].children[0].backgroundColor = "var(--daytable-olor)";

        getpane.nextElementSibling.children[0].style.color = "var(--primary-color)";

        getinstruction.style.color = "#000" ;

        getpostbtn.style.backgroundColor = "var(--primary-color)";

        getpostbtn.style.color = "var(--third-color)";

    }else{

        getball.style.backgroundColor = "var(--third-color)";
        getball.parentElement.style.backgroundColor = "var(--primary-color)" ;

        document.body.style.backgroundImage = `url("./img/night\ 1.png")`;

        getpane.style.backgroundColor = "var(--primary-color)";

        getpane.children[1].children[0].backgroundColor = "var(--nighttable-color)";

        getpane.nextElementSibling.children[0].style.color = "var(--third-color)";

        getinstruction.style.color = "var(--third-color)";

        getpostbtn.style.backgroundColor = "var(--third-color)";

        getpostbtn.style.color = "var(--primary-color)";
    }

}

function changebtncolor(cnd){

    let getcalbtn ;

    for( getcalbtn of getcalbtns ){

        if( cnd ){

            getcalbtn.style.backgroundColor = "var(--daybtn-color)";

        }else{

            getcalbtn.style.backgroundColor = "var(--nightbtn-color)";
        }

    }

}


