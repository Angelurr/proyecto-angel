function cargar() {
    let nombre = document.getElementById("username");
    let contraseña = document.getElementById("password");

    const data = {
        username: nombre.value,
        password: contraseña.value
    }
    console.log(data);

}

function load(){
    let nombre = document.getElementById("username");
    let contraseña = document.getElementById("password");
    if (nombre.value == "" || contraseña.value == "") {
        alert("Está vacío");
    }

    if (contraseña.value.length > 8) {
        alert("no esta en el limite");
    } else {
        alert("Está en el límite");
    }


}