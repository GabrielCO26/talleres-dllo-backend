// Gabriel Castro taller 2

// Punto 1
function findMax(numeros){
  let max = numeros[0]
  for (let i=1; i < numeros.length; i++){
    if(numeros[i] > max){
      max = numeros[i]
    }
  }
  return max
}

nums = [3, 17, -1, 4, -19]
console.log(findMax(nums))

// Punto 2
function includes(numeros, elem){
  for (let i=0; i < numeros.length; i++){
    if(numeros[i] === elem){
      return true
    }
  }
  return false
}

nums = [3, 17, -1, 4, -19]
console.log(includes(nums, 4))

// Punto 3
function sum(numeros){
  let total = 0
  for (let i=0; i < numeros.length; i++){
    total += numeros[i]
  }
  return total
}

nums = [3, 17, -1, 4, -19]
console.log(sum(nums))

// Punto 4
function missingNumbers(numeros){
  const missingList = []
  let min = numeros[0], max = numeros[0]
  for (let i=1; i < numeros.length; i++){
    if(numeros[i] > max){
      max = numeros[i]
    }
    if(numeros[i] < min){
      min = numeros[i]
    }
  }
  for (let i=min+1; i < max; i++){
    let isIn = false
    for (let j=0; j < numeros.length; j++){
      if (i === numeros[j]){
        isIn = true
      }
    }
    if (!isIn){
      missingList.push(i)
    }
  }
  return missingList
}

nums = [7, 2, 4, 6, 3, 9]
console.log(missingNumbers(nums))
