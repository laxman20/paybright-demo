import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted.emit();
  }

}
