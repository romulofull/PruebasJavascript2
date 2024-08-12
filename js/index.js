


const background ='red'
const color = 'blue'

const button = document.createElement("button");
button.innerText ="click me";
button.style = `background: ${background}; color: ${color}`
document.body.append(button);



//const result = background + color

const result = 'Estos son estilos: ${background} ${color}'
console.log(result)



const backgrounda ='red'
const colora = 'yellow'
const isauthorizeda = true;

const buttona = document.createElement("buttona");
button.innerText ="click me";
button.style = `background: ${isauthorizeda ? 'blue' : 'red' }; color: ${colora}`
document.body.append(buttona);



//const result = background + color


const backgroundat ='red'
const colorat = 'yellow'
const isauthorizedat = true;

const buttonat = document.createElement("buttonat");
buttonat.innerText ="click mee";
buttonat.style = `background: ${isauthorizedat ? backgroundat : 'red' }; color: ${colorat}`
document.body.append(buttonat);



const namesa = ['ryan','jose','ramon']

for (let i = 0; i < namesa.length; i++) {
        const element = namesa[i];
        console.log(element)
    }

const namesat = ['david','pedro','juan']
namesat.forEach(function(nam) {
    console.log(nam)
})

const namesate = ['jose','luis','james']
namesate.map(function(nombres){
console.log( nombres)

})

const namesatep = ['jose','luis','james']
const nuevo = namesatep.map(function(nombres){
return `hola ${nombres}`
})

console.log(namesatep)
console.log(nuevo)


const nuevaprueba = ['tatiana','laura','yolanda']
const nameFound = nuevaprueba.find(function(nombre){
if (nombre === 'yolanda') {
return nombre
}
})

console.log(nameFound)

const nuevapruebas = ['riobamba','ambato','zamora']
const namefiltrado = nuevapruebas.filter(function(nombres){
if (nombres === 'ambato') {
return nombres
}
})

console.log(namefiltrado)

const nuevapruebase = ['riobamba','ambato','zamora']
const namefiltrados = nuevapruebase.filter(function(ns){
if (ns !== 'ambato') {
return ns
}
})
console.log(namefiltrados)



const perros = ['beagle', 'aleman', 'bulldog']
const gatos = ['siames', 'escoces', 'exotico']

console.log(perros)
console.log(gatos)
console.log(perros.concat(gatos))
console.log ([...perros, ...gatos])

const user = {
razaperro: "beagle",
razagato: "siames"
}

const useraddress =  {
    street: "Main Street",
    city: "Munchen"
    }

const userinfo = {  ...user, ...useraddress}
console.log (userinfo)
console.log(user)
console.log(useraddress)


import {add,multiply, title, active, points} from "./add.js"
console.log(add(10,20))
console.log(multiply(10,20))
console.log (active, points, title)

import addModule  from "./add.js"
console.log (addModule)