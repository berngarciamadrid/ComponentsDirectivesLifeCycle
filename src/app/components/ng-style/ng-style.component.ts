import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanyo">
      Hola mundo..esta es una etiqueta HTML
    </p>
    <!--[ngStyle]= -->

    <button class="btn btn-primary" (click)= "tamanyo = tamanyo + 5">
        <i class="fa fa-plus"></i>
    </button>
  <button class="btn btn-primary" (click)= "tamanyo = tamanyo - 5">
        <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamanyo = 25;

  constructor() { }

  ngOnInit() {
  }

}
