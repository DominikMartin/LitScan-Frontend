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
  uid = '';

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadataService: MetadataService) {
    this.route.params.subscribe(params => {
      this.uid = params.uid;

      // check if token is valid
      this.metadataService.getMetadata(this.uid)
        .subscribe(data => {
            this.metaInfo = data;
          },
          error => {
            this.router.navigate(['/']);
          });
    });


  }

  ngOnInit(): void {
  }

  toggleUserInfo() {
    this.userInfoToggle = !this.userInfoToggle;
  }

}
