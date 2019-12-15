import { Component, OnInit } from '@angular/core';
import { CurdserviceService } from '../../service/curdservice.service';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {
  model:Date;
  getAge: any;
  myDateValue: Date;
  constructor(private curdserviceService: CurdserviceService) { }

  

  ngOnInit() {
    this.myDateValue = new Date();
  }

  onDateChange(newDate: Date) {
    this.myDateValue = newDate;
    console.log(this.myDateValue);
  }

  // calculateAge() {
  //   console.log(this.myDateValue);
  // let formatAge = this.model.year +'/'+ this.model.month +'/'+ this.model.getDay;
  //  this.getAge = this.curdserviceService.getAge(this.myDateValue);
  //  console.log(this.getAge,'-=-=-=-=')
  // }
}
