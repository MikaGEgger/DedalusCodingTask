import {TextAnalyzerResult} from './textAnalyzerResult';

export class TextAnalyzer{

  /*  For internationalization, we would either need to expand this list,
      or change the data structure itself.
      In this version things like á,ü,ì are not recognized as vowels.*/
  private vowels :string[] = ['a','e','i','o','u'];

  analyzeText(this: any, text: string, vowels: boolean) : TextAnalyzerResult
  {
      return new TextAnalyzerResult(text, this.createCharacterMap(text,vowels));
  }

  createCharacterMap(text: string, vowels:boolean) {
    let characterMap: Map<string, number> = new Map();
    let undefinedValue = 0;

    //if we search for vowels, we initialize all vowels in the map and only check for them.
    //Also we set the undefinedValue to e
    if (vowels) {
      undefinedValue = -1;
      this.vowels.forEach((character) => {
        characterMap.set(character, 0);
      });
    }
    for (let char of text) {
      let count: number = characterMap.get(char) ?? undefinedValue
      if (count >= 0) {
        count= count+1;
        characterMap.set(char, count);
      }
    }

    //finally we remove the vowels from the list if we want consonant only.
    if (!vowels) {
      this.vowels.forEach((character) => {
        characterMap.delete(character);
      });
    }

    return characterMap;
  }

}
