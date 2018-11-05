import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  
  constructor() { }
@Input()
public answers: any
  
  ngOnInit() {
  }
}

