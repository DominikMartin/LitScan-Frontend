import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MetadataService} from '../../../services/metadata.service';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
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

}
