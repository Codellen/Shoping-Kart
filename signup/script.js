
function signup(){
const emailvalue = document.getElementById("email").value;
const passvalue = document.getElementById("pass").value;
const confvalue = document.getElementById("confirmpass").value;

 var UserObject = {
    email:emailvalue,
    password:passvalue,
 }

 var userArray = [];

 if(localStorage.getItem("userArray"))
 {
    userArray = JSON.parse(localStorage.getItem("userArray"))
 }
 else{
    userArray=[];
//     
//     userArray.push(UserObject);

//   localStorage.setItem("userArray",JSON.stringify(userArray))
 }
//     var sameEmail = userArray.filter((item)=> item.email==emailvalue);
//     if(sameEmail)
// {
//     alert("User already Exists , Please Login");
//     console.log(sameEmail[0])
// }  
if(userArray.length==0)
{
   console.log("empty")
   if(passvalue!=confvalue)
    {
        alert("Your Password is not Matching")
        // userArray = JSON.parse(localStorage.getItem("userArray"))
        // console.log(userArray)
        // userArray = localStorage.removeItem(userArray[0].email)
        //localStorage.setItem("userArray",JSON.stringify(userArray))
    }
     if(emailvalue && passvalue && confvalue && passvalue==confvalue  )
    {
     window.location.href="/Users/LENOVO/Downloads/ShopingKart/login/index.html"
     userArray.push(UserObject);

  localStorage.setItem("userArray",JSON.stringify(userArray))

//}
  

//  if(localStorage.getItem("users"))
//     localStorage.setItem("email",emailvalue)
//     localStorage.setItem("password",passvalue)
var users = JSON.parse(localStorage.getItem("userArray"))  
//console.log(users)
//console.log("trying to login", users[0])
var myUser = users.filter((item)=> item.email == emailvalue)
console.log("trying to login", myUser[0])
    // if(myUser)
    }
  
    // {
    //     alert("User already Exists , Click OK to Login")
    //     //localStorage.removeItem(myUser[0])
    //   window.location.href="/Users/LENOVO/Downloads/ShopingKart/login/index.html"
    // }
    
}
else{
var check = JSON.parse(localStorage.getItem("userArray"))

console.log(" login", check)
var myCheck = check.filter((item)=> item.email == emailvalue)
console.log(" login",JSON.stringify(myCheck) )
var localstring = JSON.stringify(myCheck)

if(localstring != "[]")
{
   alert("User already Exists , PLease Login") 
    window.location.href="/Users/LENOVO/Downloads/ShopingKart/login/index.html"
}
else if(passvalue!=confvalue)
    {
        alert("Your Password is not Matching")
        // userArray = JSON.parse(localStorage.getItem("userArray"))
        // console.log(userArray)
        // userArray = localStorage.removeItem(userArray[0].email)
        //localStorage.setItem("userArray",JSON.stringify(userArray))
    }
 else{
userArray.push(UserObject);

  localStorage.setItem("userArray",JSON.stringify(userArray))

//}
  

//  if(localStorage.getItem("users"))
//     localStorage.setItem("email",emailvalue)
//     localStorage.setItem("password",passvalue)
var users = JSON.parse(localStorage.getItem("userArray"))  
//console.log(users)
//console.log("trying to login", users[0])
var myUser = users.filter((item)=> item.email == emailvalue)
console.log("trying to login", myUser[0])
    // if(myUser)
    // {
    //     alert("User already Exists , Click OK to Login")
    //     //localStorage.removeItem(myUser[0])
    //   window.location.href="/Users/LENOVO/Downloads/ShopingKart/login/index.html"
    // }
    
     if(emailvalue && passvalue && confvalue && passvalue==confvalue  )
    {
     window.location.href="/Users/LENOVO/Downloads/ShopingKart/login/index.html"
    
    }
    
 }

}

    
    
}


document.getElementById("btn").addEventListener("click",signup)