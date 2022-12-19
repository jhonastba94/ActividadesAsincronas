let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

//1. Ordernar los pokemons por base_damage de menor a mayor.
function ordenarDamagen(atributo){
    let dam = pokemons.sort(function (a,b){
        if(a[atributo] < b[atributo]) {
        return -1;
        }
        if(a[atributo] > b[atributo]) {
        return 1;
        }
        return 0;
    })
    return dam
}
 // console.log(ordenarDamagen('type'));

 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
function ordenarPokemonPor(atributo) {
    let validInput = ["name", "id","type", "base_damage", "base_hp", "speed"];
    if (validInput.includes(atributo)) {
        let result =
            (atributo === "type"||atributo === "name")
            ? pokemons.sort((a, b) => a[atributo].localeCompare(b[atributo]))
            : pokemons.sort((a, b) => a[atributo] - b[atributo]);
        console.log(result);
    } else {
    console.log("Debes ingresar un Atributo válido");
    }
    }
   // console.log(ordenarPokemonPor("name"));

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
function filtarPokemonPor(atributo, value){
    const validAtributes = Object.keys(pokemons[0])
    if(validAtributes.includes(atributo)){
        return pokemons.filter(pokemon => pokemon[atributo] === value)
    }else{
        return "El atributo Ingresado no exite"
    }
    
}
//console.log(filtarPokemonPor("type","fire"));

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
 let pokemonMaster ={
    id: 11, name:"Jhonas", created_date: "19/12/2022", pokemon: [{ id: 445, name: " Garchomp", type:"dragon" ,base_damage: 15, base_hp: 20, speed: 42}]
 }  
 //console.log(pokemonMaster);

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
function pokemonAleatorio() {
    const aleatorio = Math.floor(Math.random() * pokemons.length);
    pokemonMaster.pokemon.push(pokemons[aleatorio]);
    console.log(pokemonMaster);
    }
console.log(pokemonAleatorio())

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
function atributoMinMax() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]["min_damage"] = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        pokemons[i]["max_damage"] = Math.floor(Math.random() * (5 - 3 + 1) + 3);
    }
    return pokemons
    }
//console.log(atributoMinMax())

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
function dmg(index) {
    if (index < pokemons.length) {
        atributoMinMax();
        let seleccionaPokemon = pokemons[index];
        let total_dmg =
        seleccionaPokemon.base_dmg +
        Math.floor(Math.random() * seleccionaPokemon.max_dmg - 1 + seleccionaPokemon.min_dmg) + seleccionaPokemon.min_dmg;
        console.log(total_dmg);
    } else {
        console.log(`Ingresar un número menor a ${pokemons.length}`);
    }
    }
//console.log(dmg(5));

//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
 
function ordenaPokemonMayor(argument = "daño") {
    let validInput = ["daño", "base_damage", "base_hp", "speed"];
    if (validInput.includes(argument)) {
        atributoMinMax();
        for (let i = 0; i < pokemons.length; i++) {
        let seleccionaPokemon = pokemons[i];
        pokemons[i]["daño"] =
            seleccionaPokemon.base_damage + seleccionaPokemon.max_damage;
        }
        let result = pokemons.sort((a, b) => b[argument] - a[argument]);
        console.log(result.slice(0, 3));
    } else {
        console.log("Por favor, ingresa un argumento válido");
    }
    }
//console.log(ordenaPokemonMayor("daño"))

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML

const root = document.getElementById("root")
const ul = document.createElement('ul')
root.append(ul)

pokemons.forEach(pokemon => {
    const li = document.createElement('li')
    li.textContent = pokemon.name
    ul.append(li)
})

 
//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed
const rootTable = document.getElementById('root')
const table = document.createElement('table')
table.setAttribute('border', 3)

rootTable.append(table)

//cabecera
const encabezados = document.createElement("thead");
for(const key in pokemons[0]){
    const th = document.createElement("th")
    th.textContent = key
    encabezados.append(th)
}
table.append(encabezados)
 

//Cuerpo
for (const index in pokemons){
    const tr = document.createElement("tr");
        for(const key in pokemons[index]){ 
            const td = document.createElement("td");
            td.textContent = pokemons[index][key]
            tr.append(td)
        }
    table.append(tr)
}


//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.
// uso del evento click

function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}
const encabezado = document.createElement("thead");
for(const key in pokemons[0]){
    const th = document.createElement("th")
    th.textContent = capitalizarPalabra(key)
    th.style.cursor ="pointer"
    th.className+= "qwe"
    th.addEventListener("click",(event) =>{  
        ordenarProductosPorAtributo(key)
        table.innerHTML=""
        table.append(encabezado)   
        construirCuerpo()  
        console.log(event.target)

    }) 
    encabezado.append(th)
}
table.append(encabezado)

for (const index in pokemons){
    const tr = document.createElement("tr");
        for(const key in pokemons[index]){ 
            const td = document.createElement("td");
            td.textContent = pokemons[index][key]
            tr.append(td)
        }
    table.append(tr)
}

function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}
///Ordenar Pokemon
function ordenarProductosPorAtributo(atributo){
    if (typeof pokemons[0][atributo] === "string"){
        return pokemons.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
    } else if (typeof pokemons[0][atributo] === "number"){
        return pokemons.sort((a,b) => {return a[atributo] - b[atributo]})
    } else {
        return "Por favor utiliza un atributo válido"
    }
}

///Construir cuerpo
function construirCuerpo(){
    for (const index in pokemons){
        const tr = document.createElement("tr")
            for (const key in pokemons[index]){
                const td = document.createElement("td")
                td.textContent = pokemons[index][key]
                tr.append(td)
            }
        table.append(tr)
    }
}
//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name
