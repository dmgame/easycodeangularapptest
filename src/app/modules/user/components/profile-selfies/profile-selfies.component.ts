import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../common/services/user.service";

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  loadPhotos(input) {
    const files = Array.from(input.files);
    console.log(files);
    this.userService.uploadPhotos(files);
  }
}
