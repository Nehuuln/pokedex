import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[rarityColor]',
  standalone: true
})
export class RarityColorDirective implements OnChanges{

  @Input('rarityColor') rarity: string | undefined;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  ngOnChanges(changes: SimpleChanges): void {
    this.backgroundColor = this.getColorForRarity(this.rarity);
  }

  private getColorForRarity(rarete?: string): string{
    if(!rarete) return 'transparent';

    const stars = (rarete.match(/⭐|\*/g) || []).length;
    const count = stars;

    switch(true){
      case (count >= 5): return '#ffd2d2'; // very rare - light red
      case (count === 4): return '#e1bee7'; // purple
      case (count === 3): return '#ffe0b2'; // orange
      case (count === 2): return '#fff9c4'; // yellow
      case (count === 1): return '#e0f7fa'; // cyan
      default: return 'transparent';
    }
  }

}
