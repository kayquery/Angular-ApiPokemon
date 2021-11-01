import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-personal-feed',
  templateUrl: './personal-feed.component.html',
  styleUrls: ['./personal-feed.component.scss']
})
export class PersonalFeedComponent implements OnInit {




  constructor(private service: ServiceService) { }

  public pokemons: any;


  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.service.getAllPokemons()
      .subscribe(result => {
        this.pokemons = result;
      })
  }



}
