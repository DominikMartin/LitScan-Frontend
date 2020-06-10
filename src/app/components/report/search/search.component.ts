import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MetadataService} from "../../../services/metadata.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  metaInfo = {
    query: '',
    date_start: '',
    date_end: ''
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadataService: MetadataService) {
    this.route.params.subscribe(params => {
      this.metadataService.getMetadata(params.uid)
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
