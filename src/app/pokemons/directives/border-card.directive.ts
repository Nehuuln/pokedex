import { Directive, ElementRef, HostListener  } from "@angular/core";

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective{
  private defaultHeight: number = 200;
  

  constructor(private el: ElementRef){
    this.setHeight(this.defaultHeight);
    this.el.nativeElement.style.transition = 'transform 0.2s ease-in-out';
  }
  //quand je survol l'élément
  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.transform = 'scale(1.05)';
  }
  //quand je pars de l'élément
  @HostListener('mouseleave') onMouseLeave(){
     this.el.nativeElement.style.transform = 'scale(1)';
  }
  private setBorder(color:string){
    let border = 'solid 4px'+ color;
    this.el.nativeElement.style.border = border;
  }
  private setHeight(height: number){
    this.el.nativeElement.style.height = height+'px';
  }
}