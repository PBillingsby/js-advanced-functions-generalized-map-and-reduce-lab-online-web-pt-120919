// import { start } from "repl"

function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction, startingPoint){
  typeof array.some(Boolean)
  array.forEach(number => {
    startingPoint = arrayFunction(number, startingPoint++)
  
  })
  return startingPoint
}
