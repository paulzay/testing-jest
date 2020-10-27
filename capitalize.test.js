import capitalizeString from './capitalize';

test('returns capitalized string', () => {
  expect(capitalizeString('string')).toBe('String');
});
