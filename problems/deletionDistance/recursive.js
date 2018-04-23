/**
 * Created by Naman on 24/04/18.
 */
function deletionDistance(str1, str2) {
  var str1Length = str1.length;
  var str2Length = str2.length;
  if (!str1 && !str2) {
    return 0;
  }
  if (!str1 && str2) {
    return str2Length;
  }
  if (str1 && !str2) {
    return str1Length;
  }

  if (str1[str1Length - 1] === str2[str2Length - 1]) {
    return deletionDistance(str1.substring(0, str1Length - 1), str2.substring(0, str2Length - 1));
  }

  return 1 + Math.min(deletionDistance(str1, str2.substring(0, str2Length - 1)), deletionDistance(str1.substring(0, str1Length - 1), str2));
}

