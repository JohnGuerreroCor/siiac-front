import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { MaterialModules } from './material.modules';

import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FiltroSexoBiologicoPipe } from './pipes/filtro-sexo-biologico.pipe';
import { FiltroEstratoPipe } from './pipes/filtro-estrato.pipe';
import { FiltroMunicipioPipe } from './pipes/filtro-municipio.pipe';
import {
  PersonaComponent,
  ModalFormularioPersona,
} from './components/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    FiltroSexoBiologicoPipe,
    FiltroEstratoPipe,
    FiltroMunicipioPipe,
    PersonaComponent,
    ModalFormularioPersona,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
  ],
  entryComponents: [ModalFormularioPersona],
  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
