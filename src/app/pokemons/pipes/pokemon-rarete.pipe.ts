import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonRarete',
  standalone: true
})
export class PokemonRaretePipe implements PipeTransform {
    
  transform(rarete: string): string {
    switch (rarete) {
      case '⭐':
        return 'Commun';
      case '⭐⭐':
        return 'Rare';
      case '⭐⭐⭐':
        return 'Très Rare';
      case '⭐⭐⭐⭐':
        return 'Épique';
      case '⭐⭐⭐⭐⭐':
        return 'Légendaire';
      default:
        return 'Inconnu';
    }
  }
}