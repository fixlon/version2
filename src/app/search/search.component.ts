import { Component,EventEmitter,Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  ngOnInit() {

  }

  searchValue:string='';

  @Output() searchedValue:EventEmitter<string>=new EventEmitter<string>();

  onSearchedValue(){
this.searchedValue.emit(this.searchValue);
  }

}
