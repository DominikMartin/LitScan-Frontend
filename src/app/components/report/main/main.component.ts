import {Component, OnInit} from '@angular/core';
import {MetadataService} from '../../../services/metadata.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userInfoToggle = false;

  ngOnInit(): void {
  }

  toggleUserInfo() {
    this.userInfoToggle = !this.userInfoToggle;
  }

}
