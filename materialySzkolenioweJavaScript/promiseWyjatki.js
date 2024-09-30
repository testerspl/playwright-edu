let promise1 = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve('foo');
	});
});


let promise2 = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve(promise1.then((value) => {
			console.log(value);
			// expected output: "foo"
		}));
	});
});



'Krzysiek "Jest trenerem"' // ok
`Krzysiek` // ok
"Krzysiek" // error
let a = "Krzysiek" // error

promise2.then().then().then().catch()

console.log(promise1);
// expected output: [object Promise]

// NOTE: Obsługa błędów

let promisex = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve('foo');
		reject(console.log('DEHDBRIBIJR'));
	}, 300);
});

promise2
	.then((value) => {
		console.log(value);
		// expected output: "foo"
	})
	.catch((err) => console.log(err));

console.log(promise1);
// expected output: [object Promise]

// NOTE: Wyjątki:

// class Animal {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   speak() {
//     console.log(this.name + ' makes a noise.')
//   }
// }

// class Dog extends Animal {
//   constructor(myDogName, myDogAge) {
//     super(myDogName,myDogAge)
//   }
//   myDogSpeak() {

//     try {
//       speak()
//       console.log(this.name + ' age: ' + this.age)
//     } catch (ex) {
//       console.log('Error: ' + this.speak())
//       console.log(ex)
//     }
//   }
// }

// let dog = new Dog()

// dog.myDogSpeak()

function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000);
	}).catch(err => console.log(err))
}

async function asyncCall(callback) {
	console.log('calling');
try {
	const result = await resolveAfter2Seconds();
	console.log(result);


	callback(result)

} catch (ex) {
	console.log(ex)
}
	// Expected output: "resolved"
}

asyncCall((result) => {

	console.log(result)
});
