import { Component, OnInit, Renderer2 } from '@angular/core';
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
  userGuide: string = "";

  isGuideHidden: boolean = true;
  isOutputtHidden: boolean = false;
  isCopyAlertHidden: boolean = true;
  isInputAlertHidden: boolean = true;
  inputAlertMsg: string = "Testing the input message";
  unavailableInputs: Set<string> = new Set();

  constructor(private renderer: Renderer2) { 
    this.textOutput = TextifyService.convertWord("TEXTIFY", "*::*");
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.characterInput.length == 0 && this.textInput.length == 0){
      this.textOutput = TextifyService.convertWord("TEXTIFY", "*::*");
    }
    else if (this.characterInput.length == 0 && this.textInput.length > 0){
      this.textOutput = TextifyService.convertWord(this.textInput, "*::*");
      this.areAllCharactersAvailable();
    }
    else if (this.characterInput.length == 4 && this.textInput.length == 0){
      this.textOutput = TextifyService.convertWord("TEXTIFY", this.characterInput);
    }
    else if (this.validateInput()) {
      this.textOutput = TextifyService.convertWord(this.textInput, this.characterInput);
      this.areAllCharactersAvailable();
    }
  }

  validateInput(): boolean {
    if (this.characterInput.length > 0 && this.characterInput.length < 4){
      this.inputAlertMsg = "Four characters needed in PINK box";
      this.showInputAlert();
      return false;
    }
    return true;
  }

  areAllCharactersAvailable(): boolean{
    this.unavailableInputs.clear();
    this.textInput = this.textInput.toUpperCase();
    for (let i: number = 0; i < this.textInput.length; i++){
      if (TextifyService.characterSet.indexOf(this.textInput.charAt(i)) === -1 ){
        this.unavailableInputs.add(this.textInput.charAt(i));
      }
    }
    if (this.unavailableInputs.size > 0){
      let arr: Array<string> = Array.from(this.unavailableInputs);
      let unavailableList: string = arr.join(",  ");
      if (this.unavailableInputs.size === 1){
        this.inputAlertMsg = "\"" + unavailableList +  "\" is not available";
      }
      else{
        this.inputAlertMsg = "\"" + unavailableList +  "\"  are not available";
      }
      this.showInputAlert();
      return false;
    }
    return true
  }

  showSettings(): void{
    this.isGuideHidden = !this.isGuideHidden;
    this.isOutputtHidden = !this.isOutputtHidden;

    if (this.isGuideHidden){
      this.submit();
    }
  }

  clipBoardCopy(): void{
    const content1 = document.createElement("textarea");
    content1.style.position = "fixed";
    content1.style.left = "0";
    content1.style.top = "0";
    content1.style.opacity = "0";
    content1.value = this.textOutput;
    document.body.appendChild(content1);
    content1.focus();
    content1.select();
    document.execCommand("copy")
    document.body.removeChild(content1);
    this.showCopiedAlert();
  }

  async showCopiedAlert(): Promise<void>{
    this.isCopyAlertHidden = false;
    await this.delay(2000);
    this.isCopyAlertHidden = true;
  }

  async showInputAlert(): Promise<void>{
    this.isInputAlertHidden = false;
    await this.delay(4000);
    this.isInputAlertHidden = true;
  }

  async delay(ms: number): Promise<void> {
    await new Promise<void>(resolve => setTimeout(() => resolve(), ms));
  }


}
