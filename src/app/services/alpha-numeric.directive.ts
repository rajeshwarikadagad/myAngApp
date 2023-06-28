import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphaNumeric]'
})
export class AlphaNumericDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange() {
    console.log(this.el.nativeElement.value);
    this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z0-9]*/g, '')
    // event.stopPropagatio();
  }

}
