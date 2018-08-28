import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-form',
  templateUrl: './terms-form.component.html',
  styleUrls: ['./terms-form.component.css']
})
export class TermsFormComponent implements OnInit {

  incorrectCode: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(code: string) {
    if (code.length < 6) {
      this.incorrectCode = false;
      return;
    }
    if (code == "123456") {
      this.router.navigateByUrl('/identity');
    } else {
      this.incorrectCode = true;
    }
  }
}
