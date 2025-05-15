export class TextAnalyzerResult{
  constructor(checkedString: string, map: Map<string, number>) {
this.checkedString= checkedString;
this.results=map;
  }

  public checkedString:string =``;
  public results: Map<string, number>  = new Map<string, number>();
}
