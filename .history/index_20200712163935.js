// import { start } from "repl"

function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction, startingPoint = array[0]){
  array.forEach(number => {
    console.log(startingPoint)
    startingPoint = arrayFunction(number, startingPoint++)
    console.log(startingPoint)
  
  })
  return startingPoint
}
