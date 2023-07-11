import { Component ,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  ngOnInit() {

  }

  @Input() all:number=0;
  @Input() standard:number=0;
  @Input() premium:number=0;

  selectedRadioButtonValue:string='all';

  @Output() filterRadioButtonChanged:EventEmitter<string>=new EventEmitter<string>();

onSelectedRadioButton(){
  this.filterRadioButtonChanged.emit(this.selectedRadioButtonValue);
  // console.log(this.selectedRadioButtonValue)
}

}
