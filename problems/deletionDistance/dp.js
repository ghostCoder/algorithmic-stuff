/**
 * Created by Naman on 24/04/18.
 */
function deletionDistance(str1, str2, resultMap) {
  var str1Length = str1.length;
  var str2Length = str2.length;
  var result;

  if (resultMap && typeof(resultMap[str1Length][str2Length]) != "undefined") {
    return resultMap[str1Length][str2Length];
  }

  if (!str1 && !str2) {
    result = 0;
  }
  if (!str1 && str2) {
    result = str2Length;
  }
  if (str1 && !str2) {
    result = str1Length;
  }

  if (!resultMap) {
    resultMap = Array.from({ length: str1Length+1 }, function(){ return [];});
  }

  if (typeof(result) != "undefined") {
    return result;
  }

  if (str1[str1Length - 1] === str2[str2Length - 1]) {
    result = deletionDistance(str1.substring(0, str1Length - 1), str2.substring(0, str2Length - 1), resultMap);
    resultMap[str1Length][str2Length] = result;
    return result;
  }

  result = 1 + Math.min(deletionDistance(str1, str2.substring(0, str2Length - 1), resultMap), deletionDistance(str1.substring(0, str1Length - 1), str2, resultMap));
  resultMap[str1Length][str2Length] = result;
  return result;
}