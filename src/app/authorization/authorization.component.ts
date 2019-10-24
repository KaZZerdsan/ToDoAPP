import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SignInUser } from '../core/interfaces/user';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    //this.userService.registration()
    
  }
  onSubmit(){
    const user: SignInUser = this.signInForm.getRawValue();
    this.userService.authentication(user).subscribe(
      data => console.log(data)
    );
  }
}
