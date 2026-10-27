function Login() {
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;

    if(name=="abcdef" && password=="cmrcet"){
        document.getElementById("question").textContent=
        "Question is WHAT IS DEVOPS?";
        document.getElementById("resultdisplay").textContent="results announce soon";
    }
}
Login();