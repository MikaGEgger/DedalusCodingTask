import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatButton} from '@angular/material/button';
import {TextAnalyzer} from './textLogic/textAnalyzer';
import {TextAnalyzerResult} from './textLogic/textAnalyzerResult';
import {FormsModule} from '@angular/forms';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';


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


  onVowelRadioCheck(value: any) {
    this.vowelRadioChecked = true;
    this.vowelCheckValue = value;
  }

  onAnalyzeButtonClick() {
    if (this.remoteCheck) {
//TODO: Add Remote Check.
    } else {
      this.results.unshift(this.textAnalyzer.analyzeText(this.textToBeAnalyzed, this.vowelCheckValue == "Vowels"));
    }
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

