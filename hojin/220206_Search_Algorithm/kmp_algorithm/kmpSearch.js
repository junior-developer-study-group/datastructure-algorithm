function lpsTable(str) {
  const len = str.length;
  let returnTable = new Array(len).fill(0);
  for (let i = 1, j = 0; i < len; i++) {
    while (j > 0 && str[i] !== str[j]) j = returnTable[j - 1];
    if (str[i] === str[j]) returnTable[i] = ++j;
  }
  return returnTable;
}

function kmp(long, short) {
  let table = lpsTable(short),
    lenLong = long.length,
    lenShort = short.length;
  console.log(table);
  let j = 0, // short string의 pointer
    count = 0,
    result = [];
  for (let i = 0; i < lenLong; i++) {
    while (j > 0 && long[i] != short[j]) {
      // j가 0보다 크고(j=0이면 어차피 short jump 거리는 0) 문자열 비교가 일치하지 않을 때
      j = table[j - 1]; // 불일치 전까지의 suffix에서 prefix랑 일치한 개수만큼 short에서 jump 가능 -> 이게 jump 후 땡기는 역할을 대신한다.
    }
    // console.log(`long : ${long[i]}, ${i} | short: ${short[j]}, ${j}`);
    if (long[i] === short[j]) {
      // 비교 문자열끼리 일치할 때는
      if (j === lenShort - 1) {
        // j 포인터가 short를 벗어나면 == 즉, 모두 일치할 경우
        result.push(i - lenShort + 2); // 시작 index(i+1/*i는 0부터니까 1 더하고*/ - lenShort + 1/* 빼주면 시작 전 index 값이 나온다*/)
        count++; // count 증가
        j = table[j]; // 거기에서도 suffix랑 일치하는 prefix만큼 short string에서 jump 가능
      } else {
        j++; // j를 증가시키고 for문에서 i++하고 자연스레 비교된다.
      }
    }
  }
  console.log(count);
  console.log(result.join(" "));
}

kmp("ABC ABCDAB ABCDABCDABDE", "ABCDABD");
