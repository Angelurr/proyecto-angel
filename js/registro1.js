function cargar(){
    let nombre = document.getElementById("username");
    let contraseña = document.getElementById("password");
    
   

    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data);

    if(nombre.value=="" || contraseña.value==""){
        alert("esta vacio")
    }

    if(contraseña.value>=8){
        alert("se a pasado del limite");
    }else{
        alert("esta en limite");
    }

    



}