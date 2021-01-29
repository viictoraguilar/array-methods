const mascotas = ['Polvoron','Oreo','Panda','Canela']

const carrito = [
  {nombre: 'Tacos al pastor', precio: 500},
  {nombre: 'Tortas de milaneza', precio: 100},
  {nombre: 'Pizza de Galleta', precio: 200},
  {nombre: 'Hot Dogs Veganos', precio: 300},
  {nombre: 'Tamales Rojos', precio: 400},
  {nombre: 'Pozole', precio: 700}
]

mascotas.forEach((mascota,i) => {
  if(mascota === 'Canela') {
    console.log(`La mascota fue encontrada en el indice ${i}`)
  }
})

//Encontrar el indice de Canela
const indice = mascotas.findIndex(mes => mes === 'Canela')
console.log(indice)

//Comprobar un indice de un arreglo de objetos
const indice2 = carrito.findIndex(producto => producto.precio === 100)
console.log(indice2)