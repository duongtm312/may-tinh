
function Addition(){
    let numBer1= parseInt(document.getElementById("numBer1").value)
    let numBer2= parseInt(document.getElementById("numBer2").value)
    document.getElementById("result").innerHTML=numBer1 + numBer2
}
function Subtraction(){
    let numBer1= document.getElementById("numBer1").value
    let numBer2= document.getElementById("numBer2").value
    document.getElementById("result").innerHTML= numBer1 - numBer2
}
function Multiplication(){
    let numBer1= document.getElementById("numBer1").value
    let numBer2= document.getElementById("numBer2").value
    document.getElementById("result").innerHTML= numBer1 * numBer2
}
function Division(){
    let numBer1= document.getElementById("numBer1").value
    let numBer2= document.getElementById("numBer2").value
    document.getElementById("result").innerHTML= numBer1 / numBer2
}