import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  public answerList: any[]

  constructor() { }

  ngOnInit() {
    this.answerList = [
      {
        question: "what is your name?",
        answer1: "Tracy",
        answer2: "Onyinye",
        answer3:"Chinedu"
      },

      {
        question: "where do you work?",
        answer1: "Chef's Academy",
        answer2: "FIRS",
        answer3:"Self Employed"
      },

      {
        question: "Do you like fashion",
        answer1: "Yes",
        answer2: "No",
        answer3:"In different"
      },
    ]
  }

  }


