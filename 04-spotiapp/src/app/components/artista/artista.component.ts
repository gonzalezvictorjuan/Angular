import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

//para saber el parametro de la ruta activa
import {  ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista : any = {};
  toptrack: any = {};
  loadingArtist : boolean = true;

  constructor(  private router:ActivatedRoute,
                private spotify:SpotifyService  ) {

    //agarro los parametros del url
    this.router.params.subscribe( params => {
      console.log(params);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
  });

  }

  getArtista(id:string){
    this.loadingArtist = true;

    this.spotify.getArtist(id)
                .subscribe( artista => {
                  console.log(artista);
                  this.artista = artista;
                  this.loadingArtist = false;
                });
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
                .subscribe( toptrack => {
                    console.log(toptrack);
                    this.toptrack=toptrack;
                });
  }

  ngOnInit() {
  }

}
