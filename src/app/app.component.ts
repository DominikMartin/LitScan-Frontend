import { Component } from '@angular/core';

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
    articles: 1850,
    words: 148000,
    databases: 5,
    progress: 100
  };

  toggleUserInfo() {
    this.userInfoToggle = !this.userInfoToggle;
  }
}
