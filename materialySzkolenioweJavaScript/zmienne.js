



// NOTE: Słowa kluczowe dla zmiennych

// var (Nie używamy ze względu na wprowadzenie let i const)
// let
// const


// NOTE: Zmienne - przykład konstrukcji

// var title = 'Gra o tron' // String
let year = 1983 // Number
let getYear = () => { } // Function
const myNames = ['Krzysztof'] // Array
const names = { nameOne:'Krzysztof' } // Object


// NOTE: Przykład zachowania zmiennej var

// title = "Gra o tron"

// console.log(title)

// var title

// title = 500

// console.log(title)
// console.log(title)


// NOTE: Zasięg zmiennych

// NOTE: Przykład:

// function varTest() {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
  
//   function letTest() {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

// NOTE: Funkcyjny

// var letter = 'C'

// function functionRange() {

//     letter = 'A'

//     if (letter.length) {
//         console.log(letter) // zwraca A
//         let letter = 'B' // NOTE: Przykład 2 - zmienić na let
//         console.log(letter) // zwraca B
//     }

//     console.log(letter) // zwraca B
// }

// letter = 'D'
//  var letter // NOTE: *Hoisting
// console.log(letter)

// functionRange()


// NOTE: Blokowy

// let letter = 'A'

// function blockRange() {
//     var letter = 'C'

//     if (letter.length) {
//         var letter = 'B'
        
//         console.log(letter)
//         var letter = 'A' // NOTE: Przykład 2 - Zamienić na let
//         console.log(letter)

//         const letters = 'Krzysztof'

     
//     }

//     console.log(letter)
// }

// console.log(letter) // NOTE: Przykład 3 - odkomentować

// blockRange()
