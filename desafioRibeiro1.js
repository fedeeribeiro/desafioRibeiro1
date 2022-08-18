/* SITIO DE VENTA DE ENTRADAS PARA RECITALES */

let nombre_usuario = prompt("Ingrese su nombre:");
alert("¡ACCESOTOTAL te da la bienvenida, " + nombre_usuario + "!")
console.log("¡ACCESOTOTAL te da la bienvenida, " + nombre_usuario + "!")

function mayusculas(texto){
    return texto = texto.toUpperCase();
}

function minusculas(texto){
    return texto = texto.toLowerCase();
}

let seleccionar_show = mayusculas(prompt("¿Para qué show querés comprar entradas?"));

while(seleccionar_show != "DUA LIPA" && seleccionar_show != "COTI" && seleccionar_show != "IMAGINE DRAGONS" &&
    seleccionar_show != "LOLLAPALOOZA" && seleccionar_show != "PRIMAVERA SOUND" && seleccionar_show != "HARRY STYLES" &&
    seleccionar_show != "LAS LIGAS MENORES" && seleccionar_show != "RAYOS LASER"){
    alert("ERROR. Seleccione un show válido.");
    console.log("ERROR. Seleccione un show válido.");
    seleccionar_show = mayusculas(prompt("¿Para qué show querés comprar entradas?"));
}

let precio_show = 0;

let entradas_disponibles = 0;

function precio(seleccionar_show){
    if(seleccionar_show == "DUA LIPA"){
        return precio_show = 7000;
    }else if(seleccionar_show == "IMAGINE DRAGONS"){
        return precio_show = 5500;
    }else if(seleccionar_show == "LOLLAPALOOZA"){
        return precio_show = 13500;
    }else if(seleccionar_show == "PRIMAVERA SOUND"){
        return precio_show = 10300;
    }else if(seleccionar_show == "COTI"){
        return precio_show = 2200;
    }else if(seleccionar_show == "HARRY STYLES"){
        return precio_show = 8800;
    }else if(seleccionar_show == "LAS LIGAS MENORES"){
        return precio_show = 1800;
    }else if(seleccionar_show == "RAYOS LASER"){
        return precio_show = 1800;
    }
}

function disponibles(seleccionar_show){
    if(seleccionar_show == "DUA LIPA"){
        return entradas_disponibles = 2;
    }else if(seleccionar_show == "IMAGINE DRAGONS"){
        return entradas_disponibles = 0;
    }else if(seleccionar_show == "LOLLAPALOOZA"){
        return entradas_disponibles = 0;
    }else if(seleccionar_show == "PRIMAVERA SOUND"){
        return entradas_disponibles = 10;
    }else if(seleccionar_show == "COTI"){
        return entradas_disponibles = 6;
    }else if(seleccionar_show == "HARRY STYLES"){
        return entradas_disponibles = 0;
    }else if(seleccionar_show == "LAS LIGAS MENORES"){
        return entradas_disponibles = 7;
    }else if(seleccionar_show == "RAYOS LASER"){
        return entradas_disponibles = 5;
    }
}

precio_show = precio(seleccionar_show);

entradas_disponibles = disponibles(seleccionar_show);

alert("¡Excelente! Continuemos con la compra de entradas para el show de " + seleccionar_show + ".");
console.log("¡Excelente! Continuemos con la compra de entradas para el show de " + seleccionar_show + ".");
alert("El precio de las entradas para el show de " + seleccionar_show + " es de $" + precio_show + ".");
console.log("El precio de las entradas para el show de " + seleccionar_show + " es de $" + precio_show + ".");

let cant_entradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar:"));

while(cant_entradas != cant_entradas || cant_entradas < 1){
    alert("ERROR. Ingrese una cantidad válida de entradas para comprar.");
    cant_entradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar:"));
}

function precio_entradas(cantidad, precio){
    return precio_total = cantidad * precio;
}

let modo_de_pago = "";

let cuotas = 0;

function pago_en_cuotas(precio, cuotas){
    switch(cuotas){
        case 3:
            return precio_final = precio * 1.15;
            break
        case 6:
            return precio_final = precio * 1.30;
            break
        case 12:
            return precio_final = precio * 1.50;
            break
    }
}

function pago_con_tarjeta(){
    tarjeta = "";
    proveedor = prompt("Ingrese la compañía proveedora de su tarjeta:").toUpperCase();
    tarjeta += "Proveedor: " + proveedor + "\n";
    numero = prompt("Ingrese el número de su tarjeta:");
    tarjeta += "Número: " + numero + "\n";
    nombre = prompt("Ingrese el nombre como figura en la tarjeta:").toUpperCase();
    tarjeta += "Nombre: " + nombre + "\n";
    cvv = prompt("Ingrese el código de seguridad de su tarjeta");
    tarjeta += "Código de seguridad: " + cvv;
    return alert("Los datos de su tarjeta son los siguientes:" + "\n" + tarjeta);
}

if(entradas_disponibles == 0){
    alert("Ya no quedan entradas disponibles para el show de " + seleccionar_show + ".");
    console.log("Ya no quedan entradas disponibles para el show de " + seleccionar_show + ".");
    alert("Si desea comprar entradas para otro evento, presione la tecla F5.");
    console.log("Si desea comprar entradas para otro evento, presione la tecla F5.");
}else{
    while(cant_entradas > entradas_disponibles || cant_entradas != cant_entradas || cant_entradas < 1){
        alert("Lo siento, solo quedan " + entradas_disponibles + " entradas para el show de " + seleccionar_show + ".");
        console.log("Lo siento, solo quedan " + entradas_disponibles + " entradas para el show de " + seleccionar_show + ".");
        cant_entradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar:"));
    }
    alert("¡Perfecto! El precio total de las entradas seleccionadas es $" + precio_entradas(cant_entradas, precio_show) + ".");
    console.log("¡Perfecto! El precio total de las entradas seleccionadas es $" + precio_entradas(cant_entradas, precio_show) + ".");
    alert("Se puede abonar la compra al contado o en cuotas. Si se abona en cuotas, se efectúa un recargo.");
    console.log("Se puede abonar la compra al contado o en cuotas. Si se abona en cuotas, se efectúa un recargo.");
    modo_de_pago = minusculas(prompt("¿Cómo desea abonar? En cuotas o al contado." ));
    while(modo_de_pago != "cuotas" && modo_de_pago != "contado"){
        alert("ERROR. Seleccione un modo de pago válido.");
        console.log("ERROR. Seleccione un modo de pago válido.");
        modo_de_pago = minusculas(prompt("¿Cómo desea abonar? En cuotas o al contado." ));
    }
    if(modo_de_pago == "cuotas"){
        cuotas = parseInt(prompt("Seleccione la cantidad de cuotas que desea. Pueden ser 3, 6 o 12."));
        while(cuotas != 3 && cuotas != 6 && cuotas != 12){
            alert("ERROR. Seleccione una cantidad de cuotas válida.");
            console.log("ERROR. Seleccione una cantidad de cuotas válida");
            cuotas = parseInt(prompt("Seleccione la cantidad de cuotas que desea. Pueden ser 3, 6 o 12."));
        }
        alert("El precio final a pagar es $" + pago_en_cuotas(precio_entradas(cant_entradas, precio_show), cuotas) + ".");
        console.log("El precio final a pagar es $" + pago_en_cuotas(precio_entradas(cant_entradas, precio_show), cuotas) + ".");
    }else{
        alert("El precio final a pagar es $" + precio_entradas(cant_entradas, precio_show) + ".");
        console.log("El precio final a pagar es $" + precio_entradas(cant_entradas, precio_show) + ".");
    }
    pago_con_tarjeta();
    alert("El pago se ha realizado correctamente." + "\n" + "¡Disfrute de sus entradas!");
    console.log("El pago se ha realizado correctamente." + "\n" + "¡Disfrute de sus entradas!");
}