// '''''''''''''''''''''''''''''''''''''''''''''trial'''''''''''''''''''''''''''''''''''''''''''''''
// res()
function res(f){
  
    var arr=[];
   
    obj={
        image:"https://www.shutterstock.com/image-photo/summer-beach-holiday-online-shopping-260nw-461355724.jpg",
        description:"this is the best t-shirt you ever got",
        price:900,
        size:7,
        color:"mixup",
        discounted_price:800
    }
   
    arr.push(obj);
    obj={
        image:"https://www.shutterstock.com/image-photo/summer-beach-holiday-online-shopping-260nw-461355724.jpg",
        description:"this is the best t-shirt you ever got",
        price:900,
        size:7,
        color:"mixup",
        discounted_price:800
    }
    arr.push(obj);
    localStorage.setItem("bagItem",JSON.stringify(arr))
}


// -------------------------------trial------------------------------------------------------------------
window.addEventListener('scroll',function(){
    var navbar = document.querySelector(".nav");
    var navbar2 = document.querySelector(".sec");
    navbar.classList.toggle('sticky',window.scrollY)
    navbar2.classList.toggle('sticky1',window.scrollY)
    })

document.querySelector('.accounts').addEventListener('mouseover',function(){
    document.querySelector('.speech-bubble').classList.add('display')
})
// document.querySelector('.keep').addEventListener('mouseover',function(){
//     document.querySelector('.speech-bubble').classList.add('display')
// })
// document.querySelector('.keep').addEventListener('mouseout',function(){
//     document.querySelector('.speech-bubble').classList.remove('display')
// })


var bagItem = localStorage.getItem('bagItem');

var productInfo = document.querySelector('.product-info');
var productSide = document.querySelector('.product-side');
var sum  = 0;
var diff = 0;
if(bagItem == null){
document.querySelector('.empty').style.display = 'flex';
// alert("nill")
} 
else{
    bagItem = JSON.parse(bagItem)
      if(bagItem.length == 0){
        document.querySelector('.empty').style.display = 'flex';
       }
    else{
   document.querySelector('.empty').style.display = 'none';
   document.querySelector('footer').style.display = 'block';
   document.querySelector('.info').style.display = 'block';
   productInfo.style.display = "flex"
   // product info display flex

    
    for(var i = 0; i < bagItem.length; i++){
        var div = document.createElement('div');
    // div.setAttribute('class','x')
        div.innerHTML = `<div class="product">
        <div class="img">
          <img src="${bagItem[i].image}" alt="">
        </div>
        <div class="details">
          <p class="product-name">${bagItem[i].description}</p>
          <p class="price">₹${bagItem[i].discounted_price}<p class="dprice">₹${bagItem[i].price}</p></p>
          <div class="counter">
            Quantity:
            <span class="down" onClick='decreaseCount(event, this,${i}) '>-</span>
            <input type="text" value="1">
            <span class="up" onClick='increaseCount(event, this , ${i})'>+</span>
          </div>
          <div class="color-size">
            <div class="rang">Color: <p class="color">${bagItem[i].color}</p></div>
            <div class="length">Size: <p class="size">${bagItem[i].size}</p></div>
          </div>
          <div class="line"></div>
          
            <div class="whist">
           
              <p class="remove"  onclick="rem(${i})">Remove</p>
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
     sum += Number(bagItem[i].price)*quant;
    //  window.reload();
    diff += Number(bagItem[i].discounted_price)*quant;
    
    
     
    
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
    
  }
}
//counter

var x = 0
var z=0
function increaseCount(a, b , idx) {
  
  var input = b.previousElementSibling;
  var value = parseInt(input.value);
  value = isNaN(value) ? 0 : value;
  value++;
//   var dprice=Number(bagItem[i].price)*value;
  
  localStorage.setItem("quantity",JSON.stringify(value));
  input.value = value;
//   x +=  Number(JSON.parse(bagItem)[idx].price)
//   z += Number(JSON.parse(a.localStorage.bagItem)[idx].discounted_price)
  y(+x,+z)
}

function decreaseCount(a, b , idx) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    // x -=  Number(JSON.parse(a.path[11].localStorage.bagItem)[idx].price)
    // z -= Number(JSON.parse(a.path[11].localStorage.bagItem)[idx].discounted_price)
    y(+x,+z)
    
  }
}

function y(x,z){
  document.querySelectorAll('.total')[0].innerHTML = sum;
  document.querySelectorAll('.total')[1].innerHTML = sum;
  document.querySelector('#dif').innerHTML = (sum) - (diff);
  document.querySelector('#fl').innerHTML = (sum ) - (diff);
  document.querySelector('.tot').innerHTML =  diff;
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
    localStorage.setItem('priceobj',JSON.stringify(priceobj))
    f=0
  }
}
}
var payable = document.querySelector('.tot');
console.log(payable.value);
function rem(idy){
  console.log(bagItem[idy]);
  bagItem.splice(idy,1)
  if(bagItem.length == 0){
   document.querySelector('.empty').style.display = 'flex';
  }
  localStorage.setItem('bagItem',JSON.stringify(bagItem))
  location.reload();
}

// let loggedIn = JSON.parse(localStorage.getItem("loginData"));
// document.querySelector(".UserName").textContent = loggedIn[0].name;