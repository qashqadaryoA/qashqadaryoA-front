import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlFilter'
})
export class UrlFilterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(value?: any, args?: any) {
    let word = value;
    let answer: any = ""
      , a: any = {};
    let wordStatus: any = false;
    for (let i = 0; i <= word?.length; i++) {
      if (word.hasOwnProperty(i)) {
        let kkk=word[i]+word[i+1]+word[i+2]+word[i+3];        
          if (kkk=="<img") {
            answer += '<img width="95%"';
            i = i + 4;
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
        
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(answer);
  }

}
