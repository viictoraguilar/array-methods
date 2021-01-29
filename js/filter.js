// const mascotas = ['Polvoron','Oreo','Panda','Canela']

const carrito = [
  {nombre: 'Tacos al pastor', precio: 500},
  {nombre: 'Tortas de milaneza', precio: 100},
  {nombre: 'Pizza de Galleta', precio: 100},
  {nombre: 'Hot Dogs Veganos', precio: 300},
  {nombre: 'Tamales Rojos', precio: 400},
  {nombre: 'Pozole', precio: 700}
]

let resultado

resultado = carrito.filter(comida => comida.precio > 400)
resultado = carrito.filter(comida => comida.precio < 600)
resultado = carrito.filter(comida => comida.nombre !== 'Tamales Rojos')

console.log(resultado)