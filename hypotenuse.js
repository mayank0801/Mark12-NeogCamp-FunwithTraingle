const Height=document.querySelector("#height");
const base=document.querySelector("#Base");
const output=document.querySelector("#output");
const Find=document.querySelector("#btn-check");


function findHypotenuse(){
    var Base=Number(base.value);
    console.log(Base);


    var height=Number(Height.value);
    console.log(height);

    if(Base<=0||height<=0){
        output.innerText="Invalid Input";
    }
    else{
        var Hypotenuse=Math.sqrt(Base*Base+height*height);
        output.innerText=Hypotenuse;
    }    
}

Find.addEventListener("click",findHypotenuse);