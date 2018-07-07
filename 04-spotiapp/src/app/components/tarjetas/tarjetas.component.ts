import { Component,  Input } from '@angular/core';

//para hacer la redireccion al artistaId
import {  Router  } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any [] = [];
  constructor(  private router:Router) { }

  verArtista( item:any  ){
    console.log(item);

    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artista', artistaId]); //con esto ya te redirecciona al artista, ahora anda al artista


  }


}
