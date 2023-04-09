import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';
import { PerfilUsuComponent } from './Telas/perfil-usu/perfil-usu.component';
import { TelaInicialComponent } from './Telas/tela-inicial/tela-inicial.component';
import { LoginVeterinarioComponent } from './Telas/Veterinario/login-veterinario/login-veterinario.component';
import { CadastroVeterinarioComponent } from './Telas/Veterinario/cadastro-veterinario/cadastro-veterinario.component';
import { LoginADMComponent } from './Telas/TelasADM/login-adm/login-adm.component';
import { TabelaCrudVeterinarioComponent } from './Telas-Adm/tabela-crud-veterinario/tabela-crud-veterinario.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'LoginADM', component: LoginADMComponent },
  { path: 'LoginVeterinario', component: LoginVeterinarioComponent },
  { path: 'cadastro', component: CadastroUsuComponent },
  { path: 'cadastroVeterinario', component: CadastroVeterinarioComponent },
  { path: 'Perfil', component: PerfilUsuComponent },
  { path: 'TabelaCrud', component: TabelaCrudVeterinarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
