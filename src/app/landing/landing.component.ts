import { Component, OnInit } from '@angular/core';
import {LandingService} from "../services/landing.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private landingService: LandingService) {
    this.landingService.getUserInfo().subscribe(info => {
      console.log(info);
    }

    );
  }
  ngOnInit() {
  }

}
