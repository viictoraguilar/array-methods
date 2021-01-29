// const mascotas = ['Polvoron','Oreo','Panda','Canela']

const carrito = [
  {nombre: 'Tacos al pastor', precio: 500},
  {nombre: 'Tortas de milaneza', precio: 100},
  {nombre: 'Pizza de Galleta', precio: 100},
  {nombre: 'Hot Dogs Veganos', precio: 300},
  {nombre: 'Tamales Rojos', precio: 400},
  {nombre: 'Pozole', precio: 700}
]

//Foreach
let resultado = ''
carrito.forEach((producto,index) => {
  if(producto.nombre === 'Tacos al pastor') {
    resultado = carrito[index]
  }
})

console.log(resultado)

//Find
const resultado2 = carrito.find(producto => producto.precio === 100)
console.log(resultado2)