import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.css']
})
export class IdentityFormComponent implements OnInit {

  question: string;
  answers: string[];
  response: number[];
  identified: boolean;
  currentQuestion: number;

  @ViewChildren(QuestionComponent) questionsComp: QueryList<QuestionComponent>

  constructor(private router: Router) {
    this.question = "Your credit file indicates you may have a credit card jointly with another person. Please choose your credit provider for this account from the following options."
    this.answers = [
      "Dresdner Bank",
      "HSBC Bank",
      "Laurentian Bank",
      "PC Financial",
      "None of the above"
    ];
    this.response = new Array(4);
    this.currentQuestion = 0;
    this.identified = false;
  }

  setResponse(answer: number, index: number) {
    this.response[index] = answer;
  }

  nextQuestion() {
    if (this.response[this.currentQuestion] != undefined) {
      const currentQ = this.questionsComp.toArray()[this.currentQuestion];
      currentQ.setCorrect();
      currentQ.close();
      this.currentQuestion = this.currentQuestion + 1;
      if (this.currentQuestion > 3) {
        this.identified = true
      } else {
        const nextQ = this.questionsComp.toArray()[this.currentQuestion];
        nextQ.open();
      }
    }
  }

  onSubmit() {
    this.router.navigateByUrl('/payment');
  }

  ngOnInit() {
  }

}
