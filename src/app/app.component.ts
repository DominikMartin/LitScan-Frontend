import { Component } from '@angular/core';
import { MetadataService } from './services/metadata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfoToggle = false;
  articles = 0;
  words = 0;
  db = 0;
  progress = 0;

  metaInfo = {
    articles: 0,
    words: 0,
    databases: 0,
    progress: 0
  };

  constructor(private metadataService: MetadataService) {
     metadataService.getMetadata('sample01').subscribe(data => this.metaInfo = data);
  }


  toggleUserInfo() {
    this.userInfoToggle = !this.userInfoToggle;
  }
}
