import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[]=[
    new Quote(1,'The purpose of our lives is to be happy.','Will Smith',new Date(2021,8,21)),
    new Quote(2,'Life is what happens when you’re busy making other plans.','Will Tito',new Date(2021,8,21)),
    new Quote(3,'Get busy living or get busy dying.','Will Smith',new Date(2021,8,21)),
    new Quote(4,'You only live once, but if you do it right, once is enough.','Will Tito',new Date(2021,8,21)),
    new Quote(5,'Never let the fear of striking out keep you from playing the game.','Will Smith',new Date(2021,8,25)),
    new Quote(6,'Money and success don’t change people; they merely amplify what is already there.','Will Tito',new Date()),
    new Quote(7,'Never let the fear of striking out keep you from playing the game.','John Smith',new Date(2021,8,25)),
  ];
  
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}


