import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { CommonModule, DatePipe } from '@angular/common';
import { BorderCardDirective } from '../directives/border-card.directive';
import { RarityColorDirective } from '../directives/rarity-color.directive';
// PokemonTypeColor pipe not used here
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { PokemonRaretePipe } from '../pipes/pokemon-rarete.pipe';
import { PokemonTypeColor } from '../pipes/pokemon-type-color.pipe';

@Component({
  standalone: true,
  selector: 'list-pokemons',
  imports: [
    CommonModule, // pour utiliser ngIf et ngFor
    DatePipe,
    BorderCardDirective,
    RarityColorDirective,
    PokemonTypeColor,
    SearchPokemonComponent
  ],
  templateUrl: './pokemons.component.html',
})
export class PokemonsComponentTs implements OnInit {
  
  pokemons: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonsService){
    this.pokemons = [];
  }

  ngOnInit(): void {
    
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);

  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  goAddPokemon(){
    let link = ['/ajout-pokemon'];
    this.router.navigate(link);
  }
}
