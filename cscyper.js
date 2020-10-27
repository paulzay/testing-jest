const ceasarCipher = function (string, key) {
  const lowerCased = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upperCased = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  return Array.from(string)
    .map((i) => {
      if (/[A-Z]/g.test(i)) {
        let newIndex = (upperCased.findIndex((j) => j === i) + key + 26) % 26;
        if (newIndex < 0) {
          newIndex += 26;
        }
        return upperCased[newIndex];
      } if (/[a-z]/g.test(i)) {
        let newIndex = (lowerCased.findIndex((j) => j === i) + key + 26) % 26;
        if (newIndex < 0) {
          newIndex += 26;
        }
        return lowerCased[newIndex];
      }
      return i;
    })
    .join('');
};

export default ceasarCipher;