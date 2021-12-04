import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() label:string;
  @Input() placeholder:string;
  @Output() findValue=new EventEmitter<string>()

  find:string;

  constructor() { 
    this.label=''
    this.placeholder=''
    this.find=''
  }

  emitFind($event:string){
    this.findValue.emit($event)
  }

}
