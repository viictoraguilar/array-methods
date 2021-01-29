const mascotas = ["Canela","Negra","Polvito","Oreo","Panda"]

const mascotas2 = ["Camilo Jr", "Mufasita", "Pinche Polo", "Vaca"]

const mascotas3 = ['Dingo','Kiki']

const resultado = mascotas.concat(mascotas2, mascotas3, 'Otra mascota')

console.log(resultado)

//Spread operator
const resultado2 = [...mascotas, ...mascotas2, ...mascotas3]

console.log(resultado2)