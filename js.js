let nombreUsuario = prompt("Ingrese su nombre de usuario porfavor");
let condicion = true;
let saldo = 1000;
conocerSaldo = "si";

do {
    let password = prompt("por favor ingrese su password");
    if (password === "churro") {
        alert("Gracias puede realizar una consulta de saldo");
        condicion = false;
        do {
            let conocerSaldo = prompt("desea conocer su saldo? si o no");
            if (conocerSaldo.toLocaleLowerCase() === "si") {
                alert("su saldo es " + saldo);
            } else {
                condicion = false;
            }
        } while (condicion);
    }
    alert("muchas gracias");
    console.log(`Su nombre es ${nombreUsuario} y su saldo es ${saldo}`);
} while (condicion);
