import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  //COMPONENTES DEL SISTEMA
  { path: 'login', component: LoginComponent },

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
