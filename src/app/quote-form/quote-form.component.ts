import { Component, OnInit ,EventEmitter,Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote (0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  
  // this.newQuote)
  submitQuote(){
    this.addQuote.emit(this.newQuote);
    // this.quoteForm.reset();
    
      }
    // @ViewChild('goalForm') quoteForm : NgForm;
   
  constructor() { }

  ngOnInit(): void {
  }

}
