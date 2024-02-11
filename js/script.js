
var register_btn = document.getElementById("register-btn");
var login_btn = document.getElementById("login-btn");


var register_form = document.getElementById("register-form");
var login_form = document.getElementById("login-form");


function register_button() {
    register_form.style.left = "12px";
    login_form.style.left = "400px";

}

function login_button() {
    login_form.style.left = "12px";
    register_form.style.left = "-400px";

}