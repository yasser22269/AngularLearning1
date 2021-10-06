import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  constructor(private ref : ElementRef) { }
  @Input('format') format;
  @HostListener('blur') onBlur(){
      let getVlue : string =  this.ref.nativeElement.value;

      if(this.format == "toLowerCase"){
        this.ref.nativeElement.value = getVlue.toLowerCase();
      }else{
        this.ref.nativeElement.value = getVlue.toUpperCase();
      }
  }
}
