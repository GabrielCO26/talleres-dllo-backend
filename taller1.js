// Gabriel Castro taller 1
// Punto 1
function convertidorTemp(c){
    return c * 9/5 + 32
}

console.log(convertidorTemp(70))

// Punto 2
function resolvedor(opt, a, b, c){ // opt = true => positivo, opt = false => negativo
    if (opt){
        return (-b + (b**2 - 4*a*c)**(1/2))/(2*a)
    } else{
        return (-b - (b**2 - 4*a*c)**(1/2))/(2*a)
    }
}

console.log(resolvedor(false,1,5,4))

// Punto 3
function mejorParidad(num){
    if (num % 2 === 0){
        return true
    }
    return false
}

console.log(mejorParidad(10))

// punto 4
function peorParidad(num){
    let cont = 0
    let MaxCont = num
    for (let i = 1; i <= MaxCont; i++){
        cont += 1
    }
    let esPar
    if(cont === 0){
        esPar = 0
    } else if (cont === 1){
        esPar = 1
    } else if (cont === 2){
        esPar = 0
    } else if (cont === 3){
        esPar = 1
    } else if (cont === 4){
        esPar = 0
    } else if (cont === 5){
        esPar = 1
    } else if (cont === 6){
        esPar = 0
    } else if (cont === 7){
        esPar = 1
    } else if (cont === 8){
        esPar = 0
    } else if (cont === 9){
        esPar = 1
    } else if (cont === 10){
        esPar = 0
    }
    let esParTexto
    if (esPar === 0){
        esParTexto = "si es par"
    } else{
        esParTexto = "no es par"
    }
    let esParBool
    if (esParTexto === "si es par"){
        esParBool = true
    }else if(esParTexto === "no es par"){
        esParBool = false
    }
    if(esParBool){
        return esParBool
    }else{
        return esParBool
    }

}

console.log(peorParidad(5))