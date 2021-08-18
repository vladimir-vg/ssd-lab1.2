
const reversedCharNumbers = (str) => {
  const baseCode = 'a'.charCodeAt(0)
  const chars = str.split('');
  chars.reverse();
  const charToCharNumber = c => baseCode - c.charCodeAt(0) + 1;
  return chars.map(charToCharNumber).join(' ');
};

export {
 reversedCharNumbers,
};
