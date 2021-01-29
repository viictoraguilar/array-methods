// const mascotas = ['Polvoron','Oreo','Panda','Canela']

const carrito = [
  {nombre: 'Tacos al pastor', precio: 500},
  {nombre: 'Tortas de milaneza', precio: 100},
  {nombre: 'Pizza de Galleta', precio: 100},
  {nombre: 'Hot Dogs Veganos', precio: 300},
  {nombre: 'Tamales Rojos', precio: 400},
  {nombre: 'Pozole', precio: 700}
]

const resultado = carrito.every(producto =>  producto.precio < 1000)
console.log(resultado)

