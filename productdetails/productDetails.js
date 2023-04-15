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
        let rsDiv = document.createElement("div")
        rsDiv.style.display="flex"
        bottomDiv.setAttribute("id","bottom")

        let name = document.createElement("h3");
        name.textContent=ele.name

        let rs = document.createElement("p");
        rs.textContent='₹'

        let descp = document.createElement("p");
        descp.textContent=ele.description;

        let price = document.createElement("h3");
        price.textContent=Number(ele.price);

        rsDiv.append(rs,price)
        let p1 = document.createElement("p");
        p1.textContent="Inclusive of all taxes";

        p1.style.fontSize="13px"
        let p2 = document.createElement("p");

        p2.textContent="Free shipping for all orders";
        p2.style.color="red"
        p2.style.fontSize="13px"
        p2.style.fontWeight="bold"

        let hr = document.createElement("hr");
        

        let h4 = document.createElement("h4");
        h4.textContent="Available Offers"

        
        let div1 = document.createElement("div");
        div1.setAttribute("class","divss")

        let image1 = document.createElement("img");
        image1.setAttribute("src","https://assets.tatacliq.com/medias/sys_master/images/46494116380702.png");
       
        let div1child = document.createElement("div");
        div1child.style.display="flex";
        div1child.style.flexDirection="column"

        let offerDiv1 = document.createElement("div");

        let offer1 = document.createElement("p");
        offer1.textContent="Up to 5% NeuCoins on Tata Neu HDFC Bank Credit Cards | No Promo Code RequiredEvery Spend"
        offer1.style.fontWeight="bold";
        offer1.style.fontSize="15px";
        offer1.style.color="black"

        let div1s = document.createElement("div");
        div1s.style.marginTop="-15px"
        let pDiv1s1 = document.createElement("p");
        pDiv1s1.textContent="Every Time | 1 NeuCoin = Rs.1"
        pDiv1s1.style.fontSize="15px"

        let pdiv1s2 = document.createElement("p");
        pdiv1s2.textContent="more"
        pdiv1s2.style.fontSize="15px"
        pdiv1s2.style.color="blue"
        pdiv1s2.style.cursor="pointer"

        offerDiv1.append(offer1)

        div1s.append(pDiv1s1,pdiv1s2)
        div1s.style.display="flex"
        div1child.append(offerDiv1,div1s)

        div1.append(image1,div1child);


        let div2 = document.createElement("div");
        div2.setAttribute("class","divss")

        let image2 = document.createElement("img");
        image2.setAttribute("src","https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg");

        let div2child = document.createElement("div");
        div2child.style.display="flex";
        div2child.style.flexDirection="column"

        let offerDiv2 = document.createElement("div");

        let offer2 = document.createElement("p");
        offer2.textContent="Flat 10% off on all UPI transaction" //No Promo Code RequiredEvery Spend"
        offer2.style.fontWeight="bold";
        offer2.style.fontSize="15px";
        offer2.style.color="black"

        // let offer2 = document.createElement("p");
        // offer2.textContent="Flat 10% off on all UPI transaction| Use Code: UPI| Min Purchase: ₹1000 or more"
        // div2.append(image2,offer2);

        let div2s = document.createElement("div");
        div2s.style.marginTop="-15px"
        let pDiv2s1 = document.createElement("p");
        pDiv2s1.textContent="Use Code: UPI| Min Purchase: ₹1000 or "
        pDiv2s1.style.fontSize="15px"

        let pdiv2s2 = document.createElement("p");
        pdiv2s2.textContent=" more"
        pdiv2s2.style.fontSize="15px"
        pdiv2s2.style.color="blue"
        pdiv2s2.style.cursor="pointer"

        offerDiv2.append(offer2)

        div2s.append(pDiv2s1,pdiv2s2)
        div2s.style.display="flex"
        div2child.append(offerDiv2,div2s)

        div2.append(image2,div2child);

        let div3 = document.createElement("div");
        div3.setAttribute("class","divss")

        let image3 = document.createElement("img");
        image3.setAttribute("src","https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg");

        let div3child = document.createElement("div");
        div3child.style.display="flex";
        div3child.style.flexDirection="column"

        let offerDiv3 = document.createElement("div");

        let offer3 = document.createElement("p");
        offer3.textContent="15% off on AU Small Finance Bank Limited Debit & Credit Cards." //No Promo Code RequiredEvery Spend"
        offer3.style.fontWeight="bold";
        offer3.style.fontSize="15px";
        offer3.style.color="black"

        // let offer3 = document.createElement("p");
        // offer3.textContent="Use Code: AUCLIQ300|Min Purchase: ₹500more"
        // div3.append(image3,offer3);

        let div3s = document.createElement("div");
        div3s.style.marginTop="-15px"
        let pDiv3s1 = document.createElement("p");
        pDiv3s1.textContent="Use Code: AUCLIQ300|Min Purchase: ₹500"
        pDiv3s1.style.fontSize="15px"

        let pdiv3s2 = document.createElement("p");
        pdiv3s2.textContent=" more"
        pdiv3s2.style.fontSize="15px"
        pdiv3s2.style.color="blue"
        pdiv3s2.style.cursor="pointer"

        offerDiv3.append(offer3)

        div3s.append(pDiv3s1,pdiv3s2)
        div3s.style.display="flex"
        div3child.append(offerDiv3,div3s)

        div3.append(image3,div3child);

        let div4 = document.createElement("div");
        div4.setAttribute("class","divss")

        let image4 = document.createElement("img");
        image4.setAttribute("src","https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg");

        let div4child = document.createElement("div");
        div4child.style.display="flex";
        div4child.style.flexDirection="column"

        let offerDiv4 = document.createElement("div");

        let offer4 = document.createElement("p");
        offer4.textContent="Get flat Rs. 200 off on your first order." //No Promo Code RequiredEvery Spend"
        offer4.style.fontWeight="bold";
        offer4.style.fontSize="15px";
        offer4.style.color="black"


        // let offer4 = document.createElement("p");
        // offer4.textContent="Get flat Rs. 200 off on your first order.Use Code: FIRSTCLIQ|Min Purchase: ₹1200more"
        // div4.append(image4,offer4);

        let div4s = document.createElement("div");
        div4s.style.marginTop="-15px"
        let pDiv4s1 = document.createElement("p");
        pDiv4s1.textContent=".Use Code: FIRSTCLIQ|Min Purchase: ₹1200"
        pDiv4s1.style.fontSize="15px"

        let pdiv4s2 = document.createElement("p");
        pdiv4s2.textContent=" more"
        pdiv4s2.style.fontSize="15px"
        pdiv4s2.style.color="blue"
        pdiv4s2.style.cursor="pointer"

        div4s.append(pDiv4s1,pdiv4s2)
        div4s.style.display="flex"
        div4child.append(offerDiv4,div4s)

        offerDiv4.append(offer4)

        div4.append(image4,div4child);



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

        upperDiv.append(name,descp,rsDiv,p1,p2,hr);
        bottomDiv.append(h4,div1,div2,div3,div4,div5)
        contentDiv.append(upperDiv,bottomDiv)

        document.getElementById("left-div-image-container").append(imageDiv);
        document.getElementById("right-div-details").append(contentDiv)
    })
}

function goToBag(ele) {
    location.href="../cart.html"
        
}

function addToBagFun(ele) {
    console.log ("Addtobag working")
    let myArr = JSON.parse(localStorage.getItem("my-product"))||[];
    myArr.push(ele)
    localStorage.setItem("my-product",JSON.stringify(myArr))
}