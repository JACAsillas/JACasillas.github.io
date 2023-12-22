let tempColor;
let frozenCube;
let dryCube;
let coolerCube;

let useCube;

document.getElementById("summit1").onclick  = function (){
  frozenCube = document.getElementById("fr").value;
  dryCube = document.getElementById("dr").value;
  coolerCube = document.getElementById("cl").value;

  document.getElementById("dr_tl").innerHTML = dryCube;
  document.getElementById("cl_tl").innerHTML = coolerCube;
  document.getElementById("fr_tl").innerHTML = frozenCube;

  let AveragePallet =((Math.abs(0-frozenCube-dryCube-coolerCube))/26).toFixed(2);
  let numDry = (dryCube/AveragePallet).toFixed(1);
  let numFrz = (frozenCube/AveragePallet).toFixed(1);
  let numCool = (coolerCube/AveragePallet).toFixed(1);

  document.getElementById("totalAv").innerHTML = AveragePallet;
  document.getElementById("FrAv").innerHTML = numFrz;
  document.getElementById("ClAv").innerHTML = numCool;
  document.getElementById("DrAv").innerHTML = numDry;


  document.getElementById("fr_ev").innerHTML = evenNum(numFrz);
  document.getElementById("cl_ev").innerHTML = evenNum(numCool);
  document.getElementById("dr_ev").innerHTML = evenNum(numDry);

  document.getElementById("fr_hi").innerHTML = Math.round(frozenCube/evenNum(numFrz));
  document.getElementById("cl_hi").innerHTML = Math.round(coolerCube/evenNum(numCool));
  document.getElementById("dr_hi").innerHTML = Math.round(dryCube/evenNum(numDry));




}
document.getElementById("summit2").onclick = function (){
  useCube = document.getElementById("Cube").value;
}


document.getElementById("fr_button").onclick = function (){
  tempColor = "blue";
  document.getElementById("fr_button").style.backgroundColor = "grey";
  document.getElementById("dr_button").style.backgroundColor = "white";
  document.getElementById("cl_button").style.backgroundColor = "white";

}
document.getElementById("dr_button").onclick = function (){
  tempColor = "red";
  document.getElementById("fr_button").style.backgroundColor = "white";
  document.getElementById("dr_button").style.backgroundColor = "grey";
  document.getElementById("cl_button").style.backgroundColor = "white";

}
document.getElementById("cl_button").onclick = function (){
  tempColor = "green";
  document.getElementById("fr_button").style.backgroundColor = "white";
  document.getElementById("dr_button").style.backgroundColor = "white";
  document.getElementById("cl_button").style.backgroundColor = "grey";
}

function cellAdd(cell) {
  document.getElementById(cell).onclick =
    function (){
      document.getElementById(cell).style.backgroundColor = tempColor;
      if(tempColor =="red"){
        dryCube -=useCube;
        document.getElementById("dr_tl").innerHTML = dryCube;
      }
      else if(tempColor == "green"){
        coolerCube -=useCube;
        document.getElementById("cl_tl").innerHTML = coolerCube;
      }
      else{
        frozenCube -=useCube;
        document.getElementById("fr_tl").innerHTML = frozenCube;
      }
    }
}
cellAdd("c1");cellAdd("c2");cellAdd("c3");cellAdd("c4");cellAdd("c5");
cellAdd("c6");cellAdd("c7");cellAdd("c8");cellAdd("c9");cellAdd("c10");
cellAdd("c11");cellAdd("c12");cellAdd("c13");cellAdd("c14");cellAdd("c15");
cellAdd("c16");cellAdd("c17");cellAdd("c18");cellAdd("c19");cellAdd("c20");
cellAdd("c21");cellAdd("c22");cellAdd("c23");cellAdd("c24");cellAdd("c25");
cellAdd("c26");

let evenNum= function (num){
  num =  Math.round(num);
  if(num%2==0){
    return num;
  }
  else{
    return num-1;
  }

}
