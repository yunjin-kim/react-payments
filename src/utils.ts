export const removeWhiteSpaces = (str: string) => str.replace(/\s/g, '');

export const isNum = (str: string) => removeWhiteSpaces(str) && !Number.isNaN(Number(str));

export const transformToCardFormat = (str: string) => {
  const arr = [0, 4, 8, 12].map(startIndex => str.substr(startIndex, 4));
  arr[2] = '•'.repeat(arr[2].length);
  arr[3] = '•'.repeat(arr[3].length);
  // @todo -사이에 space추가하기
  return arr.filter(str => str.length > 0).join(' - ');
}

export const isEnglish = (str: string) => !/[^A-Za-z]/.test(str);

export const transformNumToBullet = (str: string) => '•'.repeat(str.length);
