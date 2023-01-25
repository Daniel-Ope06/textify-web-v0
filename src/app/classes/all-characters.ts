import { LetterA } from "./letters/letter-a"; import { LetterK } from "./letters/letter-k";
import { LetterB } from "./letters/letter-b"; import { LetterL } from "./letters/letter-l";
import { LetterC } from "./letters/letter-c"; import { LetterM } from "./letters/letter-m";
import { LetterD } from "./letters/letter-d"; import { LetterN } from "./letters/letter-n";
import { LetterE } from "./letters/letter-e"; import { LetterO } from "./letters/letter-o";
import { LetterF } from "./letters/letter-f";
import { LetterG } from "./letters/letter-g";
import { LetterH } from "./letters/letter-h";
import { LetterI } from "./letters/letter-i";
import { LetterJ } from "./letters/letter-j";


export class AllCharacters {
    static symbol: string = "$$$$";

    static charA: LetterA; static charK: LetterK;
    static charB: LetterB; static charL: LetterL;
    static charC: LetterC; static charM: LetterM;
    static charD: LetterD; static charN: LetterN;
    static charE: LetterE; static charO: LetterO;
    static charF: LetterF;
    static charG: LetterG;
    static charH: LetterH;
    static charI: LetterI;
    static charJ: LetterJ;


    public static initializeSymbol(symbol: string): void{
        this.symbol = symbol;
        this.charA = new LetterA(this.symbol); this.charK = new LetterK(this.symbol);
        this.charB = new LetterB(this.symbol); this.charL = new LetterL(this.symbol);
        this.charC = new LetterC(this.symbol); this.charM = new LetterM(this.symbol);
        this.charD = new LetterD(this.symbol); this.charN = new LetterN(this.symbol);
        this.charE = new LetterE(this.symbol); this.charO = new LetterO(this.symbol);
        this.charF = new LetterF(this.symbol);
        this.charG = new LetterG(this.symbol);
        this.charH = new LetterH(this.symbol);
        this.charI = new LetterI(this.symbol);
        this.charJ = new LetterJ(this.symbol);
    }

    public static getLine(word: string, lineNumber: number): string{
        word = word.toUpperCase();
        let line: string = "";
        for (let i = 0; i < word.length; i++){
            let letter: string = word.charAt(i);
            switch(letter){
                case "A": line += this.charA.getLine(lineNumber); break;
                case "B": line += this.charB.getLine(lineNumber); break;
                case "C": line += this.charC.getLine(lineNumber); break;
                case "D": line += this.charD.getLine(lineNumber); break;
                case "E": line += this.charE.getLine(lineNumber); break;
                case "F": line += this.charF.getLine(lineNumber); break;
                case "G": line += this.charG.getLine(lineNumber); break;
                case "H": line += this.charH.getLine(lineNumber); break;
                case "I": line += this.charI.getLine(lineNumber); break;
                case "J": line += this.charJ.getLine(lineNumber); break;
                case "K": line += this.charK.getLine(lineNumber); break;
                case "L": line += this.charL.getLine(lineNumber); break;
                case "M": line += this.charM.getLine(lineNumber); break;
                case "N": line += this.charN.getLine(lineNumber); break;
                case "O": line += this.charO.getLine(lineNumber); break;
            }
        }
        return line;
    }
}
