import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  curStep: Number;
  stages: String[];

  constructor() {
    this.curStep = 1;
    this.stages = [
      "Application",
      "Terms",
      "Payment Setup",
      "Documents"
    ];
  }

  ngOnInit() {
  }

}
