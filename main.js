let arrayProductos = [
    {id : 1, tipo : "_tipo", cantidad : 4, precio : "_precio", subtotal : "_precio"},
    {id : 2, tipo : "_tipo", cantidad : 3, precio : "_precio", subtotal : "_precio"},
    {id : 3, tipo : "_tipo", cantidad : 2, precio : "_precio", subtotal : "_precio"},
    {id : 4, tipo : "_tipo", cantidad : 1, precio : "_precio", subtotal : "_precio"}
];

//comprarPrendas();
descartarProductoDelCarrito([1,3,2], arrayProductos);

function descartarProductosDelCarrito(arrayIds, miArray){
    let arrayNuevo = miArray;
    //let arrayExtra = [];
    for(let i=0; i<arrayIds.length; i++ ){
        //arrayExtra = arrayNuevo.filter(x=>x.id !== arrayIds[i]);
        //arrayNuevo = arrayExtra;    
        arrayNuevo = miArray.filter(x=>x.id !== arrayIds[i]);
        miArray = arrayNuevo; 
    }
    console.log(miArray);
    //return miArray;
}

function descartarUnProductoDelCarrito(id, miArray){
    let arrayNuevo = miArray.filter(x=>x.id !== id);
    alert('Se eliminó el producto de id ' + id);
}

function comprarPrendas(){
    while(true){
        let cantidadPrendas = parseInt(prompt("Ingrese la cantidad de tipos de prendas que desea comprar: "));
        let success = true;
        const carritoDeCompras = [];
        if(cantidadPrendas > 0){
            let total = 0;
            let contador = 1;
            for(let i=0; i<cantidadPrendas; i++){                
                let _tipo = prompt('Tipo de prenda: ');
                if(_tipo.trim() == ''){                    
                    success = false;
                    alert('Este campo no puede quedar vacío. Vuelva a intentarlo.');
                    break;
                }

                let _cantidad = parseInt(prompt('Cantidad: '));
                if( isNaN(_cantidad) ){                    
                    success = false;
                    alert('Ingrese únicamente valores numéricos. Vuelva a intentarlo.');
                    break;
                }

                let _precio = Number(prompt('Ingrese el precio: '))
                if( isNaN(_precio) ){                    
                    success = false;
                    alert('Ingrese únicamente valores numéricos. Vuelva a intentarlo.');
                    break;
                }

                total += (_cantidad * _precio);
                const producto = {id : contador,tipo : _tipo, cantidad : _cantidad, precio : _precio, subtotal : _cantidad * _precio}
                carritoDeCompras.push(producto);
                contador++;
            }
            if(success == true){
                alert('El total a pagar es: ' + total);
                console.log(carritoDeCompras);
                break;
            }else{                
                continue;
            }            
        }else if(cantidadPrendas === 0){
            alert('Aproveche las ofertas y agregue productos a su carrito.');
            break;
        }else if(cantidadPrendas < 0){
            alert('Ingrese una cantidad válida.');
            continue;
        }
    }
}