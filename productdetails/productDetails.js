let arr = [];
let obj = JSON.parse(localStorage.getItem("selected-product"))
console.log("KK",obj);
arr.push(obj)
console.log("YY",typeof arr, arr)

displayData(arr)

function displayData(arr)
{
    arr.forEach(function(ele){
        let imageDiv = document.createElement("div");
        let image = document.createElement("img")
        image.setAttribute("src",ele.image)
        imageDiv.append(image)

        let contentDiv = document.createElement("div");
        let upperDiv = document.createElement("div");
        let bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("id","bottom")

        let name = document.createElement("h3");
        name.textContent=ele.name
        let descp = document.createElement("p");
        descp.textContent=ele.description;
        let price = document.createElement("p");
        price.textContent='₹'+ Number(ele.price);
        let p1 = document.createElement("p");
        p1.textContent="Inclusive of all taxes";
        let p2 = document.createElement("p");
        p2.textContent="Free shipping for all orders";

        let h4 = document.createElement("h4");
        h4.textContent="Available Offers"

        let div1 = document.createElement("div");
        div1.setAttribute("class","divss")
        let image1 = document.createElement("img");
        image1.setAttribute("src","https://assets.tatacliq.com/medias/sys_master/images/46494116380702.png");
       
        let offer1 = document.createElement("p");
        offer1.textContent="Up to 5% NeuCoins on Tata Neu HDFC Bank Credit Cards | No Promo Code RequiredEvery Spend. Every Time | 1 NeuCoin = Rs.1more"
        div1.append(image1,offer1);

        let div2 = document.createElement("div");
        div2.setAttribute("class","divss")
        let image2 = document.createElement("img");
        image2.setAttribute("src","https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg");
        let offer2 = document.createElement("p");
        offer2.textContent="Flat 10% off on all UPI transaction| Use Code: UPI| Min Purchase: ₹1000 or more"
        div2.append(image2,offer2);

        let div3 = document.createElement("div");
        div3.setAttribute("class","divss")
        let image3 = document.createElement("img");
        image3.setAttribute("src","https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg");
        let offer3 = document.createElement("p");
        offer3.textContent="15% off on AU Small Finance Bank Limited Debit & Credit Cards.Use Code: AUCLIQ300|Min Purchase: ₹500more"
        div3.append(image3,offer3);

        let div4 = document.createElement("div");
        div4.setAttribute("class","divss")
        let image4 = document.createElement("img");
        image4.setAttribute("src","https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg");
        let offer4 = document.createElement("p");
        offer4.textContent="Get flat Rs. 200 off on your first order.Use Code: FIRSTCLIQ|Min Purchase: ₹1200more"
        div4.append(image4,offer4);

        let div5 = document.createElement("div")
        div5.setAttribute("id","buttonDiv")
        let buyBtn = document.createElement("button");
        buyBtn.setAttribute("id","buyButton")
        buyBtn.innerText="BUY NOW"
        buyBtn.addEventListener("click", function(){
            goToBag(ele)
        })

        let addBtn = document.createElement("button");
        addBtn.setAttribute("id","addButton")
        addBtn.innerText="Add To Bag"
        addBtn.addEventListener("click", function(){
            addToBagFun(ele);
        })
        div5.append(buyBtn,addBtn)

        upperDiv.append(name,descp,price,p1,p2);
        bottomDiv.append(h4,div1,div2,div3,div4,div5)
        contentDiv.append(upperDiv,bottomDiv)

        document.getElementById("left-div-image-container").append(imageDiv);
        document.getElementById("right-div-details").append(contentDiv)
    })
}

function goToBag(ele) {
    console.log("gotobag")
}

function addToBagFun(ele) {
    console.log ("Addtobag working")
    let myArr = JSON.parse(localStorage.getItem("my-product"))||[];
    myArr.push(ele)
    localStorage.setItem("my-product",JSON.stringify(myArr))
}