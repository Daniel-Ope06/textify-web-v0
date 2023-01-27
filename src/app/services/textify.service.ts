import { Injectable } from '@angular/core';
import { AllCharacters } from '../classes/all-characters';

@Injectable({
  providedIn: 'root'
})
export class TextifyService {

  constructor() { }

  static characterSet: Array<string> = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "#", "?", "!", "+", " "
  ];

  public static convertWord(word: string, symbol: string): string{
    AllCharacters.initializeSymbol(symbol);
    let result: string = "";
    for (let i = 0; i < 10; i++){
      result += AllCharacters.getLine(word, i) + "\n";
    }

    return result
  }
  
}
