import ceasarCipher from './cscyper';

test('returns uppercased string', () => {
  expect(ceasarCipher('attackatonce')).toBe('nggnpxngbapr');
});