import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClustersService } from "../../../services/clusters.service";


@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.css']
})
export class ClustersComponent implements OnInit {
  uid = '';

  clusters = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clustersService: ClustersService) {
    this.route.params.subscribe(params => {
      this.uid = params.uid;

      // check if token is valid
      this.clustersService.getClusters(this.uid)
        .subscribe(data => {
            this.clusters = data;
          },
          error => {
            this.router.navigate(['/']);
          });
    });
  }

  ngOnInit(): void {
  }

  get clusterKeys() {
    return Object.keys(this.clusters);
  }

}
