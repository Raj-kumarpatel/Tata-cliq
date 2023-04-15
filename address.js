document.getElementById("SaveAdd").addEventListener("click",saveadd)

function saveadd() {

var a=document.getElementsByClassName("Ankit")
var line=[]
line.push(document.getElementById("AreaAdd").value)

for(var i=1;i<a.length; i++) {
    line.push(a[i].value)
}
line.push(a[0].value)
localStorage.setItem("address",JSON.stringify(line))

window.location.href="payment.html"}




    
// Getting total value from local stroage and showing in this
var bagt=localStorage.getItem("bagtotal")
console.log(bagt)
var pricearray=document.getElementsByClassName("cartRflot")

for(var i=0; i<pricearray.length; i++) {
pricearray[i].textContent=bagt;

}  
    


document.getElementById("allAdd").addEventListener("click",remove) 

function remove() {
  var a=document.getElementById("add1")
    var b=a.querySelectorAll("input")
    for(var i=0; i<b.length; i++) {
        console.log(b[i])
        b[i].value="" 
    }
  
    var namecatch=document.getElementById("namesAdd")
    
    var data_arr=namecatch.querySelectorAll("input")
    for(var i=0; i<data_arr.length; i++) {
        data_arr[i].value=""
    }

}

// adding cancel eventlistner
document.getElementById("redadd").addEventListener("click",movetoback)

function movetoback() {
    window.location.href="cart.html"
}


document.getElementById("nav2logo").addEventListener("click",function(){
    window.location.href="../landing-page/index.html"
    })