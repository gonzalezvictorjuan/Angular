import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PaisesComponent } from './components/paises/paises.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

//Importar Rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';


//Permite hacer peticiones http
import { HttpClientModule } from '@angular/common/http';


//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    PaisesComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //permite las peticiones http
    RouterModule.forRoot( ROUTES, { useHash:true  }) //sistema de rutas de la aplicacion, con useHash:false desaparece el #
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
