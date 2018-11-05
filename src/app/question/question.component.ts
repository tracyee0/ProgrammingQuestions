import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  @Input()
  public question: any; // {subject: 'example', author: 'emeka'}

  ngOnInit() {
  }
}
