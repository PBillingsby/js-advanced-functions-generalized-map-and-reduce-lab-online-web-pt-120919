function map(arr, arrFunction){
  let newArr = []
  for (let item of arr) {
    newArr.push(arrFunction(item))
  }
  return newArr
}

function reduce(array, arrayFunction){
  let total = 0
  for (let num of array) {
    console.log(array[num])
    total += arrayFunction(array[num])
  }
  console.log(total)
}