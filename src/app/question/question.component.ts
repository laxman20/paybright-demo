import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('active') isActive: boolean;
  @Input() title: string;
  @Input() question: string;
  @Input() answers: string[];

  @Output() answer = new EventEmitter<number>();

  answerData: object[];
  selectedAnswer: number;

  constructor() { }

  ngOnInit() {
    this.answerData = this.answers.map(a => {
      return {
        answer: a,
        selected: false
      }
    });
  }

  onSelectAnswer(i: number) {
    this.selectedAnswer = i;
    this.close();
    this.answer.emit(i);
  }

  open() {
    this.isActive = true;
  }

  close() {
    this.isActive = false;
  }

  toggle() {
    this.isActive = !this.isActive
  }


}
