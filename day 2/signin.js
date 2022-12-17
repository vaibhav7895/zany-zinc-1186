var userData =JSON.parse(localStorage.getItem("userData"))||[];
console.log(userData);
    const showpassword = () => {
   
    if (document.getElementById("box2").type === "text")
        document.getElementById("box2").type = "password";
    else
        document.getElementById("box2").type = "text"
}
function submit (event) {
    event.preventDefault();
    const email = document.getElementById("box1").value 
    const password = document.getElementById("box2").value
    let user={email,password}
    userData.push(user)
    
    userData.map(function(elem){
        if(email == elem.email && password == elem.password) {
            
            localStorage.setItem("userData",JSON.stringify(userData));
            window.location.href = "http://127.0.0.1:5500/day4%20part/signed.html"
            return;
        }
        else if(email != elem.email && password != elem.password) {
            alert("Enter Correct Username and Password");
        }  
    });   
}
document.getElementById("submit").addEventListener("click", submit);
document.getElementById("submit").style.cursor = "pointer";
document.querySelector(".logo").style.cursor = "pointer";
document.querySelector(".logo").addEventListener("click", function(){
    window.location.href = "http://127.0.0.1:5500/day1/index.html";
});