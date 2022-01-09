package section4;

import java.util.HashMap;
import java.util.Map;

public class 숫자문자열과_영단어 {

    public static void main(String[] args) {
        System.out.println(solution("one4seveneight"));
        System.out.println(solution("23four5six7"));
        System.out.println(solution("2three45sixseven"));
        System.out.println(solution("123"));
    }

    public static int solution(String s) {
        Map<String, Integer> numberMap = new HashMap<>();
        numberMap.put("ze", 0);
        numberMap.put("on", 1);
        numberMap.put("tw", 2);
        numberMap.put("th", 3);
        numberMap.put("fo", 4);
        numberMap.put("fi", 5);
        numberMap.put("si", 6);
        numberMap.put("se", 7);
        numberMap.put("ei", 8);
        numberMap.put("ni", 9);

        Map<String, Integer> numberSizeMap = new HashMap<>();
        numberSizeMap.put("ze", 4);
        numberSizeMap.put("on", 3);
        numberSizeMap.put("tw", 3);
        numberSizeMap.put("th", 5);
        numberSizeMap.put("fo", 4);
        numberSizeMap.put("fi", 4);
        numberSizeMap.put("si", 3);
        numberSizeMap.put("se", 5);
        numberSizeMap.put("ei", 5);
        numberSizeMap.put("ni", 4);

        StringBuilder answer = new StringBuilder();
        int index = 0;
        do {
            if (isNumber(s.charAt(index))) {
                answer.append(s.charAt(index));
                index++;
            } else {
                String firstTwoCharacters = s.substring(index, index + 2);
                Integer number = numberMap.get(firstTwoCharacters);
                answer.append(number);

                Integer size = numberSizeMap.get(firstTwoCharacters);
                index = index + size;
            }

        } while (index < s.length());

        return Integer.parseInt(answer.toString());
    }

    private static boolean isNumber(char c) {
        return Character.isDigit(c);
    }
}
