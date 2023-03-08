import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';
import { CrudUsuComponent } from './Telas/crud-usu/crud-usu.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'cadastro', component:CadastroUsuComponent},
  {path: 'Cruds', component:CrudUsuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
