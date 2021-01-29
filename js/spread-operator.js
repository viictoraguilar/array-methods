const mascotas = ["Canela","Negra","Polvito","Oreo","Panda"]

const carrito = [
  {nombre: 'Tacos al pastor', precio: 500},
  {nombre: 'Tortas de milaneza', precio: 100},
  {nombre: 'Pizza de Galleta', precio: 100},
  {nombre: 'Hot Dogs Veganos', precio: 300},
  {nombre: 'Tamales Rojos', precio: 400},
  {nombre: 'Pozole', precio: 700}
]

mascotas.push('La nueva')
console.log(mascotas)

//Arreglo de inidices
const mascotas2 = [...mascotas, 'El mininito']
console.log(mascotas2)

const producto = {nombre: 'Taquitos', precio: 250}

const carrito2 = [...carrito, producto]

console.log(carrito2)