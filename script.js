var fullString = "";
var oldValue = "";

function equalToBtn(){
  if(fullString === null){
    document.getElementById("output").value = "No Value";
  } else {
    document.getElementById("output").value= eval(fullString);
    oldValue = eval(fullString);
  }
}

function setOutputData(opData){
  document.getElementById("output").value += opData;
  fullString += opData;
}

function clearAll(){
fullString = "";
document.getElementById("output").value = "";
}

function prevValue(){
  document.getElementById("output").value = oldValue;
}
