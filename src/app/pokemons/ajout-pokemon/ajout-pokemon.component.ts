import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonTypeColor } from "../pipes/pokemon-type-color.pipe";
import { PokemonRaretePipe } from '../pipes/pokemon-rarete.pipe';


@Component({
    standalone: true,
    selector: 'ajout-pokemon',
    templateUrl: './ajout-pokemon.component.html',
    imports: [
        CommonModule,
        FormsModule,
        PokemonTypeColor,
        PokemonRaretePipe
    ]
})
export class AjoutPokemonComponent implements OnInit {
    @Input() pokemon: Pokemon = new Pokemon();
    types: any = [];
    raretes: any = [];

    constructor(private router: Router, private pokemonsService: PokemonsService) { }

    ngOnInit(): void {
        this.types = this.pokemonsService.getPokemonTypes();
        this.raretes = this.pokemonsService.getPokemonRaretes();
        // Ne pas préremplir les types par défaut (l'utilisateur choisira)
        this.pokemon.types = this.pokemon.types || [];
        this.pokemon.rarete = this.pokemon.rarete || this.raretes[0];
    }

    hasType(type: string): boolean {
        return this.pokemon.types && this.pokemon.types.indexOf(type) > -1;
    }

    isTypeValid(type: string): boolean {
        if (!this.pokemon.types) this.pokemon.types = [];
        if (this.pokemon.types.length === 1 && this.hasType(type)) {
            return false;
        }
        if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
        return true;
    }

    selectType($event: any, type: string) {
        let checked = $event.target.checked;

        if (!this.pokemon.types) this.pokemon.types = [];

        if (checked) {
            this.pokemon.types.push(type);
        } else {
            let index = this.pokemon.types.indexOf(type);
            if (index > -1) {
                this.pokemon.types.splice(index, 1);
            }
        }
    }

    onSubmit(): void {
        this.pokemonsService.addPokemon(this.pokemon).subscribe(() => {
            this.router.navigate(['/pokemon/all']);
        });
    }
}