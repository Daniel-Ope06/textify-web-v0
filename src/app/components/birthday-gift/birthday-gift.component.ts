import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday-gift',
  templateUrl: './birthday-gift.component.html',
  styleUrls: ['./birthday-gift.component.scss']
})
export class BirthdayGiftComponent {

  introduction: string = 'Happy Birthday';
  greeting: string = 'Dear Emmanuella,';
  fullName: string = 'Olanrewaju-Buoro Emmanuella';
  birthdayLetter: string = "As I sit down to pen this letter, my heart is overflowing with emotions that words alone cannot fully express. I find myself falling deeper and deeper in love with you with each passing day, and I couldn't let another moment go by without letting you know just how special you are to me. From the very first time our eyes met, I felt an indescribable connection. It was as if the universe conspired to bring us together, weaving a love story destined to be extraordinary. Your presence in my life has illuminated my world, casting away any shadows of doubt or loneliness. With you, I feel complete. There is something magical about the way you make me feel. Your smile, like a sunbeam on a cloudy day, has the power to brighten even the darkest corners of my soul. Your laughter is a symphony that plays on repeat in my mind, filling my heart with joy. And your touch... oh, your touch sets my entire being ablaze, igniting a fire within me that burns with an intensity I've never known before. But it's not just your external beauty that captivates me; it's the beauty that lies within your soul. Your kindness, compassion, and unwavering support have taught me the true meaning of love. You've shown me that love isn't just a word, but a verb—a series of actions and choices we make every day to show our devotion and commitment. And I promise you, my love, that I will always choose you. You are my confidant, my best friend, and my partner in crime. Together, we have shared countless moments of laughter, tears, and everything in between. We've weathered storms and celebrated triumphs, always side by side, holding each other's hands. And in those moments, I've realized that with you, I am home. As we continue to embark on this journey together, I want you to know that I am committed to building a future filled with love, trust, and unwavering support. I promise to stand by your side through thick and thin, to be your rock when you need strength, and to lift you up when life throws its challenges our way. You have brought a depth of love and happiness into my life that I never thought possible. I am eternally grateful for your presence, and I cherish every moment we share together. You are the missing piece that completes me, the love that fills the emptiness in my heart. Without you, I am incomplete. So, my love, I hope these words convey even a fraction of the love that fills my heart. Know that you are cherished, adored, and loved beyond measure. You are my everything, and I am forever grateful to have you in my life.";
  birthdayLetterLines: string[] = this.splitIntoLines(this.birthdayLetter);

  whiteColor: string = '#FBFFFE'//'#2495D9';
  blackColor: string = '#242626';
  redLightColor: string = '#BE101B'
  redDarkColor: string = '#860A24';

  lineColors: string[][] = [
    /****LINE 1****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 12 },
      { color: this.blackColor, frequency: 3 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 3 },
      { color: this.whiteColor, frequency: 12 }
    ),

    /****LINE 2****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 9 },
      { color: this.blackColor, frequency: 3 },
      { color: this.redLightColor, frequency: 3 },
      /**************MIDDLE POINT**************/
      { color: this.redLightColor, frequency: 3 },
      { color: this.blackColor, frequency: 2 },
      { color: this.whiteColor, frequency: 10 }
    ),

    /****LINE 3****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 6 },
      { color: this.blackColor, frequency: 3 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.blackColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 4 },
      { color: this.blackColor, frequency: 3 },
      { color: this.whiteColor, frequency: 7 }
    ),

    /****LINE 4****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 5 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 3 },
      { color: this.whiteColor, frequency: 7 }
    ),

    /****LINE 5****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 2 },
      { color: this.blackColor, frequency: 5 },
      { color: this.redLightColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 2 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 2 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 6 },
      { color: this.whiteColor, frequency: 2 },
    ),

    /****LINE 6****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 4 },
      /**************MIDDLE POINT**************/
      { color: this.redLightColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 6 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 1 }
    ),

    /****LINE 7****/
    this.generateColorArray(
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 3 },
      { color: this.blackColor, frequency: 2 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.blackColor, frequency: 2 },
      { color: this.redLightColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 }
    ),

    /****LINE 8****/
    this.generateColorArray(
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.blackColor, frequency: 2 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      /**************MIDDLE POINT**************/
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 2 },
      { color: this.redLightColor, frequency: 6 },
      { color: this.blackColor, frequency: 1 }
    ),

    /****LINE 9****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 1 },
      { color: this.blackColor, frequency: 2 },
      { color: this.redLightColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 2 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.blackColor, frequency: 2 },
      { color: this.whiteColor, frequency: 1 }
    ),

    /****LINE 10****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 3 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 11****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.redLightColor, frequency: 2 },
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 6 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 12****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 6 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 2 },
      { color: this.redLightColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 7 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 13****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 7 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      { color: this.redLightColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 8 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 14****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 3 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 6 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 15****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 6 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      { color: this.redLightColor, frequency: 7 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 16****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 3 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 3 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 17****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 4 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 3 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 5 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 18****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 4 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 3 }
    ),

    /****LINE 19****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 4 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 2 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 4 }
    ),

    /****LINE 20****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 1 },
      { color: this.redLightColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 3 },
      { color: this.blackColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 10 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 4 }
    ),

    /****LINE 21****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 4 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 9 },
      { color: this.blackColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 10 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 4 }
    ),

    /****LINE 22****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 5 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 9 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 8 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 5 }
    ),

    /****LINE 23****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 6 },
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 8 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 7 },
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 6 }
    ),

    /****LINE 24****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 7 },
      { color: this.blackColor, frequency: 4 },
      { color: this.redDarkColor, frequency: 4 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.redDarkColor, frequency: 3 },
      { color: this.blackColor, frequency: 4 },
      { color: this.whiteColor, frequency: 7 }
    ),

    /****LINE 25****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 11 },
      { color: this.blackColor, frequency: 3 },
      { color: this.redDarkColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.redDarkColor, frequency: 1 },
      { color: this.blackColor, frequency: 3 },
      { color: this.whiteColor, frequency: 11 }
    ),

    /****LINE 26****/
    this.generateColorArray(
      { color: this.whiteColor, frequency: 14 },
      { color: this.blackColor, frequency: 1 },
      /**************MIDDLE POINT**************/
      { color: this.blackColor, frequency: 1 },
      { color: this.whiteColor, frequency: 14 }
    ),

  ];


  splitIntoLines(inputString:string): string[] {
    const lineSize: number = 30;
    let lines: string[] = [];

    for (let i = 0; i < inputString.length; i += lineSize) {
      let line= inputString.substring(i, i + lineSize);
      lines.push(line);
    }

    return lines;
  }


  getCharacterPairs(line: string): string[] {
    const pairs: string[] = [];
    for (let i = 0; i < line.length; i += 2) {
      let pair = line.substring(i, i+2);
      pairs.push(pair.replace(/\s/g, '<span [style.font-size.rem]="0.9">&#10084;</span>'));
    }
    return pairs;
  }


  generateColorArray(...objects: { color: string, frequency: number }[]): string[] {
    const colorArray: string[] = [];

    for (const obj of objects) {
      const { color, frequency } = obj;
      for (let i = 0; i < frequency; i++) {
        colorArray.push(color);
      }
    }

    if (colorArray.length === 30) {
      return colorArray;
    } else {
      throw new Error('The total length of the array is not equal to 30.\n' + 'Total = ' + colorArray.length);
    }
  }

}
