import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  curStep: number;
  stages: string[];

  constructor() {
    this.curStep = 1;
    this.stages = [
      "Application",
      "Terms",
      "Payment Setup",
      "Documents"
    ];
  }

  next() {
    if (this.curStep < this.stages.length) {
      this.curStep = this.curStep + 1;
    }
  }

  prev() {
    if (this.curStep > 1) {
      this.curStep = this.curStep - 1;
    }
  }

  ngOnInit() {
  }

}
