import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  userData = []
  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    let data = this.profileService.getAllUser()
    this.userData = data;
    console.log(this.userData[0].profileImage)
  }

}
