import { Component, OnInit } from '@angular/core';
import { TextifyService } from 'src/app/services/textify.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  textInput: string = "";
  characterInput: string = "";
  textOutput: string = "";

  constructor() { 
    this.textOutput = TextifyService.convertWord("TEXTIFY", "+-+-");
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.validateInput()){
      this.textOutput = TextifyService.convertWord(this.textInput, this.characterInput);
    }
  }

  validateInput(): boolean {
    if (this.characterInput.length < 4){
      alert("There must be 4 characters to draw with")
      return false;
    }
    return true;
  }
}
