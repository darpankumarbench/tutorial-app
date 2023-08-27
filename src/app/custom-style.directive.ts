import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private e:ElementRef) {
    e.nativeElement.style.color="green";
   }

}
