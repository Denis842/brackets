module.exports = function check(str, bracketsConfig) {

  let i = 0;
  let brackets;

  for (let i = 0; i < bracketsConfig.length;) {
    
    brackets = bracketsConfig[i].join('');

    if (str.includes(brackets)) {
      str = str.replace(brackets, '');
      i = 0;
    }
    else {
      i++;
    }
  }

  if (str == ''){
    result = true;
  }
  else {
      result = false;
  }
  
  return result;
};

