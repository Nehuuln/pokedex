import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'transform 0.2s ease-in-out';
  }
  //quand je survol l'élément
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.05)';
  }
  //quand je pars de l'élément
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}