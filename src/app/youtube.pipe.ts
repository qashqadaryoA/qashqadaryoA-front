import { Injectable, Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
@Injectable()
export class YoutubePipe implements PipeTransform{
  constructor(private dom:DomSanitizer){}
  transform(value?: any,args?:any) {
    // this.dom.bypassSecurityTrustResourceUrl(value)
   return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
