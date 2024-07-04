import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  constructor() { }
  @Input()
  quantity!: number;

  @Input()
  max!: number;
  
  @Output()
  quantityChange:EventEmitter<number>=new EventEmitter<number>();

  upQuantity(): void{
    if(this.max >this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    
  }
    
  downQuantity(): void{
      if(this.quantity > 0){
        this.quantity-- 
        this.quantityChange.emit(this.quantity);
      }
  }
  onChangeQuantity(event: KeyboardEvent, ): void {
    console.log(event.key);
    const charCode = event.key;
    if (!(charCode >= '0' && charCode <= '9')) {
      event.preventDefault();
      this.quantityChange.emit(this.quantity);
    }
  }
}
