
var myshop = JSON.parse( localStorage.getItem("MyShop"))  
 console.log(myshop);
// console.log("hi there")
var mykart = JSON.parse( localStorage.getItem("myKart")) 

var idCheck = parseInt(mykart[0]);
let filterKart = myshop.filter((item)=> item.id==idCheck)

renderProduct(filterKart)






 

function renderProduct(prodfil)
  { 
    let container = document.getElementById("container")
    container.innerHTML=" ";
       prodfil.map((item)=>{
        let prodFlex= document.createElement("div");
  prodFlex.classList.add("item");

  let prodImage = document.createElement("img");
  prodImage.setAttribute("src",item.image)
  prodImage.style.height="175px";
  prodImage.style.width="125px";


  let prodTitle = document.createElement("div")
  prodTitle.classList.add("info");
  prodTitle.innerHTML=item.title;

  let prodPrice = document.createElement("div")
  
   prodPrice.classList.add("info")
   prodPrice.innerHTML = "Price -"+" "+`<b>$${item.price}</b>`;
  //console.log(item.price)

  // let productCategory = document.createElement("div")
  // productCategory.innerHTML = "Category- "+ item.category
  // productCategory.classList.add("info")
 
  // let productdes = document.createElement("div")
  // productdes.innerHTML = "Discription- "+ item.description
  // productdes.classList.add("info")

let productrating= document.createElement("div")
  productrating.innerHTML = "Rating- "+ `<b>${item.rating.rate}</b>`
  productrating.classList.add("info")

  let cartBtn = document.createElement("button")
  cartBtn.innerHTML = "Add to Cart";
  cartBtn.classList.add("button")

  prodFlex.appendChild(prodImage);
 prodFlex.appendChild(prodTitle);
  prodFlex.appendChild(prodPrice);
  //prodFlex.appendChild(productCategory)
  //prodFlex.appendChild(productdes)
  prodFlex.appendChild(productrating)
  prodFlex.appendChild(cartBtn)
container.appendChild(prodFlex)
       })
  }