import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';
import { PerfilUsuComponent } from './Telas/perfil-usu/perfil-usu.component';
import { TelaInicialComponent } from './Telas/tela-inicial/tela-inicial.component';
import { LoginVeterinarioComponent } from './Telas-Veterinario/login-veterinario/login-veterinario.component';
import { CadastroVeterinarioComponent } from './Telas-Veterinario/cadastro-veterinario/cadastro-veterinario.component';
import { LoginADMComponent } from './Telas-Adm/login-adm/login-adm.component';
import { TabelaCrudVeterinarioComponent } from './Telas-Adm/tabela-crud-veterinario/tabela-crud-veterinario.component';
import { EditarVeterinarioComponent } from './Telas-Veterinario/editar-veterinario/editar-veterinario.component';
import { PerfilVeterinarioComponent } from './Telas-Veterinario/perfil-veterinario/perfil-veterinario.component';
import { PerfilPetComponent } from './Telas/Pets/perfil-pet/perfil-pet.component';
import { InicialUsuComponent } from './Telas/inicial-usu/inicial-usu.component';
import { CadastroPetComponent } from './Telas/Pets/cadastro-pet/cadastro-pet.component';
import { VisualizarPetsComponent } from './Telas/Pets/visualizar-pets/visualizar-pets.component';
import { AgendarConsultaComponent } from './Telas/agendar-consulta/agendar-consulta.component';
import { AgendadasConsulComponent } from './Telas/agendadas-consul/agendadas-consul.component';
import { MinhasConsultasComponent } from './Telas/Telas-Veterinario/minhas-consultas/minhas-consultas.component';
import { InicialVetComponent } from './Telas/Telas-Veterinario/inicial-vet/inicial-vet.component';
import { VisualizarConsultaVetComponent } from './Telas/Telas-Veterinario/visualizar-consulta-vet/visualizar-consulta-vet.component';
import { VisualizarConsultalComponent } from './Telas/visualizar-consultal/visualizar-consultal.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'LoginADM', component: LoginADMComponent },
  { path: 'LoginVeterinario', component: LoginVeterinarioComponent },
  { path: 'cadastro', component: CadastroUsuComponent },
  { path: 'cadastroVeterinario', component: CadastroVeterinarioComponent },
  { path: 'Perfil', component: PerfilUsuComponent },
  { path: 'TabelaCrud', component: TabelaCrudVeterinarioComponent },
  { path: 'EditarVeterinario/:id', component: EditarVeterinarioComponent },
  { path: 'PerfilVeterinario', component: PerfilVeterinarioComponent },
  { path: 'PerfilPet/:id', component: PerfilPetComponent },
  { path: 'CadastroPet', component: CadastroPetComponent },
  { path: 'InicialUsu', component: InicialUsuComponent },
  { path: 'VisualisarPets', component: VisualizarPetsComponent },
  { path: 'AgendarConsulta', component: AgendarConsultaComponent },
  { path: 'ConsultaAgendada', component: AgendadasConsulComponent },
  { path: 'VetConsultas', component: MinhasConsultasComponent },
  { path: 'InicialVet', component: InicialVetComponent },
  { path: 'VisualConsulVet/:id', component: VisualizarConsultaVetComponent },
  { path: 'VisualConsul/:id', component: VisualizarConsultalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
