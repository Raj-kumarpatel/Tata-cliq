let myProducts = [];
getMyProducts();
async function getData(url) 
{
    try {
        let response = await fetch(url)
        let data = await response.json();
        console.log(data);
        return data;
    }   catch (error) {
        console.log(error)
    }  
}
function displayProducts(arr)
{
        document.getElementById("products-cardDivRight").innerHTML=""
        arr.forEach(function (ele,index) { 
        let divCard = document.createElement("div");
        divCard.setAttribute("class","card-childDivs")

        let image = document.createElement("img");
        image.setAttribute("src",ele.image);
        image.style.width="70%"

        let name = document.createElement("h3");
        name.textContent=ele.name;
        name.style.color="black"
        name.style.fontSize="22px"
        name.style.fontFamily="sans-serif"


        let description = document.createElement("p");
        description.textContent= ele.description;
        description.style.color="grey"
        description.style.fontSize="18px"
        description.style.fontFamily="sans-serif"

        let price = document.createElement("p");
        price.textContent='₹'+ Number(ele.price)
        
        let bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("id","bottomDiv")

        let discountTagDiv = document.createElement("div");
        discountTagDiv.setAttribute("class","discount-tag")
        discountTagDiv.textContent = "-" + ele.discount + "% Off!";
        
        let buttonDiv = document.createElement("div");
        let button = document.createElement("button");
        button.setAttribute("id","viewBtn")
        button.addEventListener("click", async function(){
           goToProduct(ele)
        })
        button.innerText="View"
        buttonDiv.append(button)

        bottomDiv.append(discountTagDiv,buttonDiv)
        divCard.append(image,name,description,price,bottomDiv);
        document.getElementById("products-cardDivRight").append(divCard);
    })
}
function goToProduct(ele)
{ 
    console.log("hey",ele)
    localStorage.setItem("selected-product",JSON.stringify(ele))
    
    window.location.href='../productdetails/productDetails.html'
}
async function getMyProducts ()
{
    let url = 'http://localhost:3000/kids-wear'
    
    try {  
        let data = await getData(url)
        myProducts=data;
        console.log("HH",myProducts)
        displayProducts(myProducts)
    } catch (error) {
        console.log(error)
    }    
}

// document.getElementById("sort-select").addEventListener("change", async function () {
//     let sortVal = document.getElementById("sort-select").value;
//     if (sortVal==="low") 
//     {
//         let url = 'http://localhost:3000/kids-wear?_sort=price&_order=asc'
//         try {
//             let response = await getData(url);
//             myProducts = response;
//             displayProducts(myProducts)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     else if (sortVal==="high") 
//     {
//         let url = 'http://localhost:3000/kids-wear?_sort=price&_order=desc'
//         try {
//             let response = await getData(url);
//             myProducts = response;
//             displayProducts(myProducts)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// })

document.getElementById("sort-select").addEventListener("change", async function () {
    sortFun()
})

async function sortFun()
{
    let url = 'http://localhost:3000/kids-wear'
    let sortVal = document.getElementById("sort-select").value;
    try {
        let response = await getData(url);
        myProducts=response
        myProducts.sort(function(a,b){    
            if (sortVal==="low") 
            {
                return a.price-b.price
            }
            else {
                return b.price-a.price
            }
    })
    displayProducts(myProducts)
    } catch (Error) {
        console.log(Error)
    }
    
}

document.getElementById("brand").addEventListener("change",async function(){
    let filterVal = document.getElementById("brand").value
    let url1 = 'http://localhost:3000/kids-wear'
    let url2 = 'http://localhost:3000/kids-wear?name='+filterVal
    if(filterVal==="Select") {
        let response = await getData(url1);
        myProducts= response;
        displayProducts(myProducts)
    }
    else {
        try {
            let response = await getData(url2);
            myProducts= response;
            console.log("FILT",filterVal);
            console.log("ARR",myProducts)
            displayProducts(myProducts)
        }   catch (err) {
            console.log(err);
        }
    }  
})

document.getElementById("men").addEventListener("change", selCatFun);
document.getElementById("women").addEventListener("change", selCatFun)
document.getElementById("kids").addEventListener("change", selCatFun)
document.getElementById("electronics").addEventListener("change", selCatFun)


function selCatFun(e) {
    let res = e.target.value;
    if(e.target.checked)
    {
        if(res==="women") 
        {
            location.href="women.html"
        }
        else  if(res==="men") 
        {
            location.href="mens.html"
        } 
        else  if(res==="kids") 
        {
            location.href="kids.html"
        }
        else
        {
            location.href="electronics.html"
        }
    }
    
}

