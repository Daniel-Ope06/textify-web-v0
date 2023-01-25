// -------------------------------- Letters --------------------------------
import { LetterA } from "./letters/letter-a"; import { LetterK } from "./letters/letter-k"; import { LetterU } from "./letters/letter-u";
import { LetterB } from "./letters/letter-b"; import { LetterL } from "./letters/letter-l"; import { LetterV } from "./letters/letter-v";
import { LetterC } from "./letters/letter-c"; import { LetterM } from "./letters/letter-m"; import { LetterW } from "./letters/letter-w";
import { LetterD } from "./letters/letter-d"; import { LetterN } from "./letters/letter-n"; import { LetterX } from "./letters/letter-x";
import { LetterE } from "./letters/letter-e"; import { LetterO } from "./letters/letter-o"; import { LetterY } from "./letters/letter-y";
import { LetterF } from "./letters/letter-f"; import { LetterP } from "./letters/letter-p"; import { LetterZ } from "./letters/letter-z";
import { LetterG } from "./letters/letter-g"; import { LetterQ } from "./letters/letter-q"; 
import { LetterH } from "./letters/letter-h"; import { LetterR } from "./letters/letter-r";
import { LetterI } from "./letters/letter-i"; import { LetterS } from "./letters/letter-s";
import { LetterJ } from "./letters/letter-j"; import { LetterT } from "./letters/letter-t";


// -------------------------------- Numbers --------------------------------
import { Number0 } from "./numbers/number0"; import { Number5 } from "./numbers/number5";
import { Number1 } from "./numbers/number1"; import { Number6 } from "./numbers/number6";
import { Number2 } from "./numbers/number2"; import { Number7 } from "./numbers/number7";
import { Number3 } from "./numbers/number3"; import { Number8 } from "./numbers/number8";
import { Number4 } from "./numbers/number4"; import { Number9 } from "./numbers/number9";


export class AllCharacters {
    static symbol: string = "$$$$";

    // Letters
    static charA: LetterA; static charK: LetterK; static charU: LetterU;
    static charB: LetterB; static charL: LetterL; static charV: LetterV;
    static charC: LetterC; static charM: LetterM; static charW: LetterW;
    static charD: LetterD; static charN: LetterN; static charX: LetterX;
    static charE: LetterE; static charO: LetterO; static charY: LetterY;
    static charF: LetterF; static charP: LetterP; static charZ: LetterZ;
    static charG: LetterG; static charQ: LetterQ;
    static charH: LetterH; static charR: LetterR;
    static charI: LetterI; static charS: LetterS;
    static charJ: LetterJ; static charT: LetterT;

    // Numbers
    static num0: Number0; static num5: Number5;
    static num1: Number1; static num6: Number6;
    static num2: Number2; static num7: Number7;
    static num3: Number3; static num8: Number8;
    static num4: Number4; static num9: Number9;

    public static initializeSymbol(symbol: string): void{
        this.symbol = symbol;

        // Lettters
        this.charA = new LetterA(this.symbol); this.charK = new LetterK(this.symbol); this.charU = new LetterU(this.symbol);
        this.charB = new LetterB(this.symbol); this.charL = new LetterL(this.symbol); this.charV = new LetterV(this.symbol);
        this.charC = new LetterC(this.symbol); this.charM = new LetterM(this.symbol); this.charW = new LetterW(this.symbol);
        this.charD = new LetterD(this.symbol); this.charN = new LetterN(this.symbol); this.charX = new LetterX(this.symbol);
        this.charE = new LetterE(this.symbol); this.charO = new LetterO(this.symbol); this.charY = new LetterY(this.symbol);
        this.charF = new LetterF(this.symbol); this.charP = new LetterP(this.symbol); this.charZ = new LetterZ(this.symbol);
        this.charG = new LetterG(this.symbol); this.charQ = new LetterQ(this.symbol);
        this.charH = new LetterH(this.symbol); this.charR = new LetterR(this.symbol);
        this.charI = new LetterI(this.symbol); this.charS = new LetterS(this.symbol);
        this.charJ = new LetterJ(this.symbol); this.charT = new LetterT(this.symbol);

        // Numbers
        this.num0 = new Number0(this.symbol); this.num5 = new Number5(this.symbol);
        this.num1 = new Number1(this.symbol); this.num6 = new Number6(this.symbol);
        this.num2 = new Number2(this.symbol); this.num7 = new Number7(this.symbol);
        this.num3 = new Number3(this.symbol); this.num8 = new Number8(this.symbol);
        this.num4 = new Number4(this.symbol); this.num9 = new Number9(this.symbol);
    }

    public static getLine(word: string, lineNumber: number): string{
        word = word.toUpperCase();
        let line: string = "";
        for (let i = 0; i < word.length; i++){
            let character: string = word.charAt(i);
            switch(character){
                // Letters
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
                case "P": line += this.charP.getLine(lineNumber); break;
                case "Q": line += this.charQ.getLine(lineNumber); break;
                case "R": line += this.charR.getLine(lineNumber); break;
                case "S": line += this.charS.getLine(lineNumber); break;
                case "T": line += this.charT.getLine(lineNumber); break;
                case "U": line += this.charU.getLine(lineNumber); break;
                case "V": line += this.charV.getLine(lineNumber); break;
                case "W": line += this.charW.getLine(lineNumber); break;
                case "X": line += this.charX.getLine(lineNumber); break;
                case "Y": line += this.charY.getLine(lineNumber); break;
                case "Z": line += this.charZ.getLine(lineNumber); break;

                // Numbers
                case "0": line += this.num0.getLine(lineNumber); break;
                case "1": line += this.num1.getLine(lineNumber); break;
                case "2": line += this.num2.getLine(lineNumber); break;
                case "3": line += this.num3.getLine(lineNumber); break;
                case "4": line += this.num4.getLine(lineNumber); break;
                case "5": line += this.num5.getLine(lineNumber); break;
                case "6": line += this.num6.getLine(lineNumber); break;
                case "7": line += this.num7.getLine(lineNumber); break;
                case "8": line += this.num8.getLine(lineNumber); break;
                case "9": line += this.num9.getLine(lineNumber); break;
            }
        }
        return line;
    }
}
