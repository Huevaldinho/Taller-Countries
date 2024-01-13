import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @ViewChild('txtInput')//* Bindea con el input del html
  public txtInput!: ElementRef<HTMLInputElement>;//Para que se inicialice "!:" sin tener que hacerlo en el constructor

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  
  //*Respond after Angular initializes the component's views and child views, or the view that contains the directive. 
  ngAfterViewInit(): void {
    if (localStorage.getItem('term')) {
      this.txtInput.nativeElement.value = JSON.parse(localStorage.getItem('term') || '');
    }
  }

}
