import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomRoutingModule } from './custom-routing.module';
import { CustomComponent } from './custom.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    CustomRoutingModule,
    NgbModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class CustomModule { }
