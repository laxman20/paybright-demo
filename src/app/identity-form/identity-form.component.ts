import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.css']
})
export class IdentityFormComponent implements OnInit {

  question: string;
  answers: string[];
  identified: boolean;

  constructor() {
    this.question = "Your credit file indicates you may have a credit card jointly with another person. Please choose your credit provider for this account from the following options."
    this.answers = [
      "Dresdner Bank",
      "HSBC Bank",
      "Laurentian Bank",
      "PC Financial",
      "None of the above"
    ];
  }

  ngOnInit() {
  }

}
