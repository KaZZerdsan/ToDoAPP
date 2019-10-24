import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }
    username: string = '';
  ngOnInit() {
    this.userService.currentUser$.subscribe(data => this.username = data.username);
    this.userService.isAuthenticated$.subscribe(data => console.log(data))
  }
  
}
