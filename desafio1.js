



/* --------------  WHILE ---------------------*/

/*
let nombre = prompt("ingrese nombre de usuario")

let saldo = 1000

while(nombre.toLowerCase() == "alberto") {

	let conocerSaldo = prompt("desea conocer su saldo? si o no") 

	if (conocerSaldo == "si") {alert("su saldo es "+ saldo)}

	console.log(`Su nombre es ${nombre} y su saldo es ${saldo}`)

	nombre = prompt ("ingrese su nombre por favor")

}


/* -------------------SWITCH --------------------------*/

/*

let plato1 = prompt ("Ingrese su pedido porfavor -pizza- -pasta- -ensalada- -carne-")

switch (plato1){

	case "pizza":
	alert("Su pedido es pizza y tiene un costo de 10$")
	break;

	case "ensalada":
	alert("Su pedido es ensalada y tiene un costo de 8$")
	break; 

	case "carne":
	alert("Su pedido es carne y tiene un costo de 12$")
	break; 

	case "pasta":
	alert("Su pedido es pasta y tiene un costo de 5$")
	break;

	default:
	plato1 = prompt ("Ingrese su pedido por favor -pizza- -pasta- -carne- -ensalada")


}

*/
/*---------------------- DO WHILE ------------------------*/

/*
let nombreUsuario = prompt("Ingrese su nombre de usuario porfavor")

let condicion = true

let saldo = 1000

conocerSaldo = "si"

/*do {

	let password = prompt("por favor ingrese su password")

	if (password === "churro")  {alert("Gracias puede realizar una consulta de saldo")

	condicion = false

    while(condicion = true) 

    let condicion = true	

	do { 

		nombreUsuario = prompt("ingrese su nombre de usuario porfavor")

		let conocerSaldo = prompt("desea conocer su saldo? si o no") 

		if(conocerSaldo == "si" || conocerSaldo == "SI" || conocerSaldo =="sI" || conocerSaldo == "Si") {alert(`Su nombre es ${nombreUsuario} y su saldo es ${saldo}`)} else if(conocerSaldo == "no" || conocerSaldo == "No") {condicion = false alert("Gracias por su consulta");} 

    } while(condicion != false)}

	console.log(`Su nombre es ${nombreUsuario} y su saldo es ${saldo}`)}

}while(condicion = true) */




/* ------------------  Correccion sin contraseña -----------------*/
let saldo = 1000

/* do {
    
    let password = prompt("por favor ingrese su password")
    
	if (password === "churro")  {alert("Gracias puede realizar una consulta de saldo")
    
	condicion = false
    
    while(condicion == true)  */
    
    let condicion = true
	do { 
        let nombreUsuario = prompt("Ingrese su nombre de usuario porfavor")
		let conocerSaldo = prompt("desea conocer su saldo? si o no") 
        
		if(conocerSaldo == "si" || conocerSaldo == "SI") {
            console.log(`Su nombre es ${nombreUsuario} y su saldo es ${saldo}`)
            alert("su saldo es " + saldo)

        }else if(conocerSaldo == "no" || conocerSaldo == "NO"){
            condicion = false
            alert("Gracias por consultar su saldo");
        }
        
    } while(condicion != false)

 document.write("hola mundo")


/* 
}while(condicion) */

