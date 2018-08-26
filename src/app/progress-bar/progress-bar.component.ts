import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() title: string;
  @Input('step') curStep: number;

  _steps: number[];

  @Input()
  set total(total: number) {
    this._steps = Array(total).fill(0).map((x,i)=>i);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
