import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  public questionList: any[]

  constructor() { }

  ngOnInit() {
    this.questionList = [
      {
        subject: "who is your father",
        author: "John Doe",
        answer: "12 answers",
        time:"14 minuites ago"
      },

      {
        subject: "where do you work",
        author: "Tra",
        answer: "13 answers",
        time:"17 minuites ago"
      },

      {
        subject: "Do you like fashion",
        author: "papo",
        answer: "20 answers",
        time:"30 minuites ago"
      },
    ]
  }

}
