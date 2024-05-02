let user={
    fname:"",
    lname:"",
    country:"",
    phone:"",
    state:"",
    city:"",
    village:""   
}

window.addEventListener("load",()=>{
    if(localStorage.getItem("user")){
        user = JSON.parse(localStorage.getItem("user"));
        display();
    }
    else{
    input();
   }
    display();
})


function input(){
    let f_name = prompt("Enter your First Name");
    let l_name = prompt ("Email your Last Name");
    let country = prompt("Enter your Country");
    let phone = prompt("Enter your Phone number");
    let state = prompt("Enter your State");
    let city = prompt("Enter your City");
    let village = prompt("Enter your Village");

    user["fname"] = f_name;
    user["lname"] = l_name;
    user["country"] = country;
    user["phone"] = phone;
    user["state"] = state;
    user["city"] = city;
    user["village"] = village;


    localStorage.setItem("user",JSON.stringify(user));
    
}

function display(){
   document.getElementById("fname").innerHTML = user.fname;
   document.getElementById("lname").innerHTML  = user.lname;
   document.getElementById("country").innerHTML = user.country;
   document.getElementById("phone").innerHTML = user.phone;
   document.getElementById("state").innerHTML = user.state;
   document.getElementById("city").innerHTML = user.city;
   document.getElementById("village").innerHTML = user.village;
}


const content  = document.getElementById("card");
const dark = document.getElementById("dark");
const light = document.getElementById("light");

dark.addEventListener("click",()=>{
    content.style.color = "white";
    content.style.backgroundColor = "black";
    content.style.border =" 2px solid white"
    content.style.boxShadow ="3px 3px 3px white";
})

light.addEventListener("click",()=>{
    content.style.color = "black";
    content.style.backgroundColor = "white";
    content.style.border =" 2px solid black"
    content.style.boxShadow ="3px 3px 3px black";
})