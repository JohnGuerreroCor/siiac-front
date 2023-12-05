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
  ],
  providers: [DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
