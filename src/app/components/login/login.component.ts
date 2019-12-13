import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['',[Validators.required,Validators.maxLength(5),Validators.minLength(2)]]
  });
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.router.navigate(["user-list",{data:JSON.stringify(this.profileForm.value)}]);
  }

}
