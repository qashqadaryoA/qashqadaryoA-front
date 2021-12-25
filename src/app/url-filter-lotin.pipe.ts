import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlFilterLotin'
})
export class UrlFilterLotinPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(value?: any, args?: any): unknown {
    let word = this.sanitizer.bypassSecurityTrustHtml(value).toString();
    let answer: any = ""
      , a: any = {};
    //Kiril to Lotin
    a["Ё"] = "YO"; a["Й"] = "I"; a["Ц"] = "J"; a["У"] = "U"; a["К"] = "K"; a["Е"] = "E"; a["Н"] = "N"; a["Г"] = "G"; a["Ш"] = "Sh"; a["Щ"] = "SCh"; a["З"] = "Z"; a["Х"] = "x"; a["Ъ"] = "'";
    a["ё"] = "yo"; a["й"] = "y"; a["ц"] = "ts"; a["у"] = "u"; a["к"] = "k"; a["е"] = "e"; a["н"] = "n"; a["г"] = "g"; a["ш"] = "sh"; a["щ"] = "sch"; a["з"] = "z"; a["х"] = "x"; a["ъ"] = "'";
    a["Ф"] = "F"; a["Ы"] = "I"; a["В"] = "V"; a["А"] = "a"; a["П"] = "P"; a["Р"] = "R"; a["О"] = "O"; a["Л"] = "L"; a["Д"] = "D"; a["Ж"] = "J"; a["Э"] = "E";
    a["ф"] = "f"; a["ы"] = "i"; a["в"] = "v"; a["а"] = "a"; a["п"] = "p"; a["р"] = "r"; a["о"] = "o"; a["л"] = "l"; a["д"] = "d"; a["ж"] = "j"; a["э"] = "e";
    a["Я"] = "Ya"; a["Ч"] = "Ch"; a["С"] = "S"; a["М"] = "M"; a["И"] = "I"; a["Т"] = "T"; a["Ь"] = "'"; a["Б"] = "B"; a["Ю"] = "YU";
    a["я"] = "ya"; a["ч"] = "ch"; a["с"] = "s"; a["м"] = "m"; a["и"] = "i"; a["т"] = "t"; a["ь"] = "'"; a["б"] = "b"; a["ю"] = "yu";
    a["қ"] = "q"; a["ў"] = "o'"; a["Қ"] = "Q"; a["ҳ"] = "h"; a["Ҳ"] = "H"; a["ғ"] = "g'";
    //Lotin to Kirill
    a["YO"] = "Ё"; a["I"] = "Й"; a["J"] = "Ц"; a["U"] = "У"; a["K"] = "К"; a["E"] = "Е"; a["N"] = "Н"; a["G"] = "Г"; a["SCH"] = "Щ"; a["Z"] = "З"; a["X"] = "Х";
    a["yo"] = "ё"; a["y"] = "й"; a["j"] = "ц"; a["u"] = "у"; a["k"] = "к"; a["e"] = "е"; a["n"] = "н"; a["g"] = "г"; a["sch"] = "щ"; a["z"] = "з"; a["x"] = "х";
    a["F"] = "Ф"; a["I"] = "Ы"; a["V"] = "В"; a["a"] = "А"; a["P"] = "П"; a["R"] = "Р"; a["O"] = "О"; a["L"] = "Л"; a["D"] = "Д"; a["j"] = "Ж"; a["E"] = "e";
    a["f"] = "ф"; a["i"] = "ы"; a["v"] = "в"; a["a"] = "а"; a["p"] = "п"; a["r"] = "р"; a["o"] = "о"; a["l"] = "л"; a["d"] = "д"; a["j"] = "ж"; a["e"] = "e";
    a["C"] = "C"; a["S"] = "С"; a["M"] = "М"; a["I"] = "И"; a["T"] = "Т"; a["B"] = "Б"; a["YU"] = "Ю";
    a["c"] = "c"; a["s"] = "с"; a["m"] = "м"; a["i"] = "и"; a["t"] = "т"; a["b"] = "б"; a["yu"] = "ю";
    a["q"] = "қ"; a["Q"] = "Қ"; a["h"] = "ҳ"; a["H"] = "Ҳ"; a["g'"] = "ғ"; a["U"] = "Ў"
    let wordStatus: any = false;
    for (let i = 0; i <= word.length; i++) {
      if (word.hasOwnProperty(i)) {
        if (a[word[i]] === undefined) {
          if (word[i] == "&") {
            answer += "  ";
            i = i + 5;
          }
          else {
            answer += word[i];
            if (word[i] == ">") {
              wordStatus = false;
            }
            if (word[i] == "<") {
              wordStatus = true;
            }
          }
        } else {
          if (wordStatus == true || word[i] == "<") {
            answer += word[i];
            wordStatus = true;
            if (word[i] == ">") {
              wordStatus = false;
            }
          }
          else {
            let b = word[i] + word[i + 1];
            if (b == "sh" || b == "Sh" || b == "ch" || b == "Ch" || b == "Ya" || b == "ya" || b == "o'" || b == "O'" || b == "o'" || b == "O'" || b == "o‘" || b == "O‘" || b == "yo" || b == "Yo" || b == "yu" || b == "Yu") {
              switch (b) {
                case "Sh": answer += "Ш"; break;
                case "sh": answer += "ш"; break;
                case "Ch": answer += "Ч"; break;
                case "ch": answer += "ч"; break;
                case "Ya": answer += "Я"; break;
                case "ya": answer += "я"; break;
                case "O'": answer += "Ў"; break;
                case "o'": answer += "ў"; break;
                case "O'": answer += "Ў"; break;
                case "o'": answer += "ў"; break;
                case "Yo": answer += "Ё"; break;
                case "yo": answer += "ё"; break;
                case "Yu": answer += "Ю"; break;
                case "yu": answer += "ю"; break;
                case "o‘": answer += "ў"; break;
                case "O‘": answer += "ў"; break;
                default: ;
              }
              i = i + 1;
            }
            else {
              answer += a[word[i]];
            }
          }

        }
      }
    }
    return answer;
  }

}
