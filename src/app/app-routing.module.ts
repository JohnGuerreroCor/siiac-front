import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonaComponent } from './components/persona/persona.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { SedeComponent } from './components/sede/sede.component';
import { FacultadComponent } from './components/facultad/facultad.component';
import { NormaComponent } from './components/marco-normativo/norma/norma.component';
import { NormaGrupoComponent } from './components/marco-normativo/norma-grupo/norma-grupo.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { CineComponent } from './components/cine/cine.component';
import { CuerposColegiadosComponent } from './components/cuerpos-colegiados/cuerpos-colegiados.component';
import { TokenComponent } from './components/token/token.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  //COMPONENTES DEL SISTEMA
  { path: 'login', component: LoginComponent },
  { path: 'token', component: TokenComponent },

  { path: 'inicio', component: InicioComponent },

  { path: 'institucion', component: InstitucionComponent },

  { path: 'persona', component: PersonaComponent },

  { path: 'sede', component: SedeComponent },
  { path: 'cuerpos-colegiados', component: CuerposColegiadosComponent },
  { path: 'facultad', component: FacultadComponent },
  { path: 'norma', component: NormaComponent },
  { path: 'norma-grupo', component: NormaGrupoComponent },
  { path: 'programa', component: ProgramaComponent },
  { path: 'cine', component: CineComponent },
  { path: 'reserva', component: ReservaComponent },

  //REDIRECCIONAMIENTO COMOPONENTE POR DEFECTO PARA RUTAS INEXISTENTES EN EL NAVEGADOR
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
