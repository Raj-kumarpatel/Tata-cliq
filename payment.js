var span = document.getElementById("container").addEventListener("click", myFnct)
var div = document.getElementById("first")
var arrow = document.getElementById("arrow")
var arrowUpper = document.getElementById("arrowUpper")
var count = 0;

function myFnct() {
    count++
    if (count % 2 == 1) {
        arrow.style.display = "none";
        arrowUpper.style.display = "inline-block"
        div.style.display = "inline-block";
    } else {
        arrowUpper.style.display = "none";
        arrow.style.display = "inline-block";
        div.style.display = "none";
    }
}

// Getting total value from local stroage and showing in this
var bagt=localStorage.getItem("bagtotal")
console.log(bagt)
var pricearray=document.getElementsByClassName("cartRflot")
for(var i=0; i<pricearray.length; i++) {
pricearray[i].textContent=bagt;

} 




document.getElementById("DebitContainer").addEventListener("click", showData)
var Dee = document.getElementById("Line1")
var Lower = document.getElementById("Lower")
var Upper = document.getElementById("Upper")
var count = 0;
function showData() {
    count++
    if (count % 2 == 1) {
        Lower.style.display = "none";
        Upper.style.display = "inline-block"
        Dee.style.display = "inline-block";
    } else {
        Upper.style.display = "none";
        Lower.style.display = "inline-block";
        Dee.style.display = "none";
    }
}
document.getElementById("btn").addEventListener("click", checkdetails)
function checkdetails() {
    // Checking card number length
    var cardlength = document.getElementById("cardNumber").value
    var cvv = document.getElementById("ccv").value
    if (cardlength.length != 16 || cvv.length != 3) alert("Please enter valid credtionals")

    else {
        
        localStorage.removeItem("cartlist")
        // console.log(h)
        // window.localStorage.removeItem('cartlist')
        
        window.location.href="otp.html"
        }
    }

document.getElementById("Button").addEventListener("click",dcheckdetails)

function dcheckdetails() {
    // Checking card number length
var cardlength=document.getElementById("DebitNumber").value
var cvv=document.getElementById("Back").value
if(cvv.length!=3 && cardlength.length!=16) alert("Please enter valid credtionals")
else {
   
    localStorage.removeItem("cartlist")
    // console.log(h)
    // window.localStorage.removeItem('cartlist')
    
    window.location.href="otp.html"
    }
}

document.getElementById("nav2logo").addEventListener("click",function(){
    window.location.href="index.html"
    })