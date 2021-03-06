import { start } from "repl"

// import { start } from "repl"

function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction, startingPoint){
  if (!startingPoint) {
    startingPoint = 0
  }
  array.forEach(index => {
    startingPoint = arrayFunction(index, startingPoint)
  })
  return startingPoint
}
