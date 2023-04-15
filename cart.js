// '''''''''''''''''''''''''''''''''''''''''''''trial'''''''''''''''''''''''''''''''''''''''''''''''
res();
function res(){
  
    var arr=[];
   
    obj={
      "id": 1,
      "name": "Crocodile",
      "description": "Crocodile Multicolor Regular Fit Check Cotton Shirt",
      "price":"2299",
      "image" : "https://img.tatacliq.com/images/i10/437Wx649H/MP000000017136986_437Wx649H_202304081455471.jpeg",
      "discount" :25
    }
   
    arr.push(obj);
    obj={
        image:"https://www.shutterstock.com/image-photo/summer-beach-holiday-online-shopping-260nw-461355724.jpg",
        name:"g",
        description:"this is the best t-shirt you ever got",
        price:900,
        size:7,
        color:"mixup",
        discount:800
    }
    arr.push(obj);
    localStorage.setItem("my-product",JSON.stringify(arr))
}


// -------------------------------trial------------------------------------------------------------------
window.addEventListener('scroll',function(){
    var navbar = document.querySelector(".nav");
    var navbar2 = document.querySelector(".sec");
    navbar.classList.toggle('sticky',window.scrollY)
    navbar2.classList.toggle('sticky1',window.scrollY)
    })

// document.querySelector('.accounts').addEventListener('mouseover',function(){
//     document.querySelector('.speech-bubble').classList.add('display')
// })
// document.querySelector('.keep').addEventListener('mouseover',function(){
//     document.querySelector('.speech-bubble').classList.add('display')
// })
// document.querySelector('.keep').addEventListener('mouseout',function(){
//     document.querySelector('.speech-bubble').classList.remove('display')
// })


var my = localStorage.getItem('my-product');

var productInfo = document.querySelector('.product-info');
var productSide = document.querySelector('.product-side');
var sum  = 0;
var diff = 0;
if(my== null){
document.querySelector('.empty').style.display = 'flex';
// alert("nill")
} 
else{
    my = JSON.parse(my)
      if(my.length == 0){
        document.querySelector('.empty').style.display = 'flex';
       }
    else{
   document.querySelector('.empty').style.display = 'none';
   document.querySelector('footer').style.display = 'block';
   document.querySelector('.info').style.display = 'block';
   productInfo.style.display = "flex"
   // product info display flex

    
    for(var i = 0; i < my.length; i++){
        var div = document.createElement('div');
    // div.setAttribute('class','x')
        div.innerHTML = `<div class="product">
        <div class="img">
          <img src="${my[i].image}"alt="">
        </div>
        <div class="details">
        <p class="names"  style="font-size:17px">${my[i].name}</p>
          <p class="product-name"  style="font-size:17px">${my[i].description}</p>
          
          <p class="price" style="color:green;font-weight:bold">₹${my[i].discount}<p class="dprice" style="color:red">₹${my[i].price}</p></p>
          <div class="counter" style="font-size:17px" >
            Quantity:
            <span class="down"  style="color:red;font-weight:bolder"  onClick='decreaseCount(event, this,${i})'>-</span>
            <input type="text" value="1">
            <span style="color:green;font-weight:bolder" class="up" onClick='increaseCount(event, this , ${i})'>+</span>
          </div>
      
          <div class="line" style="font-weight:bolder" ></div>
          
            <div class="whist">
           
              <p class="remove" style="color:red;font-size:17px" onclick="rem(${i})">Remove</p>
            </div>
          
        </div>
        <div class="delivery">
          <div class="del">
            <img src="img/deliveryIcon.svg" alt="">
            Delivery by<p class="date">30th April</p> 
            | <p class="free">FREE</p>
          </div>
        </div>
      </div>`
      productSide.append(div)
     
      
     var quant=JSON.parse(localStorage.getItem("quantity"));
     sum += Number(my[i].price);
    //  window.reload();
    diff += Number(my[i].discount);
    
    
    }
    
    productInfo.append(productSide)
    productInfo.getElementsByClassName.flexDirection = 'row-reverse'
    document.querySelectorAll('.total')[0].innerHTML = sum;
    document.querySelectorAll('.total')[1].innerHTML = sum;
    document.querySelector('#dif').innerHTML = sum - diff;
    document.querySelector('#fl').innerHTML = sum - diff;
    document.querySelector('.tot').innerHTML =  diff;

    var priceobj = {
      tprice: (sum ),
      dvalue: (sum - diff),
      dprice: (diff)
    }
    localStorage.setItem('priceobj',JSON.stringify(priceobj))
    localStorage.setItem('bagtotal',JSON.stringify(priceobj.dprice))
    console.log(priceobj);

  }
}
//counter

var x = 0
var z=0
function increaseCount(a, b , idx) {
  
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  x +=  Number(JSON.parse(localStorage.bagItem)[idx].price)
  z += Number(JSON.parse(localStorage.bagItem)[idx].discounted_price)
  y(+x,+z)
}

function decreaseCount(a, b , idx) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    x -=  Number(JSON.parse(localStorage.bagItem)[idx].price)
    z -= Number(JSON.parse(localStorage.bagItem)[idx].discounted_price)
    console.log(x,z)
    y(+x,+z)
    
  }
}

function y(x,z){
  document.querySelectorAll('.total')[0].innerHTML = sum +x;
  document.querySelectorAll('.total')[1].innerHTML = sum +x;
  document.querySelector('#dif').innerHTML = (sum +x) - (diff+z);
  document.querySelector('#fl').innerHTML = (sum +x) - (diff+z);
  document.querySelector('.tot').innerHTML =  diff+z;
  var priceobj = {
    tprice: (sum + x),
    dvalue: ((sum +x) - (diff+z)),
    dprice: (diff + z)
  }
  localStorage.setItem('priceobj',JSON.stringify(priceobj))
  console.log(priceobj);

}
var f = 1
function coupon(c){
  if(document.querySelector('#coupe').value == 'masai20'){
  if(f==1){
    var dis = document.querySelector('#dif');
    var newpay =  Math.floor(Number(payable.innerHTML) * 0.7);
    var newdis = Math.floor(Number(dis.innerHTML) + Number(payable.innerHTML) * 0.3);
    payable.innerHTML = newpay;
    dis.innerHTML =  newdis;

    var priceobj = {
      tprice: (sum + x),
      dvalue: newdis,
      dprice: newpay
    }
    document.querySelector('#fl').innerHTML = priceobj.dvalue;
    localStorage.setItem('priceobj',JSON.stringify(priceobj))
    f=0
  }
}
}
var payable = document.querySelector('.tot');
console.log(payable.value);
function rem(idy){
  console.log(my[idy]);
  my.splice(idy,idy+1)
  if(my.length == 0){
   document.querySelector('.empty').style.display = 'flex';
  }
  localStorage.setItem('my-product',JSON.stringify(my))
  location.reload();
}