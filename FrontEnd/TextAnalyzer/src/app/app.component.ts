import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatButton} from '@angular/material/button';
import {TextAnalyzer} from './textLogic/textAnalyzer';
import {TextAnalyzerResult} from './textLogic/textAnalyzerResult';
import {FormsModule} from '@angular/forms';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';
import {AnalyzerService} from './textAnalyzer.service';
import {HttpClient} from '@angular/common/http';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, MatRadioGroup, MatRadioButton, MatButton, NgForOf, FormsModule, MatSlideToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'TextAnalyzer';

  textToBeAnalyzed!: string;
  remoteCheck: boolean = false;
  vowelRadioChecked: boolean = false;
  vowelCheckValue!: string;

  textAnalyzer: TextAnalyzer = new TextAnalyzer;
  results: TextAnalyzerResult [] = [];
  resultDetails: string[] = [];

  analyzerService: AnalyzerService;

  constructor() {
    this.analyzerService= new AnalyzerService(inject(HttpClient));
  }


  onVowelRadioCheck(value: any) {
    this.vowelRadioChecked = true;
    this.vowelCheckValue = value;
  }

  onAnalyzeButtonClick() {
    let checkVowels = this.vowelCheckValue == "Vowels";
    if (this.remoteCheck) {
      this.analyzerService.analyzeText(this.textToBeAnalyzed, checkVowels).subscribe(data => this.addResultToResultList(data));    }
    else {
      this.addResultToResultList(this.textAnalyzer.analyzeText(this.textToBeAnalyzed, checkVowels));
    }
  }

  private addResultToResultList(result: TextAnalyzerResult) {
    this.results.unshift(result);
    this.fillResultDetails(this.results[0].results);
  }

  fillResultDetails(results: Map<string, number>) {
    this.resultDetails = [];
    for (let [key, value] of results) {
      this.resultDetails.push("Character: '" + key + "' occurs " + value + " times.");
    }
  }

  onCalcToggleChanged(event: MatSlideToggleChange) {
    this.remoteCheck = event.checked;
  }


}

