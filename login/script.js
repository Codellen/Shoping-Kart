
function login(){
const emailvalue = document.getElementById("email-login").value
const passvalue = document.getElementById("pass-login").value

// if(emailvalue==localStorage.getItem("email") && passvalue==localStorage.getItem("password"))
// {
//     
// }
// else{

// }

var users = JSON.parse(localStorage.getItem("userArray"))  
console.log(users)
//console.log("trying to login", users[0])
var myUser = users.filter((item)=> item.email == emailvalue)
//var notSign =  users.filter((item)=> item.email != emailvalue)

//console.log("trying to login", myUser[0])
var check = JSON.stringify(myUser)
//console.log("trying to login",myUser)
if(check == "[]")
{
    alert("User not Exist , Please Signin First")
    window.location.href="/Users/LENOVO/Downloads/ShopingKart/signup/index.html"

}
else{
    if(passvalue==myUser[0].password )
{
window.location.href ="/Users/LENOVO/Downloads/ShopingKart/shop/index.html"
}



else{
    alert("Password Entered is Incorrect")
}
}

}

document.getElementById("btn").addEventListener("click",login)