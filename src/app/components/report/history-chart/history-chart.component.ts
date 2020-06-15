import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {ActivatedRoute, Router} from '@angular/router';
import {HistoryService} from '../../../services/history.service';

@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.css']
})
export class HistoryChartComponent implements OnInit {
  history = {
    labels: [],
    data: []
  };

  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: 'rgb(255,255,255)',
      bodyFontColor: '#858796',
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    }
  };
  barChartLabels: Label[] = ['0'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
              {
                data: [0], label: 'Articles published',
                backgroundColor: '#4e73df', hoverBackgroundColor: '#2e59d9', borderColor: '#4e73df', maxBarThickness: 25
              }
            ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private historyService: HistoryService) {
    this.route.params.subscribe(params => {
      this.historyService.getHistory(params.uid)
        .subscribe(data => {
            this.barChartData = [
              {
                data: data.data, label: 'Articles published',
                backgroundColor: '#4e73df', hoverBackgroundColor: '#2e59d9', borderColor: '#4e73df', maxBarThickness: 25
              }
            ];
            this.barChartLabels = data.labels;
          },
          error => {
            this.router.navigate(['/']);
          });
    });
  }

  ngOnInit(): void {
  }

}
