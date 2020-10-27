import {add, subtract, multiply, divide } from './calculator';

test('perfom computations', () =>{
	expect(add(1,2)).toBe(3);
	expect(subtract(4,2)).toBe(2);
	expect(multiply(2,4)).toBe(8);
	expect(divide(4,2)).toBe(2);
})
