import { CharacterInterface } from "src/app/interfaces/character-interface";

export class LetterA implements CharacterInterface {
    oooo: string = "    ";
    llll: string = "$$$$";

    constructor(symbol: string){
        this.llll = symbol;
    }

    getLine(lineNumber: number): string{
        let line: string = "";
        switch(lineNumber){
            case 0: line = this.llll + this.llll + this.llll + this.oooo; break;
            case 1: line = this.llll + this.llll + this.llll + this.oooo; break;
            case 2: line = this.llll + this.oooo + this.llll + this.oooo; break;
            case 3: line = this.llll + this.oooo + this.llll + this.oooo; break;
            case 4: line = this.llll + this.llll + this.llll + this.oooo; break;
            case 5: line = this.llll + this.llll + this.llll + this.oooo; break;
            case 6: line = this.llll + this.oooo + this.llll + this.oooo; break;
            case 7: line = this.llll + this.oooo + this.llll + this.oooo; break;
            case 8: line = this.llll + this.oooo + this.llll + this.oooo; break;
            case 9: line = this.llll + this.oooo + this.llll + this.oooo; break;
        }
        return line;
    }
}
