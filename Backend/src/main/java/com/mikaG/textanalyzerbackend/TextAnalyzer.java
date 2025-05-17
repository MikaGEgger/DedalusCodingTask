package com.mikaG.textanalyzerbackend;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public  class TextAnalyzer {

    private static final String[] vowels =  {"a", "e", "i", "o", "u"};

    public static Map<String, Object> AnalyzeText(AnalyzeRequest request) {

        Map<String, Integer> characterMap = calculateCharacterMap(request);
        Map<String, Object> response = new HashMap<>();
        response.put("checkedString", request.getText());
        response.put("results", characterMap);
        return response;
    }

    private static Map<String, Integer> calculateCharacterMap(AnalyzeRequest request) {
        Map<String, Integer> characterMap = new HashMap<>();
        var checkVowels = request.checkVowels();
        if(checkVowels)
        {
            //If we check for vowels we will need to add all vowels to the resultset,
            // even if they are not present in the Text.
            for(String vowel : vowels)
            {
                characterMap.put(vowel, 0);
            }
        }
        for(char character : request.getText().toCharArray())
        {
            characterMap.put(String.valueOf(character), characterMap.getOrDefault(String.valueOf(character),0) + 1);
        }
        if(checkVowels)
        {
            characterMap.keySet().retainAll(Arrays.asList(vowels));
        }
        else
        {
            //here we would have a possible Performance bottleneck,
            //but for the purpose of this demo it is "good enough"
            characterMap.keySet().removeAll(Arrays.asList(vowels));
        }

        return characterMap;
    }
}
