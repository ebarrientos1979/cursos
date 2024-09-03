import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEtiquetaError]',
})
export class EtiquetaErrorDirective {
  private htmlElement: ElementRef<HTMLElement>;

  @Input() set etiqueta(value: string) {
    if (value === 'error') {
      this.htmlElement.nativeElement.innerHTML = 'Usuario o password erroneos';
    } else {
      this.htmlElement.nativeElement.innerHTML = value;
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    this.htmlElement.nativeElement.style.color = 'red';
  }
}
