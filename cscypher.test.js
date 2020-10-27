import ceasarCipher from './cscyper';

test('returns encrypted string', () => {
  expect(ceasarCipher('attackatonce', 4)).toBe('exxegoexsrgi');
});

test('Wrapping from z to a', () => {
  expect(ceasarCipher('zz', 1)).toBe('aa');
});

test('It should maintain the case', () => {
  expect(ceasarCipher('CODING', 9)).toBe('LXMRWP');
});

test('It should maintain the punctuation', () => {
  expect(ceasarCipher('Hi I dont feel so good.', 10)).toBe('Rs S nyxd poov cy qyyn.');
});
