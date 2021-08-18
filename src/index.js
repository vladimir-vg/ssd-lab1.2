
const reversedCharNumbers = (str) => {
  const baseCode = 'a'.charCodeAt(0)
  const chars = str.toLowerCase().split('');
  chars.reverse();
  const charToCharNumber = c => c.charCodeAt(0) - baseCode + 1;
  return chars.map(charToCharNumber).join(' ');
};

export {
 reversedCharNumbers,
};
