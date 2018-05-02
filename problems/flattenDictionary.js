function getKey(key1, key2) {
  if (key1) {
    return key2 ? `${key1}.${key2}` : key1;
  }

  return key2;
}

function flattenDictionary(dict, key) {
  let output = {};
  for (const dictKey in dict) {
    const value = dict[dictKey];
    const newKey = getKey(key, dictKey);
    
    if (value instanceof Object) {
      output = Object.assign({}, output, flattenDictionary(value, newKey));
    } else {
      output[newKey] = value;
    }
  }

  return output;
}