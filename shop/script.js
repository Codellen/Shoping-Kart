// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };
fetch("https://fakestoreapi.com/products")
.then((res)=> res.json())
.then((data)=>{
//console.log(data)
var stringify = JSON.stringify(data)
localStorage.setItem("MyShop",stringify)
var parse = JSON.parse(stringify)
//console.log(parse)
var menswear = parse.filter((item)=> item.category =="men's clothing")
var womenswear = parse.filter((item)=> item.category =="women's clothing")
var jewellary = parse.filter((item)=> item.category =="jewelery")
var electronics = parse.filter((item)=> item.category =="electronics")
//console.log(menswear)
localStorage.setItem("MensWear",JSON.stringify(menswear))
localStorage.setItem("WomensWear",JSON.stringify (womenswear ))
localStorage.setItem("Jewellary",JSON.stringify(jewellary))
localStorage.setItem("Electronics",JSON.stringify(electronics))
})
 
let range25 = document.getElementById("0-25");
let applyfilter = document.getElementById("applyfilter")

//var menscloth = document.getElementById("MensClothing")
// var firstimage = document.getElementById("second")
// var dummydiv = document.getElementById("dummydiv")
// var image = document.createElement("img");
// var mens =  JSON.parse(localStorage.getItem("MensWear")) 
// console.log(mens)
// image.src = "path/to/image.jpg";
// image.alt = "Image";
// var filtered = mens.filter((item)=> item.id == 1);
// console.log(filtered)
// firstimage.setAttribute("src",filtered[0].image)
// dummydiv.appendChild(image)
// firstimage.appendChild(dummydiv);
// menscloth.appendChild(firstimage)

//Mens ProductRender
let container = document.getElementById("container")
var prodarr = JSON.parse(localStorage.getItem("MyShop"));
//console.log(prodarr)
//
let all = document.getElementById("all");
if(all.classList.contains("active"))
{
prodarr.map((item)=>{
  
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
  cartBtn.setAttribute("id",item.id)

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

all.addEventListener("click",allwear)
function allwear()
{
container.innerHTML=""
all.classList.add("active")
menButton.classList.remove("active")
women.classList.remove("active")
jewellary.classList.remove("active")
electric.classList.remove("active")
prodarr.map((item)=>{
  
  let prodFlex= document.createElement("div");
  prodFlex.classList.add("item");

  let prodImage = document.createElement("img");
  prodImage.setAttribute("src",item.image)
  prodImage.style.height="150px";
  prodImage.style.width="100px";


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
  productrating.innerHTML = "Rating- "+ item.rating.rate
  productrating.classList.add("info")

  let cartBtn = document.createElement("button")
  cartBtn.innerHTML = "Add to Cart";
  cartBtn.classList.add("button");
  cartBtn.setAttribute("id",item.id)


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



let menButton = document.getElementById("men")
menButton.addEventListener("click",showMenwear)

function showMenwear(){
  
  all.classList.remove("active");
  menButton.classList.add("active");
women.classList.remove("active")
jewellary.classList.remove("active")
electric.classList.remove("active")
  container.innerHTML="";
  let menArr = JSON.parse(localStorage.getItem("MensWear"))
  menArr.map((item)=>{

    let menFlex= document.createElement("div");
  menFlex.classList.add("item");

  let menImage = document.createElement("img");
  menImage.setAttribute("src",item.image)
  menImage.style.height="150px";
  menImage.style.width="100px";


  let menTitle = document.createElement("div")
 menTitle.classList.add("info");
 menTitle.innerHTML=item.title;

   let prodPrice = document.createElement("div")
  
   prodPrice.classList.add("info")
   prodPrice.innerHTML = "Price -"+" "+`<b>$${item.price}</b>`;

  // let productCategory = document.createElement("div")
  // productCategory.innerHTML = "Category- "+ item.category
  // productCategory.classList.add("info")
 
  // let productdes = document.createElement("div")
  // productdes.innerHTML = "Discription- "+ item.description
  // productdes.classList.add("info")

let menrating= document.createElement("div")
  menrating.innerHTML = "Rating- "+ item.rating.rate
  menrating.classList.add("info")

  let cartBtn = document.createElement("button")
  cartBtn.innerHTML = "Add to Cart";
  cartBtn.classList.add("button");
  cartBtn.setAttribute("id",item.id)


  menFlex.appendChild(menImage);
 menFlex.appendChild(menTitle);
  menFlex.appendChild(prodPrice);
  //prodFlex.appendChild(productCategory)
  //prodFlex.appendChild(productdes)
  menFlex.appendChild(menrating)
 menFlex.appendChild(cartBtn)
container.appendChild(menFlex)
  })

}

let women = document.getElementById("women")
women.addEventListener("click",()=>{
  container.innerHTML=""
  all.classList.remove("active");
  menButton.classList.remove("active");
  women.classList.add("active")
  jewellary.classList.remove("active")
electric.classList.remove("active")
  container.innerHTML="";
  let menArr = JSON.parse(localStorage.getItem("WomensWear"))
  menArr.map((item)=>{

    let menFlex= document.createElement("div");
  menFlex.classList.add("item");

  let menImage = document.createElement("img");
  menImage.setAttribute("src",item.image)
  menImage.style.height="150px";
  menImage.style.width="100px";


  let menTitle = document.createElement("div")
 menTitle.classList.add("info");
 menTitle.innerHTML=item.title;

   let prodPrice = document.createElement("div")
  
   prodPrice.classList.add("info")
   prodPrice.innerHTML = "Price -"+" "+`<b>$${item.price}</b>`;

  // let productCategory = document.createElement("div")
  // productCategory.innerHTML = "Category- "+ item.category
  // productCategory.classList.add("info")
 
  // let productdes = document.createElement("div")
  // productdes.innerHTML = "Discription- "+ item.description
  // productdes.classList.add("info")

let menrating= document.createElement("div")
  menrating.innerHTML = "Rating- "+ item.rating.rate
  menrating.classList.add("info")

  let cartBtn = document.createElement("button")
  cartBtn.innerHTML = "Add to Cart";
  cartBtn.classList.add("button");
  cartBtn.setAttribute("id",item.id)


  menFlex.appendChild(menImage);
 menFlex.appendChild(menTitle);
  menFlex.appendChild(prodPrice);
  //prodFlex.appendChild(productCategory)
  //prodFlex.appendChild(productdes)
  menFlex.appendChild(menrating)
 menFlex.appendChild(cartBtn)
container.appendChild(menFlex)
})
})

let jewellary = document.getElementById("jewel")
jewellary.addEventListener("click",()=>{
   container.innerHTML=""
  all.classList.remove("active");
  menButton.classList.remove("active");
  women.classList.remove("active")
  jewellary.classList.add("active")
electric.classList.remove("active")
  container.innerHTML="";
  let menArr = JSON.parse(localStorage.getItem("Jewellary"))
  menArr.map((item)=>{

    let menFlex= document.createElement("div");
  menFlex.classList.add("item");

  let menImage = document.createElement("img");
  menImage.setAttribute("src",item.image)
  menImage.style.height="150px";
  menImage.style.width="100px";


  let menTitle = document.createElement("div")
 menTitle.classList.add("info");
 menTitle.innerHTML=item.title;

   let prodPrice = document.createElement("div")
  
   prodPrice.classList.add("info")
   prodPrice.innerHTML = "Price -"+" "+`<b>$${item.price}</b>`;

  // let productCategory = document.createElement("div")
  // productCategory.innerHTML = "Category- "+ item.category
  // productCategory.classList.add("info")
 
  // let productdes = document.createElement("div")
  // productdes.innerHTML = "Discription- "+ item.description
  // productdes.classList.add("info")

let menrating= document.createElement("div")
  menrating.innerHTML = "Rating- "+ item.rating.rate
  menrating.classList.add("info")

  let cartBtn = document.createElement("button")
  cartBtn.innerHTML = "Add to Cart";
  cartBtn.classList.add("button");
  cartBtn.setAttribute("id",item.id)


  menFlex.appendChild(menImage);
 menFlex.appendChild(menTitle);
  menFlex.appendChild(prodPrice);
  //prodFlex.appendChild(productCategory)
  //prodFlex.appendChild(productdes)
  menFlex.appendChild(menrating)
 menFlex.appendChild(cartBtn)
container.appendChild(menFlex)
})
})


let electric = document.getElementById("elec")
electric.addEventListener("click",()=>{
   container.innerHTML=""
  all.classList.remove("active");
  menButton.classList.remove("active");
  women.classList.remove("active")
  jewellary.classList.remove("active")
electric.classList.add("active")
  container.innerHTML="";
  let menArr = JSON.parse(localStorage.getItem("Electronics"))
  menArr.map((item)=>{

    let menFlex= document.createElement("div");
  menFlex.classList.add("item");

  let menImage = document.createElement("img");
  menImage.setAttribute("src",item.image)
  menImage.style.height="150px";
  menImage.style.width="100px";


  let menTitle = document.createElement("div")
 menTitle.classList.add("info");
 menTitle.innerHTML=item.title;

   let prodPrice = document.createElement("div")
  
   prodPrice.classList.add("info")
   prodPrice.innerHTML = "Price -"+" "+`<b>$${item.price}</b>`;

  // let productCategory = document.createElement("div")
  // productCategory.innerHTML = "Category- "+ item.category
  // productCategory.classList.add("info")
 
  // let productdes = document.createElement("div")
  // productdes.innerHTML = "Discription- "+ item.description
  // productdes.classList.add("info")

let menrating= document.createElement("div")
  menrating.innerHTML = "Rating- "+ item.rating.rate
  menrating.classList.add("info")

  let cartBtn = document.createElement("button")
  cartBtn.innerHTML = "Add to Cart";
  cartBtn.classList.add("button");
  cartBtn.setAttribute("id",item.id)


  menFlex.appendChild(menImage);
 menFlex.appendChild(menTitle);
  menFlex.appendChild(prodPrice);
  //prodFlex.appendChild(productCategory)
  //prodFlex.appendChild(productdes)
  menFlex.appendChild(menrating)
 menFlex.appendChild(cartBtn)
container.appendChild(menFlex)
})
})
// range25.addEventListener("change",()=>{
//     console.log("clicked")
//     if(range25.checked)
//     {
//       applyfilter.addEventListener("click",()=>{
//        let mygallery = JSON.parse(localStorage.getItem("MyShop"))
//        let prodfil = mygallery.filter((item)=>item.price <= 25 )
 
//        }) 
//     }
    
//   })
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
   
     applyfilter.addEventListener("click",()=>{

      let activeclass = document.getElementsByClassName("filter");
      for(let i =0;i<activeclass.length;i++)
      {
        if(activeclass[i].classList.contains("active") && activeclass[i].innerHTML =="All")
        {
            console.log("hi")
          let mygallery = JSON.parse(localStorage.getItem("MyShop"))
          render(mygallery)
          }
          if(activeclass[i].classList.contains("active") &&  activeclass[i].innerHTML=="Mens")
          {
            console.log("hello")
            let mygallery = JSON.parse(localStorage.getItem("MensWear"))
            render(mygallery)
          }
          if(activeclass[i].classList.contains("active") && activeclass[i].innerHTML=="Womens")
          {
            let mygallery = JSON.parse(localStorage.getItem("WomensWear"))
            render(mygallery)
          }
          if( activeclass[i].classList.contains("active") && activeclass[i].innerHTML=="Jewellery")
          {
            let mygallery = JSON.parse(localStorage.getItem("Jewellary"))
            render(mygallery)
          }
          if(activeclass[i].classList.contains("active") && activeclass[i].innerHTML=="Electronics")
          {
            let mygallery = JSON.parse(localStorage.getItem("Electronics"))
            render(mygallery)
          }
        }
      
      
      
      //console.log(mygallery)
      function render(mygallery)
      {
if (checkbox.checked && checkbox.classList.contains("0-25"))
 {
  //console.log(mygallery)
       let prodfil = mygallery.filter((item)=>item.price <= 25 )
       renderProduct(prodfil)
       }
        if(checkbox.checked && checkbox.classList.contains("25-50"))
      {
      // let mygallery = JSON.parse(localStorage.getItem("MyShop"))
       let prodfil = mygallery.filter((item)=>item.price > 25 && item.price<=50)
       renderProduct(prodfil)
    }
     if(checkbox.checked && checkbox.classList.contains("50-100"))
    {
      // let mygallery = JSON.parse(localStorage.getItem("MyShop"))
       let prodfil = mygallery.filter((item)=>item.price > 50 && item.price<=100)
       renderProduct(prodfil)
    }
    if(checkbox.checked && checkbox.classList.contains("100on")){
      // let mygallery = JSON.parse(localStorage.getItem("MyShop"))
       let prodfil = mygallery.filter((item)=>item.price >100)
       renderProduct(prodfil)
    }
  //   else{
  //     //let mygallery = JSON.parse(localStorage.getItem("MyShop"))
  //     container.innerHTML=`<h1> MATCH NOT FOUND</h1>`
      
  //     //alert("Not Found")
  // }
    //    renderProduct(prodfil)
     }
      })
       })
        })
     
    // 
 

      
       


  function renderProduct(prodfil)
  { 
    
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
  
  cartBtn.setAttribute("id",item.id)

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
let arr=[];
  const btn = document.querySelectorAll(".button")
  btn.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
      // console.log("HI");
      // console.log( event.target.id);
      let btnId = event.target.id;
      arr.push(btnId);
      let mykart = localStorage.setItem("myKart",JSON.stringify(arr));
      window.location.href="/Users/LENOVO/Downloads/ShopingKart/cart/index.html"
    })
  })
 
  // function addtocart()
  // {
  //   var btnId = this.id;
    
  //  let myshop = JSON.parse(localStorage.getItem("MyShop"))
  //  //console.log(myshop)
  //  var addkart = myshop.filter((item)=> item.id == btnId);

  // }