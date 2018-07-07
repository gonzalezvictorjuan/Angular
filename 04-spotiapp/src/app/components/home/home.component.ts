import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading : boolean;
  error : boolean;
  mensajeError: string;

  constructor( private spoti:SpotifyService ) {
    this.error = false;
    this.loading = true;
    this.spoti.getNewReleases()
              .subscribe( ( dataSpoti : any ) => {
                console.log(dataSpoti);
                this.nuevasCanciones = dataSpoti;
                this.loading = false;
              }, (errorServicio) => {
                this.error=true;
                this.loading = false;
                console.log(errorServicio);
                console.log(errorServicio.error.error.message);
                this.mensajeError = errorServicio.error.error.message;
              });
  }

  ngOnInit() {
  }

}
