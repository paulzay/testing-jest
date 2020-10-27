import calculator from './calculator';

const compute = new calculator();
test('perfom computations', () => {
  expect(compute.add(1, 2)).toBe(3);
  expect(compute.subtract(4, 2)).toBe(2);
  expect(compute.multiply(2, 4)).toBe(8);
  expect(compute.divide(4, 2)).toBe(2);
});
