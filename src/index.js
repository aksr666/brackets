module.exports = check = (str, bracketsConfig) => {
  if(str.length % 2 !== 0 || str.length == 0) return false;
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    for(let k = 0; k < bracketsConfig.length; k++) {
      if (str[i] == bracketsConfig[k][1] && arr[arr.length - 1] == bracketsConfig[k][0]) arr.pop();
      else if (str[i] == bracketsConfig[k][0]) arr.push(str[i]);        
    }
  }
  return arr.length == 0;
}
