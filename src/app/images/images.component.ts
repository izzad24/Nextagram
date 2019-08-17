import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images = [];
  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    let userIndex = this.route.snapshot.params.userIndex
    this.images = this.profileService.getImages(userIndex)
    console.log(this.images)
  }

}
