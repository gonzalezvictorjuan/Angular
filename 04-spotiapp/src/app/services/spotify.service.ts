import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // si al iniciar da error recarga el token


  constructor( private http: HttpClient ) {
    console.log("api lista");
  }

  getQuery( query: string ){
    const token = "QBty5AFSX6cm9Sf5-86ZZ2PRNVSl6bKDUz77kE3C-jZAO4ejPuKYtzgNUrR4Fou5z3loKk6nv5SCVbUDkc";

    const url :string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({ 'Authorization':'Bearer '+ token });

    return this.http.get( url, {headers} );
  }

  getNewReleases(){
      return this.getQuery('browse/new-releases').pipe( map( data => {
        return data['albums'].items; //filtro la data
      }) );

               // .subscribe( dataSpoti => {
               //   console.log(dataSpoti);
               // });
  }

  getArtists(terminoBusqueda:string){
      return this.getQuery(`search?q=${ terminoBusqueda }&type=artist&limit=25`)
                  .pipe( map( data => data['artists'].items ) ); //filtro la data
  }
  getArtist(id:string){
      return this.getQuery(`artists/${ id }`);
                  // .pipe( map( data => data['artists'].items ) ); //filtro la data
  }
  getTopTracks(id:string){
      return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
                  .pipe( map( data => data['tracks'] ) ); //filtro la data
  }










  getToken(){
    const params = new HttpParams()
                      .set('grant_type', 'client_credentials')
                      .set('client_id', '5169e00f1a2e421fb8b5144cf22994a9')
                      .set('client_secret', '5417e60fbe2a4d39b4f4ea545a68a434');
    //
    // return this.http.post(  'https://accounts.spotify.com/api/token', {header}, {params})
    //                 .subscribe( dataToken => {
    //                   console.log(dataToken);
    //                 });
  }

}
