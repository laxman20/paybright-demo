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

  private selectedAnswer: number;
  private correct: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSelectAnswer(i: number) {
    this.selectedAnswer = i;
    this.answer.emit(i);
  }

  setCorrect() {
    this.correct = true;
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
