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
import {
  InstitucionComponent,
  ModalFormularioInstitucion,
  ModalVistaInstitucion,
} from './components/institucion/institucion.component';
import {
  SedeComponent,
  ModalFormularioSede,
} from './components/sede/sede.component';
import {
  FacultadComponent,
  ModalFormularioFacultad,
} from './components/facultad/facultad.component';
import {
  ProgramaComponent,
  ModalFormularioPrograma,
  ModalVistaPrograma,
} from './components/programa/programa.component';
import {
  NormaComponent,
  ModalVistaNorma,
  ModalFormularioNorma,
  ModalFormularioDeroga,
} from './components/marco-normativo/norma/norma.component';
import {
  NormaGrupoComponent,
  ModalFormularioGrupo,
  ModalFormularioNormaGrupo,
} from './components/marco-normativo/norma-grupo/norma-grupo.component';
import { CineComponent } from './components/cine/cine.component';
import {
  AmplioComponent,
  ModalFormularioAmplio,
} from './components/cine/amplio/amplio.component';
import {
  DetalladoComponent,
  ModalFormularioDetallado,
} from './components/cine/detallado/detallado.component';
import {
  EspecificoComponent,
  ModalFormularioEspecifico,
} from './components/cine/especifico/especifico.component';
import { FiltroCampoAmplioPipe } from './pipes/filtro-campo-amplio.pipe';
import { FiltroCampoDetalladoPipe } from './pipes/filtro-campo-detallado.pipe';
import { FiltroCampoEspecificoPipe } from './pipes/filtro-campo-especifico.pipe';
import { FiltroEntidadPipe } from './pipes/filtro-entidad.pipe';
import { FiltroCuerpoColegiadoPipe } from './pipes/filtro-cuerpo-colegiado.pipe';
import { FiltroEntidadExternaPipe } from './pipes/filtro-entidad-externa.pipe';
import { FiltroMedioPipe } from './pipes/filtro-medio.pipe';
import { FiltroDerogaPipe } from './pipes/filtro-deroga.pipe';
import { FiltroEntidadInternaPipe } from './pipes/filtro-entidad-interna.pipe';
import { FiltroNormaTipoPipe } from './pipes/filtro-norma-tipo.pipe';
import { FiltroEstadoSniesPipe } from './pipes/filtro-estado-snies.pipe';
import { FiltroNivelAcademicoPipe } from './pipes/filtro-nivel-academico.pipe';
import { FiltroNivelFormacionPipe } from './pipes/filtro-nivel-formacion.pipe';
import { FiltroModalidadPipe } from './pipes/filtro-modalidad.pipe';
import { FiltroAreaConocimientoPipe } from './pipes/filtro-area-conocimiento.pipe';
import { FiltroSedePipe } from './pipes/filtro-sede.pipe';
import { CuerposColegiadosComponent } from './components/cuerpos-colegiados/cuerpos-colegiados.component';
import { TokenComponent } from './components/token/token.component';
import { EmailHidePipe } from './pipes/email-hide.pipe';
import { ReservaComponent, ModalFormularioReserva } from './components/reserva/reserva.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import {NgxPrintModule} from 'ngx-print';


// Importa el idioma español de date-fns
import { es } from 'date-fns/locale';

// Registra el idioma español para Angular
registerLocaleData(localeEs);



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
    ModalFormularioInstitucion,
    ModalVistaInstitucion,
    ModalFormularioSede,
    ModalFormularioAmplio,
    ModalFormularioDetallado,
    ModalFormularioEspecifico,
    ModalVistaNorma,
    ModalFormularioNorma,
    ModalFormularioDeroga,
    ModalFormularioGrupo,
    ModalFormularioNormaGrupo,
    ModalFormularioPrograma,
    ModalVistaPrograma,
    ModalFormularioFacultad,
    ModalFormularioReserva,
    InstitucionComponent,
    SedeComponent,
    FacultadComponent,
    ProgramaComponent,
    NormaComponent,
    NormaGrupoComponent,
    CineComponent,
    AmplioComponent,
    DetalladoComponent,
    EspecificoComponent,
    FiltroCampoAmplioPipe,
    FiltroCampoDetalladoPipe,
    FiltroCampoEspecificoPipe,
    FiltroEntidadPipe,
    FiltroCuerpoColegiadoPipe,
    FiltroEntidadExternaPipe,
    FiltroMedioPipe,
    FiltroDerogaPipe,
    FiltroEntidadInternaPipe,
    FiltroNormaTipoPipe,
    FiltroEstadoSniesPipe,
    FiltroNivelAcademicoPipe,
    FiltroNivelFormacionPipe,
    FiltroModalidadPipe,
    FiltroAreaConocimientoPipe,
    FiltroSedePipe,
    CuerposColegiadosComponent,
    TokenComponent,
    EmailHidePipe,
    ReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModules,
    NgxPrintModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: () => adapterFactory() }),
  ],
  entryComponents: [
    ModalFormularioPersona,
    ModalFormularioInstitucion,
    ModalVistaInstitucion,
    ModalFormularioSede,
    ModalFormularioAmplio,
    ModalFormularioDetallado,
    ModalFormularioEspecifico,
    ModalVistaNorma,
    ModalFormularioNorma,
    ModalFormularioDeroga,
    ModalFormularioGrupo,
    ModalFormularioNormaGrupo,
    ModalFormularioPrograma,
    ModalVistaPrograma,
    ModalFormularioFacultad,
    ModalFormularioReserva
  ],
  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },  { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
