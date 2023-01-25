import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogoComponent } from './Components/logo/logo.component';
import { RedesSocialesComponent } from './Components/redes-sociales/redes-sociales.component';
import { BtnLoginComponent } from './Components/btn-login/btn-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RedesSocialesItemComponent } from './Components/redes-sociales-item/redes-sociales-item.component';
import { TituloPortafolioComponent } from './Components/titulo-portafolio/titulo-portafolio.component';
import { BodyComponent } from './Components/body/body.component';
import { PresentacionComponent } from './Components/presentacion/presentacion.component';
import { BannerComponent } from './Components/banner/banner.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { BiografiaComponent } from './Components/biografia/biografia.component';
import { NomApComponent } from './Components/nom-ap/nom-ap.component';
import { TituloComponent } from './Components/titulo/titulo.component';
import { DescripcionComponent } from './Components/descripcion/descripcion.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { EstudiosComponent } from './Components/estudios/estudios.component';
import { HabilidadesComponent } from './Components/habilidades/habilidades.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { ListGroupComponent } from './Components/list-group/list-group.component';
import { ItemListComponent } from './Components/item-list/item-list.component';
import { Progreso1Component } from './Components/progreso1/progreso1.component';
import { Progreso2Component } from './Components/progreso2/progreso2.component';
import { Progreso3Component } from './Components/progreso3/progreso3.component';
import { Progreso4Component } from './Components/progreso4/progreso4.component';
import { Progreso0Component } from './Components/progreso0/progreso0.component';
import { CardComponent } from './Components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    RedesSocialesComponent,
    BtnLoginComponent,
    RedesSocialesItemComponent,
    TituloPortafolioComponent,
    BodyComponent,
    PresentacionComponent,
    BannerComponent,
    PerfilComponent,
    BiografiaComponent,
    NomApComponent,
    TituloComponent,
    DescripcionComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ListGroupComponent,
    ItemListComponent,
    Progreso1Component,
    Progreso2Component,
    Progreso3Component,
    Progreso4Component,
    Progreso0Component,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
