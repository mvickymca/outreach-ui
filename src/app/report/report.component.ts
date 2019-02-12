import { Component, OnInit } from '@angular/core';

export interface TopProject {
  name: string;
  //position: number;
}

const TOP_PROJECT_DATA: TopProject[] = [
  { name: 'Intuit'},
  { name: 'DNB'}];

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})


export class ReportComponent implements OnInit {

 topProject=TOP_PROJECT_DATA;
 topProjectDisplayColumn: string[] = ['name'];

  ngOnInit() {
  }

}
