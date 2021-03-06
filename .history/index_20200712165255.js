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
  array.forEach(index => {
    console.log(index, startingPoint)
    startingPoint = arrayFunction(index, startingPoint)
  
  })
  return startingPoint
}
