import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountoModule } from 'angular2-counto';
import { MetadataService } from './services/metadata.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/report/main/main.component';
import { AppRoutingModule } from '../app-routing.module';
import { MetadataComponent } from './components/report/metadata/metadata.component';
import { SearchComponent } from './components/report/search/search.component';
import { ChartsModule } from 'ng2-charts';
import { HistoryChartComponent } from './components/report/history-chart/history-chart.component';
import { WordCloudComponent } from './components/report/word-cloud/word-cloud.component';
import { ClustersComponent } from './components/report/clusters/clusters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MetadataComponent,
    SearchComponent,
    HistoryChartComponent,
    WordCloudComponent,
    ClustersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountoModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    MetadataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
