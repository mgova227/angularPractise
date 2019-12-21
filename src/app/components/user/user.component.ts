import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CurdserviceService } from '../../service/curdservice.service';
import { Hero } from '../../models/hero';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string;
  password: string;
  userData: any;
  name = '';
  value:string;
  public heroes: Hero[];
  private selectedData: any;
  constructor(private route: ActivatedRoute, private curdserviceService: CurdserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userData = JSON.parse(params.data);
    });
    this.getUsers();
  }

  getUsers() {
    this.curdserviceService.getHeroes().subscribe(
      data => {
        this.heroes = data
      });
  }

  // getSelectedUser(id) {
  //   this.curdserviceService.getSelecetedData(id).subscribe(
  //     data => {
  //       this.selectedData = data;
  //     }
  //   )}


  updateUser(id,value) {
    this.value = value;
    this.curdserviceService.getSelecetedData(id).subscribe(data => {
      this.userData = data;
      $('#exampleModalCenter').modal('show');
      this.name = this.userData.name;
    });
  }
  addUser() {
    let user = {
      'id': this.heroes.length + 1,
      'name': this.name
    }
    if(this.value == 'update'){
    this.userData.name = this.name;
      this.curdserviceService.updateUser(this.userData).subscribe(data1 => {
        this.name = "";
        this.value = null;
        $('#exampleModalCenter').modal('hide');
      });
    }else{
      this.curdserviceService.addUser(user).subscribe(
        data => {
          this.name = "";
          $('#exampleModalCenter').modal('hide');
        }
      );
    }
    
    this.getUsers();
  }

  deleteUser(id) {
    this.curdserviceService.deleteUser(id).subscribe(data => {
       this.getUsers();
    });
  }

}
