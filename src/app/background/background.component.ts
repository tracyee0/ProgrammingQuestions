import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  public questionObject = 
  {
    subject: "who is your father",
    author: "John Doe"
  }

  public questionList: any[]

  constructor() { }

  ngOnInit() {
    this.questionList = [
      {
        subject: "who is your father",
        author: "John Doe"
      },

      {
        subject: "where do you work",
        author: "Tra"
      },

      {
        subject: "Do you like fashion",
        author: "papo"
      },
    ]
  }

}
