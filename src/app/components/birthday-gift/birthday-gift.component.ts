import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday-gift',
  templateUrl: './birthday-gift.component.html',
  styleUrls: ['./birthday-gift.component.scss']
})
export class BirthdayGiftComponent {

  introHeading: string = 'Happy Birthday';
  greeting: string = 'Dear Ella,';
  introParagraph: string = "Wishing you the best this yearYou're a rare treasure, a rose among thorns. Here are words that remind me of you:";
  introParagraphLines: string[] = this.splitIntoLines(this.introParagraph);

  birthdayLetter: string = "Loving Honest Kind Thoughtful Elegant Beautiful Gracious Roses Pink Delicate Serene Radiant Charming Graceful Enchanting Brilliant Compassionate Authentic Glowing Charismatic Leader Refined Adorable Cute Aww Captivating Gentle Classy Exquisite Inspiring Angelic Violet Glittering Grateful Lavender Rare Peaceful Gleaming Generous Dazzling Precious Trustworthy Blissful Sparkling Seraphic Tender Calm Genuine Open Splendid Sincere Majestic Ethereal Mesmerizing Serene Steadfast Pearl Harmonious Opulent Delightful Timeless Joyful Shimmering Vibrant Gorgeous Radiating Superb Exotic Love Alluring Stunning Luminous Harmonious Magnificent Breathtaking Admired Thankful Mesmerizing Spellbinding Wonderful Irresistible Inspiring Exquisite Cherished Endearing Priceless Unique Treasured";
  birthdayLetterLines: string[] = this.splitIntoLines(this.birthdayLetter);

  fullName: string = 'Olanrewaju Buoro Emmanuella';
  closing: string = 'Dedicated to ' + this.fullName;
  closingLines: string[] = this.splitIntoLines(this.closing);

  whiteColor: string = '#2495D9';
  blackColor: string =  '#242626';
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
