function stringSearchNaive(long, short) {
  var count = 0; // 일치하는 개수 담을 count 변수
  for (var i = 0; i < long.length; i++) {
    // 긴 문자열을 전부 다 돌변서
    for (var j = 0; j < short.length; j++) {
      // 짧은 문자열에 대하여
      if (short[j] !== long[i + j]) break; // 비교 문자열끼리 일치하지 않으면 for문 탈출
      if (j === short.length - 1) count++; // short를 다 돌면 비교 문자열이 일치하므로 count 1 증가
    }
  }
  return count;
}

stringSearchNaive("lorie loled", "lol");
