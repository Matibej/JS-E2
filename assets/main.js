const pizzas = [
    { 
        id: 1,
        nombre: "Pizza muzzarella",
        ingredientes : ["muzzarella", "jamón", "aceitunas"],
        precio: 550,
    },
    { 
        id: 2,
        nombre: "Pizza calabresa",
        ingredientes: ["calabreza", "orégano", "salsa"],
        precio: 900,
    },
    { 
        id: 3,
        nombre: "Pizza fugazzetta",
        ingredientes: ["cebolla", "orégano", "aceituna"],
        precio: 600,
    },
    { 
        id: 4,
        nombre: "Pizza margarita",
        ingredientes: ["tomate", "albahaca", "muzzarella"],
        precio: 580,
    },
    { 
        id: 5,
        nombre: "Pizza cuatro quesos",
        ingredientes: ["muzzarella", "gorgonzola", "fontina", "parmesano"],
        precio: 800,
    },
    { 
        id: 6,
        nombre: "Pizza con champiñones",
        ingredientes: ["champiñones", "salsa", "aceituna"],
        precio: 950,
    },

]

const input = document.querySelector(".input-number");
const pizzaInput = document.querySelector(".pizza-encontrada");
const buscar = document.querySelector(".form");
const boton = document.querySelector(".btn");
const error = document.getElementById('smol');



boton.addEventListener("click", (e) => {
	e.preventDefault();
    
    const pizza = parseInt(input.value);
    pizzas.forEach(pizzas => {
        if(pizza === pizzas.id){
            pizzaInput.innerHTML = `<h2>${pizzas.nombre}</h2><h3>${pizzas.precio}</h3>`;
            error.innerHTML = '';
            input.classList.remove("error");
        } else if (pizza > 6 || pizza === 0 ){
            error.innerHTML = 'Ingrese un valor de 1 a 6';
            input.classList.add("error")
        }
        else if ( isNaN(pizza)){
            error.innerHTML = 'Ingresa un valor'
            input.classList.add("error");
        }
    })
    } 
    );







    

