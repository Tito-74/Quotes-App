import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  numberOfLike: number =0;
  numberOfDislike: number=0;
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { 

  }
  likeButtonClick(){
    this.numberOfLike++;


  }
  dislikeButtonClick(){
    this.numberOfDislike--;
  }
  

  ngOnInit(): void {
  }
  

}

