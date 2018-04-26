function deletionDistance(str1, str2) {
  var str1Len = str1.length;
  var str2Len = str2.length;
  var memo = Array.from({ length: str1Len + 1 }, function () {
    return [];
  });

  for (var i = 0; i <= str1Len; i++) {
    for (var j = 0; j <= str2Len; j++) {
      if (i == 0) {
        memo[i][j] = j;
      } else if (j == 0) {
        memo[i][j] = i;
      } else if (str1[i - 1] == str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1];
      } else {
        memo[i][j] = 1 + Math.min(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }

  return memo[str1Len][str2Len];
}
