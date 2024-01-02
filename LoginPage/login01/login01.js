const registerBtn=document.getElementById('register');
const container=document.getElementById('container');
const loginBtn=document.getElementById('login');

registerBtn.addEventListener('click',function () {
        container.classList.add("active");
    }
);
loginBtn.addEventListener('click',function () {
    container.classList.remove("active");
}
);
function signup(e){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var user={
        username:username,
        email:email,
        password:password,
    }
    var json =JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Successfully!");
}
const inputUsername=document.querySelector(".inputEmail");
const inputPassword=document.querySelector(".inputPassword");
const btnLogin=document.querySelector(".signInButton");
btnLogin.addEventListener("click",(e) =>{
    e.preventDefault();
    if(inputUsername.value==""||inputPassword.value==""){
        alert("Vui long khong de trong");
    } else{
        const user=JSON.parse(localStorage.getItem(email.value));
        if(
            user.email===inputUsername.value &&
            user.password===inputPassword.value
        ){
            alert("Dang nhap thanh cong");
        }
        else{
            alert("Dang nhap that bai");
        }
    }
});