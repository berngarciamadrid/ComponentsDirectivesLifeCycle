import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el: ElementRef ) {
    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = 'yellow';
   }

   // tslint:disable-next-line:no-input-rename
   @Input('appResaltado') nuevoColor: string;

   @HostListener('mouseenter') mouseEntra() {

    this.resaltar( this.nuevoColor || 'yellow');

    // console.log( this.nuevoColor);
    //  this.el.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseleave') mouseSale() {
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar( null );
  }

  private resaltar ( color: string) {
    this.el.nativeElement.style.backgroundColor = color;

  }

}
