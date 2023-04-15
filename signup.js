// import navbar from '../Tata-cliq/component/nav.js'
// let containerNav=document.getElementById("arpit")
// containerNav.innerHTML=navbar()

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signupreal = document.getElementById('signupreal');
const signinreal = document.getElementById('signinreal');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
var arr =JSON.parse(localStorage.getItem("credentials"))||[]
signupreal.addEventListener('click', () => {
    event.preventDefault()
    let newname=document.getElementById("name").value
    let newemail=document.getElementById("email").value
    let newpassword=document.getElementById("password").value
    if(newname==""||newemail==""||newpassword==""){
        return
    }
    let signupdata={
        name:newname,
        email:newemail,
        password:newpassword,

    }

    arr.push(signupdata)
    localStorage.setItem("credentials",JSON.stringify(arr))
    document.getElementById("show2").textContent="Hurray! Account created successfully"
    // document.getElementById("name").value=""
    // document.getElementById("email").value=""
    // document.getElementById("password").value=""
});

signinreal.addEventListener("click",() => {
    event.preventDefault()
     let loginmail=document.getElementById("loginmail").value
     let loginpass=document.getElementById("loginpass").value
     console.log(loginmail,loginpass)
     let f=0
     arr.map(function(ele){

        if(loginmail==ele.email && loginpass==ele.password){
            console.log("hurray")
            window.confirm("Hurray! Log in successful.  You will will be redirected to Home Page")
            window.location.assign("./landing-page/index.html");
            
            document.getElementById("dropbtn").textContent=ele.name
            f=1
        }
     })
     if(f==0){
        
           document.getElementById("show").textContent="OOops! wrong Credentials"
           document.getElementById("loginmail").value=""
           document.getElementById("loginpass").value=""
     }
     })