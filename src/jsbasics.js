import './jsbasics.css'
import { getText, setText } from './jsbasics/store.js'

console.error('=====================')

const test1 = [1, 2, 3]
let test2 = 'ADC'

test1.push(4)
test2 = 'Yo'

console.log(test1, test2)

let number = 2
let string = 'String'
let array = [1, 2, 3]

let object = {
  key1: 1,
  hse: 2,
  design: 3
}

let boolean = true

console.log(
  typeof number,
  typeof string,
  typeof array,
  typeof object,
  typeof boolean
)

console.log(number, string, array, array.length, object, boolean)
console.log(array[1], object.hse, object['hse'])
console.log(Object.keys(object), Object.values(object))

let complexArray = [
  [1, 2, 3],
  {
    firstname: 'Yo',
    lastname: 'Rap',
    albums: ['2019', '2020', '2021']
  }
]

let complexObject = {
  firstname: 'Yo',
  lastname: 'Rap',
  albums: [
    {
      title: 'Superalbum',
      year: 2020,
      label: 'Blablabla'
    },
    {
      title: 'Superalbum 2',
      year: 2021,
      label: 'Blablabla'
    }
  ]
}

function functionName(a) {
  console.log(a)
}

const arrowFunction = (a) => {
  console.log(a)
}

functionName('Yo')
arrowFunction('Yo')

console.log('getText', getText())
setText('Yo')
console.log('getText', getText())

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed')
})
