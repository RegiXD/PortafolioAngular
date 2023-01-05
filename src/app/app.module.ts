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
    DescripcionComponent
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
