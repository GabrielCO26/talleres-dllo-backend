// Gabriel Castro taller 3

// Punto 1
const vocales = ['a', 'e', 'i', 'o', 'u']
const tipoFiltrado = {
    vocales: char => vocales.includes(char),
    consonantes: char => !vocales.includes(char)
}
function desglosarString(cadena, tipo){
    return tipoFiltrado[tipo] ? [...cadena.toLowerCase()].filter(tipoFiltrado[tipo]).length : -1 // retorna -1 si el parametro tipo no es "vocales" o "consonantes"
}
console.log(desglosarString('murcielagos', 'vocales'))
console.log(desglosarString('murcielagos', 'consonantes'))

// Punto 2
function twoSum(nums, suma_obj){
    for (let i = 0; i < nums.length-1; i++){ // Toma el elemento i de la lista e itera de este en adelante
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] === suma_obj && nums[i] !== nums[j]){ // Los números deben ser diferentes
                return [i,j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,4,2], 6))

// Punto 3
const cifras_rom = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function conversionRomana(num_rom){
    let num_arab = 0
    num_rom = num_rom.toUpperCase()
    for (let i = 0; i < num_rom.length; i++){
        let cifra_act = cifras_rom[num_rom[i]] // Conversion a cifra arabigas
        let cifra_sig = cifras_rom[num_rom[i+1]] ?? 0 // será 0 si se sale de los limites del string
        let cifra_sig_mayor = cifra_act < cifra_sig // Verifica si la cifra siguiente es mayor
        num_arab += cifra_sig_mayor ? cifra_sig - cifra_act : cifra_act // Si la cifra siguiente es mayor entonces suma la sig - act al acumulador en cifras arab, ej. IV = 5-1. Sino solo suma el número correspondiente a la cifra actual
        i = cifra_sig_mayor ? i+1 : i // Si la cifra sig es mayor se aumenta i 2 veces (aquí y al final del for)
    }
    return num_arab
}

console.log(conversionRomana('III'))
console.log(conversionRomana('XIV'))
console.log(conversionRomana('MMXXIV'))
console.log(conversionRomana('MXMVII'))