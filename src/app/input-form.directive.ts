import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputForm]'
})
export class InputFormDirective {
  @Input('appInputForm') format:any;

  constructor(private el: ElementRef) { }

  @HostListener('blur')
  onBlur(){
    
let value: string = this.el.nativeElement.value;

  if (this.format=='lowercase') {
  this.el.nativeElement.value = value.toLowerCase();
    
     } else {
  this.el.nativeElement.value = value.toUpperCase();
    
          }
  }
}
