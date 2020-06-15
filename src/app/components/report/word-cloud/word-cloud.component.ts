import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HistoryService} from "../../../services/history.service";

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {
  @Input()
  words: string;

  uid: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private historyService: HistoryService) {
    this.route.params.subscribe(params => {
      this.uid = params.uid;
    });
  }

  ngOnInit(): void {
  }

  get imgSrc() {
    return 'assets/data/' + this.uid + '/wordcloud/wordcloud-' + this.words + '.svg';
  }
}
