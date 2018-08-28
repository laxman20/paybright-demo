import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents-form',
  templateUrl: './documents-form.component.html',
  styleUrls: ['./documents-form.component.css']
})
export class DocumentsFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('/confirm');
  }

}
