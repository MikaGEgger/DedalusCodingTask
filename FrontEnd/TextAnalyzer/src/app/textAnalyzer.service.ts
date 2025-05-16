import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {TextAnalyzerResult} from './textLogic/textAnalyzerResult';

interface AnalyzeRequest {
  text: string;
  vowels: boolean;
}

interface AnalyzeResponse {
  checkedString: string;
  results: Map<string, number>;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {
  private apiUrl = 'http://localhost:8080/api/analyzer';

  constructor(private http: HttpClient) { }

  analyzeText(text:string,vowels:boolean): Observable<TextAnalyzerResult>
  {
    let requestPayload: AnalyzeRequest = {
      text: text,
      vowels: vowels
    };
    return this.http.post<AnalyzeResponse>(this.apiUrl,requestPayload).pipe(
      map(response =>{
        return new TextAnalyzerResult(response.checkedString,new Map<string, number>(Object.entries(response.results)))
        }
      )
    );
  }
}
