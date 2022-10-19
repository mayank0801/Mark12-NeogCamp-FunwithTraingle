const Height=document.querySelector("#height");
const Base=document.querySelector("#base");
const FindArea=document.querySelector("#btn-check");


function areaFind(){
    console.log("click");
    var height=Number(Height.value);
    var base=Number(Base.value);

    if(base<=0||height<=0){
        output.innerText="Invalid Input";
    }
    else{
    var area=1/2*(base*height);
    area=area.toFixed(2);
    output.innerText=area;
    }
}

FindArea.addEventListener("click",areaFind);