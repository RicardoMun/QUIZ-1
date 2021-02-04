
function information() {
    let fullName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    document.getElementById("view1").innerHTML = "Nombre completo: "+ fullName + lastName;
    
    let contactNumber = document.getElementById("contact_number").value;
    document.getElementById("view2").innerHTML = "Número de contacto: "+ contactNumber;

    let email = document.getElementById("email").value;
    document.getElementById("view3").innerHTML = "Correo electrónico: "+ email;
    
    let address = document.getElementById("address").value;
    document.getElementById("view4").innerHTML = "Dirección casa: "+ address;
    
    let address2 = document.getElementById("address").value;
    document.getElementById("view5").innerHTML = "Dirección opcional: "+ address2;
}