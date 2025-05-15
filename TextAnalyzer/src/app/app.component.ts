import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatButton} from '@angular/material/button';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {TextAnalyzer} from './textLogic/textAnalyzer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, MatRadioGroup, MatRadioButton, MatButton, MatFormField, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'TextAnalyzer';

  textToBeAnalyzed!: string;
  vowelRadioChecked: boolean = false;
  remoteRadioChecked: boolean = false;
  vowelCheckValue!: string;
  remoteCheckValue!: string;

  textAnalyzer: TextAnalyzer = new TextAnalyzer;

  results: string[][] = [["eins", "zwo"],["drei","vier"]];


  onVowelRadioCheck(value: any) {
    this.vowelRadioChecked = true;
    this.vowelCheckValue = value;
  }
  onRemoteRadioCheck(value: any) {
    this.remoteRadioChecked = true;
    this.remoteCheckValue = value;
  }

  onAnalyzeButtonClick(){


    if(this.remoteCheckValue == "Local"){
      let result = this.textAnalyzer.analyzeText(this.textToBeAnalyzed, this.vowelCheckValue == "Vowels");
      this.results.push(result);

    }
    else{

    }
  }
}
