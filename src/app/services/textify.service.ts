import { Injectable } from '@angular/core';
import { AllCharacters } from '../classes/all-characters';

@Injectable({
  providedIn: 'root'
})
export class TextifyService {

  constructor() { }

  public static convertWord(word: string, symbol: string): string{
    AllCharacters.initializeSymbol(symbol);
    let result: string = "";
    for (let i = 0; i < 10; i++){
      result += AllCharacters.getLine(word, i) + "\n";
    }

    return result
  }
  
}
