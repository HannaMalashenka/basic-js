module.exports = function repeater(str, options) {
  const repeatTimes = parseInt(options.repeatTimes) || 1;
  const separator = options.separator !== undefined ? String(options.separator) : "+";

  const addition = options.addition !== undefined ? String(options.addition) : "";
  const additionSeparator = options.additionSeparator ? String(options.additionSeparator) : "|";
  const additionRepeatTimes = parseInt(options.additionRepeatTimes) || 1;

  function repeatStr (str, separator, times) {
    return str ? 
    (str + separator).repeat(times).slice(0, separator.length * -1) : 
    ""};
  
  str += repeatStr(addition, additionSeparator, additionRepeatTimes);

  return repeatStr(str, separator, repeatTimes);
};
  