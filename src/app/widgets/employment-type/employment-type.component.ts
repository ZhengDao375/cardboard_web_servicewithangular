import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-employment-type',
  templateUrl: './employment-type.component.html',
  styleUrls: ['./employment-type.component.scss']
})
export class EmploymentTypeComponent implements OnInit {

  is_show_wrapper: boolean = true;
  @ViewChild('showControl') showControl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.is_show_wrapper = !this.is_show_wrapper;
    let nativeElement = this.showControl.nativeElement;
    if (this.is_show_wrapper == true)
      nativeElement.innerHTML = "-";
    else
      nativeElement.innerHTML = "+";
  }

}
