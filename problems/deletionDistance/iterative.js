function deletionDistance(str1, str2) {
  let counter = 0;
  while (str1.length > 0) {
    let indexOf = str2.indexOf(str1[0]);
    if (indexOf < 0) {
      counter += 1;
      str1 = str1.substring(1, str1.length);
    } else if (indexOf === 0) {
      str1 = str1.substring(1, str1.length);
      str2 = str2.substring(1, str2.length);
    } else {
      counter += indexOf;
      str1 = str1.substring(1, str1.length);
      str2 = str2.substring(indexOf + 1, str2.length);
    }
  }
  counter += str2.length;
  return counter;
}