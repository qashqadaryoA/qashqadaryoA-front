import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlFilter'
})
export class UrlFilterPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(value?: any, args?: any) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
