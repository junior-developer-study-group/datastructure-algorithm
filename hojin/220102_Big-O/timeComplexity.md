[http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788966263080](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788966263080)

예제 12

```java
void permutation(String str) {
    permutation(str, "");
}
void permutation(String str, String prefix) {
    if (str.length() == 0) {
        System.out.println(prefix);
    } else {
        for (int i = 0; i < str.length(); i++) {
            String rem = str.substring(0, i) + str.substring(i + 1);
            permutation(rem, prefix + str.charAt(i));
        }
    }
}
```

해당 Java 코드를 JavaScript로 바꿔서 구현

```javascript
function permutation(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str.charAt(i));
    }
  }
}
```

이 문제의 시간 복잡도는 어떻게 될까?

책에서 시간 복잡도를 구하는 순서가 인상적이었다.

1. "순열"이 완성되는 시점에 함수가 몇 번이나 호출 되는가 => n!

2. "순열 생성"이 완성되기 전에 함수가 몇 번이나 호출되는가 => 함수 호출들이 분기되어 있는 거대한 호출 트리에서 생각했을 때, 루트에서 말단까지 거리는 n. -> 그래서 n!개의 leaf node가 있고 호출 갯수는 n! \* n 이하

```
호출 트리와 leaf node를 생각한 호출 갯수는 써가면서 이해해보자
1. str = "abc";
p(abc) // Java의 경우
p(abc, "")
p(bc, a) p(ac, b) p(ab, c) 3번 순회
p(c, ab) p(b, ac) p(c, ba) p(a, bc) p(b, ca) p(a, cb) 2번 순회
p( , abc) p( , acb) p( , bac) p( , bca) p( , cab) p( , cba) 1번 순회 6개 = n!
총 16~17번 실행 < n*n! = 3*3! = 18
2. str = "abcd"
p(abcd)
p(abcd, "")
p(bcd, a) p(acd, b) p(abd, c) p(abc, d) -> 4번순회
(cd,ab) (bd,ac) (bc,ad) | (cd,ba)(ad,bc)(ac,bd) -> 3번 순회: 12개
(d,abc)(c,abd)|(b,acd)(d,acb)|(c,adb)(b,adc)|| -> 2번: 24개
( ,abcd)|( ,abdc)... -> 1번 순회 : 24개 = n!개
총 65~66번 실행 < 4*4! = 4*24 = 96
이런 상황에서 Big-O 즉 가장 최악의 경우의 수는 = 가장 넓은? 많은? node를 가질 수 밖에 없는 leaf node X 깊이(n)만큼이기 때문에 O(n\*n!)으로 해준 듯 하다.
```

3. 각 함수 호출을 처리하는데 얼마나 오래 걸리나 => Java에서 print는 O(n)의 시간 복잡도를 갖는다?(문자열 전체를 출력하기 때문이라고 하는데 잘 모르겠다) 보통 시간 복잡도 생각해줄 때 console.log 무시해주니까 스터디 사람들과는 무시하기로 했다.

4. 총 수행 시간은 어떻게 되는가? O(n^2\*n!)

총 O(n^2\*n!)의 시간 복잡도라고 책에서는 이야기하지만, 스터디에서 나온 얘기로는 O(n\*n!)의 시간 복잡도를 갖는거 같다는 이야기가 나왔다.

다음 추가문제 VI.11

```java
int numChars = 26;
void printSortedStrings(int remaining) {
    printSortedStrings(remaining, "");
}
void printSortedStrings(int remaining, String prefix) {
    if (remaining == 0) {
        if (isInOrder(prefix)) {
            System.out.println(prefix);
        }
    }
}
boolean isInOrder(String s) {
    for (int i = 1; i < s.length(); i++) {
        int prev = ithLetter(s.charAt(i - 1));
        int curr = ithLetter(s.charAt(i));
        if (prev > curr) {
            return false;
        }
    }
}
char ithLetter(int i) {
    return (char) (((int) 'a') + i);
}
```

사실 이 책이 번역서이기 때문에 이 문제는 어어엄청난 비문이었다.

하지만 간단히 말하면 k 만큼 길이를 갖는 모든 문자열을 구하고 거기에서 정렬된 문자열을 출력하는 코드다. 이 코드의 수행 시간 구하기.

풀이 자체는 생각보다 심플하다.

1. k길이 만큼 26자리 알파벳이 모두 들어갈 수 있다. -> 26^k
2. for 문이 나오는 isInOrder() 내를 제외하고는 모두 상수 시간이다. printSortedStrings 내 for문이라고 해봤자 26번 반복하는 상수시간
3. isInOrder -> O(n) 들어가는 String s 의 길이가 k 이므로 O(k)
4. 따라서 답은 O(k\*26^k)
