const array1 = [1,3,4,6,8,9,11]
const array2 = ['a', 'b', 'c']
const arrayunir = array1.concat(array2)

console.log(array1)

//Length imprime el tamaño del arreglo
console.log(array1.length)

//At sirve para conocer el elemento en la posición que sea seleccionada
var index
index=8
console.log(array1.at(index))

//Concat concatena varios arrays
console.log(arrayunir)

//Constructor crea arreglos diferentes formas
const constructor = new Array(28,25,35)

console.log(constructor)

//CopyWithin crea una copia, cambiando el orden de los elementos del array
const arrayCopyWithin = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

console.log(arrayCopyWithin.copyWithin(2,4,6))

//Entries retorna un nuevo array que contiene una key value 

const arrayEntries = ['casa', 'apartamento', 'apartaestudio']

const iterator = arrayEntries.entries()

console.log(iterator.next().value)
console.log(iterator.next().value)

//Every pone a prueba todos los elementos del array una condición, retornando un boolean (True o False)

const debajo = (CurrentValue) => CurrentValue < 13

const arrayEvery = [3, 1, 7, 10]

console.log(arrayEvery.every(debajo))

//Fill cambia los elementos de un array a un valor estatico 

const arrayFill = [12, 43, 18, 97]

console.log(arrayFill.fill(12,8,7))

//Filtrer crea una copia del array con una condición que quiera 

const ArrayFiltrer = ['Mesa', 'Messi', 'Ronaldo', 'Atlanta']
const Filtrado = ArrayFiltrer.filter(word => word.length > 5)
console.log(Filtrado)

//Find encuentra el primer elemento de un array con la condición que quiera 

const arrayFind = [11, 45, 25, 7, 64, 38]

const Encontrado =arrayFind.find(Element => Element > 30)

console.log(Encontrado)

// FindIndex encuentra la posición del primer elemento con la condición que se requiera

const arrayFindIndex = [17, 7, 19, 28, 57, 56]

const BuscaElNumero = (Element) => Element > 15

console.log(arrayFindIndex.findIndex(BuscaElNumero))

//FindLast encuentra el ultimo elemento del array con la condición que se requiera

const arrayFindLast = ['Murray', 'lol', 'Atlass', 'macqueen','ayer']

const Buscar1 = arrayFindLast.findLast(word => word.length <4)

console.log(Buscar1)

// FindIndexLast encuentra la posición del ultimo elemento con la condición que se quiera

const arrayFindLastIndex = ['Murray', 'lol', 'Atlass', 'macqueen','ayer']

const Buscar2 = word => word.length <4

console.log(arrayFindLastIndex.findLastIndex(Buscar2))

//Flat crea un nuevo array con todos los elementos de una array dentro de un array concatenado

const arrayFlat = ['Alma', 'letrero', 'Nose',[['Mandibula', 'Increible']]]

console.log(arrayFlat.flat(2))

//FlatMap para que todos los elementos de un array se les asigne una función y se concatenen lo elementos de un array dentro de uno

const arrayFlatMap = [16, 12, [21], [34, 1], 48, []]

const flattenend = arrayFlatMap.flatMap(num => num)

console.log(flattenend)

//ForEach para que ejecute la función para cada elemento 

const arrayForEach = ['Murray', 'lol', 'Atlass', 'macqueen','ayer']

arrayForEach.forEach(word => console.log(word))

//Includes para determinar si el array incluye un valor determinado, dará un boolean

const arrayBurrin = ['Aburrido', 'Ridon', 'Nize', 'Amen']

console.log(arrayBurrin.includes('Nose'))

console.log(arrayBurrin.includes('Tampocose'))

//Indexof para encontrar la primer posición de un elemento que cumpla una condición

const arrayNombres = ['Juan', 'Dali', 'Yenis', 'Pablos', 'Elraro']

console.log(arrayNombres.indexOf('Juan'))

console.log(arrayNombres.indexOf('Dali'))

console.log(arrayNombres.indexOf('Pablos'))

//Join devuelve un string de los elementos en un array

const arrayCompus =['Compus', 'Portatil']

console.log(arrayCompus.join())

//Keys crea un iterator para cada una de las posiciones del array 

const arrayKey = ['a', 'b', 'c']
const Despla = arrayKey.keys()

for (const key of Despla) {
  console.log(key);}

//Indexof encuentra la ultima posición de un elemento que cumpla una condicion

console.log(arrayNombres.lastIndexOf('Santiago'))

//Map somete a todos los elementos de un array
const DosArray = array7.map(array7 => array7 * 2); 

console.log(DosArray)

//Pop remueve el último elemento de un array, modeificando el tamaño del array 

const Comida2 =['Hambur', 'arroz','Limonada']

console.log(Comida2.pop())

console.log(Comida2)

//Push agrega un elemento al final del array 

Comida2.push('Tamal', 'Pizza')

console.log(Comida2)

//Reduce Comprime o suma todos los elementos en un array 

const arrayReduce =[2,4,1,5]

const Suma = arrayReduce.reduce((Sumatoria, ValorActual) => Sumatoria + ValorActual)

console.log(Suma)

//Reduce Comprime o suma todos los elementos en un array de derecha a izquierda

const arrayReduceRight = [[0, 1], [2, 3], [4, 5]];

const resultado = arrayReduceRight.reduceRight((Sumatoria, ValorActual) => Sumatoria.concat(ValorActual));

console.log(resultado);

//Reverse cambia el orden de los elementos en un array

const arrayReverse = ['Lechuga', 'Huevo','Carne']

console.log(arrayReverse.reverse())

//Shift remueve el primer elemento del array 

const ArrayShift = ['Auto', 'Moto', 'Bus']

console.log(ArrayShift)
console.log(ArrayShift.shift())
console.log(ArrayShift)

//Slice crea una copia array donde usara parametros y la posición de donde empieza y termina la esta

const arraySlice = ['Auto', 'Moto', 'Bus']

console.log(arraySlice)
console.log(arraySlice.slice(1,2))

//Some para probar si uno de los elementos cumple una condición

const arraySome =[2,4,7]

const Numerr = (Element) => Element > 3

console.log(arraySome.some(Numerr))

//Sort suelta una referencia del mismo array pero en orden ascendente

const arraySort =['Juan', 'Alvarez', 'MCqueen']

console.log(arraySort.sort())

//Splice para remover, reemplazar o agregar nuevos elementos a un array

const arraySplice =['Juan', 'Alvarez', 'MCqueen']
arraySplice.splice(1,0,'Juan')
console.log(arraySplice)

//ToLocaleString convertir los elementos de un array en un texto

const ArrayLocateString = [1, 'a', new Date('25 Agost 2000 23:02:00 UTC')];
const ConvertirString = ArrayLocateString.toLocaleString('en', { timeZone: 'UTC' });

console.log(ConvertirString);

//ToString convierte el array en un string 
const ArrayToString = [1, 2, 'SanAndres', 35];

console.log(ArrayToString.toString());

//Unshift agrega nuevos elementos al inicio del array

const arrayunshift = [2, 5, 9];

console.log(arrayunshift.unshift(23, 12,43));
console.log(arrayunshift)

//Values crea un iterador para cada elemento de un array

const CAsss = ['Auto', 'Moto', 'Bus'];
const Termi = CAsss.values();

for (const value of Termi) {
    console.log(value);}