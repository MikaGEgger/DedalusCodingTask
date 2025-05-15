export class TextAnalyzer{

  public resultSet: string[] = [];


  analyzeText(this: any, text: string, vowels: boolean) : string[]
  {
        if(vowels)
    {
      this.resultSet = this.checkVowels(text);
    }
    else
    {
      this.resultSet = this.checkConsonants(text);
    }
    return this.resultSet;
  }
  checkVowels(text: string) {
    return [text,"VowelsChecked"];
  }

  checkConsonants(text: string[]) {
    return [text,"ConsonantsChecked"];
  }

}
