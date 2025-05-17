import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {TextAnalyzer} from './textLogic/textAnalyzer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'TextAnalyzer' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TextAnalyzer');
  });




  /*
  Those are just examples for tests, they do not include edge cases and show
  limitations of the sample implementation.
   */

  it('should give vowels when checking for them.', () => {
    let text = "Hello World!"
    let textAnalyzer = new TextAnalyzer;
    let result =textAnalyzer.analyzeText(text, true);

    /*check if the checkedString is set correctly, if the key 'l' hasn't been incorrectly created
     and if the value of the key 'o' corresponds to the expected number.
     */
    expect(result.checkedString==text);
    expect(!result.results.has('l'));
    expect(result.results.get('o')).toEqual(2);
  });

  it('should create entries only for consonants when asked', () => {
    let text = "Hello World!Ä"
    let textAnalyzer = new TextAnalyzer;
    let result =textAnalyzer.analyzeText(text, false);


    expect(!result.results.has('e'));
    expect(result.results.get('l')).toEqual(3);

    expect(result.results.get('!')).toEqual(1); //Is this behaviour specified?

    //Also this? -> if we strictly follow the logic from the textAnalyzer.java, then yes, but it seems incorrect to me.
    expect(result.results.get('Ä')).toEqual(1);



  });

});
