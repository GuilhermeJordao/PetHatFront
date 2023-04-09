import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';
import { PerfilUsuComponent } from './Telas/perfil-usu/perfil-usu.component';
import { TelaInicialComponent } from './Telas/tela-inicial/tela-inicial.component';

const routes: Routes = [
  {path: '', component:TelaInicialComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'cadastro', component:CadastroUsuComponent},
  {path: 'Perfil', component:PerfilUsuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
