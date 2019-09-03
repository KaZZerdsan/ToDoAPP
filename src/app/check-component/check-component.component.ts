import { Component, OnInit } from '@angular/core';
import { CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-check-component',
  templateUrl: './check-component.component.html',
  styleUrls: ['./check-component.component.css']
})
export class CheckComponentComponent implements OnInit {

  check: boolean = false;
  constructor(private cookieService: CookieService) {}

  ngOnInit() {
  }

}
