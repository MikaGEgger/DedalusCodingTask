import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatButton} from '@angular/material/button';
import {MatFormField} from '@angular/material/form-field';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatInput} from '@angular/material/input';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, MatRadioGroup, MatRadioButton, MatButton, MatFormField, CdkTextareaAutosize, MatInput],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TextAnalyzer';
  textToBeAnalyzed!: string;
}
