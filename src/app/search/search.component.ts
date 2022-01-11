import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { HomePageService } from '../home/home.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() sideNavOpen3: EventEmitter<boolean> = new EventEmitter(true);
  pageNumber:number=0;
  searchText1!:string;
  searchText2!:string;
  searchMessages?:any=[];
  h1:Boolean=false;
  h1Text:String="Қидиришингиз мумкин";

  constructor(private homePageService:HomePageService,
    private router:Router,
    public app:AppModule) { }

  ngOnInit(): void {
    
    window.scroll({
      top : 0
    });
    this.h1=true;
  }
  search(){
    this.h1Text="Қидириляпти кутинг"
    this.pageNumber=0;
    this.searchMessages=[];
    this.searchText1 = (<HTMLInputElement>document.getElementById("input")).value;
    let word=this.searchText1;
    let answer: any = ""
      , a: any = {};
    //Kiril to Lotin
    a["Ё"] = "YO"; a["Й"] = "I"; a["Ц"] = "J"; a["У"] = "U"; a["К"] = "K"; a["Е"] = "E"; a["Н"] = "N"; a["Г"] = "G"; a["Ш"] = "SH"; a["Щ"] = "SCH"; a["З"] = "Z"; a["Х"] = "x"; a["Ъ"] = "'";
    a["ё"] = "yo"; a["й"] = "y"; a["ц"] = "ts"; a["у"] = "u"; a["к"] = "k"; a["е"] = "e"; a["н"] = "n"; a["г"] = "g"; a["ш"] = "sh"; a["щ"] = "sch"; a["з"] = "z"; a["х"] = "x"; a["ъ"] = "'";
    a["Ф"] = "F"; a["Ы"] = "I"; a["В"] = "V"; a["А"] = "a"; a["П"] = "P"; a["Р"] = "R"; a["О"] = "O"; a["Л"] = "L"; a["Д"] = "D"; a["Ж"] = "j"; a["Э"] = "E";
    a["ф"] = "f"; a["ы"] = "i"; a["в"] = "v"; a["а"] = "a"; a["п"] = "p"; a["р"] = "r"; a["о"] = "o"; a["л"] = "l"; a["д"] = "d"; a["ж"] = "j"; a["э"] = "e";
    a["Я"] = "Ya"; a["Ч"] = "CH"; a["С"] = "S"; a["М"] = "M"; a["И"] = "I"; a["Т"] = "T"; a["Ь"] = "'"; a["Б"] = "B"; a["Ю"] = "YU";
    a["я"] = "ya"; a["ч"] = "ch"; a["с"] = "s"; a["м"] = "m"; a["и"] = "i"; a["т"] = "t"; a["ь"] = "'"; a["б"] = "b"; a["ю"] = "yu";
    a["қ"] = "q"; a["ў"] = "o'"; a["Қ"] = "Q"; a["ҳ"] = "h"; a["Ҳ"] = "H"; a["ғ"] = "g'";
    //Lotin to Kirill
    a["YO"] = "Ё"; a["I"] = "Й"; a["J"] = "Ц"; a["U"] = "У"; a["K"] = "К"; a["E"] = "Е"; a["N"] = "Н"; a["G"] = "Г"; a["SCH"] = "Щ"; a["Z"] = "З"; a["X"] = "Х";
    a["yo"] = "ё"; a["y"] = "й"; a["j"] = "ц"; a["u"] = "у"; a["k"] = "к"; a["e"] = "е"; a["n"] = "н"; a["g"] = "г"; a["sch"] = "щ"; a["z"] = "з"; a["x"] = "х";
    a["F"] = "Ф"; a["I"] = "Ы"; a["V"] = "В"; a["a"] = "А"; a["P"] = "П"; a["R"] = "Р"; a["O"] = "О"; a["L"] = "Л"; a["D"] = "Д"; a["j"] = "Ж"; a["E"] = "e";
    a["f"] = "ф"; a["i"] = "ы"; a["v"] = "в"; a["a"] = "а"; a["p"] = "п"; a["r"] = "р"; a["o"] = "о"; a["l"] = "л"; a["d"] = "д"; a["j"] = "ж"; a["e"] = "e";
    a["C"] = "C"; a["S"] = "С"; a["M"] = "М"; a["I"] = "И"; a["T"] = "Т"; a["B"] = "Б"; a["YU"] = "Ю";
    a["c"] = "c"; a["s"] = "с"; a["m"] = "м"; a["i"] = "и"; a["t"] = "т"; a["b"] = "б"; a["yu"] = "ю";
    a["q"] = "қ";  a["Q"] = "Қ"; a["h"] = "ҳ"; a["H"] = "Ҳ"; a["g'"] = "ғ";a["U"] = "Ў"

    for (let i = 0; i <= word.length; i++) {
      if (word.hasOwnProperty(i)) {
        if (a[word[i]] === undefined) {
          answer += word[i];
        } else {
          let b = word[i] + word[i + 1];
          if (b == "sh" || b == "Sh" || b == "ch" || b == "Ch" || b == "Ya" || b == "ya" || b=="o'" || b=="O'" || b=="o'" || b=="O'" || b=="o‘" || b=="O‘" || b=="yo" || b=="Yo"|| b=="yu" || b=="Yu") {
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
              default:;
            }
            i = i + 1;
          }
          else {
            answer += a[word[i]];
          }
        }
      }
    }
    this.searchText2=answer;
    this.koproq();
  }
  koproq(){
    this.homePageService.getSearch(this.searchText1,this.searchText2,this.pageNumber).subscribe(data => {
      if(data.totalElements<1){
        this.h1Text=`"`+this.searchText1+`"`+" бу сўзга оид малумот юқ";
        this.h1=true;
      }
      else{
        this.h1=false;
      }
      this.searchMessages = this.searchMessages.concat(data.content);
      this.pageNumber =  this.pageNumber + 1;
    });
  }
  openMessage(id:any,caption:any){
    this.router.navigate([this.app.post, id, caption]);
    this.app.postChange(); 
  }
}
