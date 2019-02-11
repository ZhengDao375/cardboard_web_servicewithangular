import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']  
})
export class Header1Component implements OnInit {
  
 @Input() headerBackground:boolean;

  logCheck: boolean;

  is_en:boolean=true;
  is_ar:boolean=false;
  
  constructor(private translate:TranslateService){
    translate.setDefaultLang('en');
  }
  uselanguage(s:string){
    this.translate.use(s);
    if(s==='en'){
      this.is_en=true;
      this.is_ar=false;
    }
    else{
      this.is_en=false;
      this.is_ar=true;
    }
  }

  ngOnInit() {  }
}