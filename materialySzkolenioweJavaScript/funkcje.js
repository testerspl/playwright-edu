


// function functionExample(x = 10, y = 10) {
    
//      return x + y 
    
//     }
    
//     console.log(functionExample(20, 30))



let func1 = x => x * x
// skrócony zapis, nie wymagany "return"

let func2 = (x, y) => { 
	return x + y 
}
// Zapis blokowy, wymagany "return"


// NOTE: Przykład 1

// function myjZeby(ileCzasu) {
// // 	console.log('Myję zęby ' + ileCzasu)
// // }

// let myjZeby = ileCzasu => console.log('Myję zęby ' + ileCzasu)

// myjZeby('15 minut')


// NOTE: Przykład 2

// let jedzSamochodem = (kmh, gdzie) => {
// 	console.log('Właśnie jadę samochodem ' + kmh + 'km/h, w kierunku ' + gdzie)

// 	return [kmh, gdzie]
// }

// let a = jedzSamochodem(130, 'Warszawa')


// NOTE: Przykład 3

let policz = (dzialanie, liczba1, liczba2) => {
	let wynik = false

	if (dzialanie === 'dodaj') {
		wynik = liczba1 + liczba2
	} else if (dzialanie === 'odejmij') {
		wynik = liczba1 - liczba2
	} else if (dzialanie === 'pomnoz') {
		wynik = liczba1 * liczba2
	} else if (dzialanie === 'podziel') {
		wynik = liczba1 / liczba2
	}else if (dzialanie === 'anonim') {
		throw Error('Anonim')
	}

	return wynik
}
let b = policz("anonim")

console.log(b())

// console.log(policz('pomnoz', 5, 10))
// console.log(policz('podziel', 5, 10))