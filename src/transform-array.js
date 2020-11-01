module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw  Error();
  
  let prevValue;
  const newArr = arr.map((item, i) => {
    if (arr[i+1] === '--discard-prev') {
      prevValue = item;
      return undefined;
    } else if (arr[i-1] === '--discard-next') {
      prevValue = undefined;
      return undefined;
    } else if (arr[i] === '--double-prev' && prevValue !== undefined) {
      prevValue = item;
      return arr[i-1];
    } else if (arr[i] === '--double-next') {
      prevValue = item;
      return arr[i+1];
    } else {
      prevValue = item;
      return item;
    }        
  })
  return newArr.filter((i) => i !== undefined 
  && i !== '--discard-prev' 
  && i !== '--discard-next' 
  && i !== '--double-prev');
};