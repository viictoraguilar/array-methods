//Some
const mascotas = ['Polvoron','Oreo','Panda','Canela']

const carrito = [
  {nombre: 'Tacos al pastor', precio: 500},
  {nombre: 'Tortas de milaneza', precio: 100},
  {nombre: 'Pizza de Galleta', precio: 200},
  {nombre: 'Hot Dogs Veganos', precio: 300},
  {nombre: 'Tamales Rojos', precio: 400},
  {nombre: 'Pozole', precio: 700}
]

//Comprobar si un valor existe en un arreglo
// mascotas.forEach(mascota => {
//   if(mascota === 'Polvoron') {
//     console.log('Polvoron si existe')
//   }
// })

// const resultado = mascotas.includes('Polvoron')
// console.log(resultado)

//Some para arreglo de objetos
const existe = carrito.some(producto => producto.nombre === 'Pozole')
console.log(existe)

//Arreglo tradicional
const existe2 = mascotas.some(mascota => mascota === 'Oreo')
console.log(existe2)
