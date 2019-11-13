const numbers = [1, 2, 3, 4, 5];
	
function createAddNumber(number) {
	return function (arr) {
		return arr.map(item => item += number)
	}
}

const addOne = createAddNumber(1)(numbers);

const addFive = createAddNumber(5);

console.log(addOne);
console.log(addFive(numbers));
