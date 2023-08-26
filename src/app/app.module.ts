//Módulos Principais.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Módulos Instalados
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

//Telas
import { LoginComponent } from './Telas/TelasPrincipais/login/login.component';
import { CadastroUsuComponent } from './Telas/TelasPrincipais/cadastro-usu/cadastro-usu.component';
import { PerfilUsuComponent } from './Telas/TelasPrincipais/perfil-usu/perfil-usu.component';
import { TelaInicialComponent } from './Telas/TelasPrincipais/tela-inicial/tela-inicial.component';
import { LoginVeterinarioComponent } from './Telas-Veterinario/login-veterinario/login-veterinario.component';
import { CadastroVeterinarioComponent } from './Telas-Veterinario/cadastro-veterinario/cadastro-veterinario.component';
import { LoginADMComponent } from './Telas-Adm/login-adm/login-adm.component';
import { TabelaCrudVeterinarioComponent } from './Telas-Adm/tabela-crud-veterinario/tabela-crud-veterinario.component';
import { EditarVeterinarioComponent } from './Telas-Veterinario/editar-veterinario/editar-veterinario.component';
import { PerfilVeterinarioComponent } from './Telas-Veterinario/perfil-veterinario/perfil-veterinario.component';
import { InicialUsuComponent } from './Telas/TelasPrincipais/inicial-usu/inicial-usu.component';
import { CadastroPetComponent } from './Telas/Pets/cadastro-pet/cadastro-pet.component';
import { PerfilPetComponent } from './Telas/Pets/perfil-pet/perfil-pet.component';
import { VisualizarPetsComponent } from './Telas/Pets/visualizar-pets/visualizar-pets.component';
import { AgendarConsultaComponent } from './Telas/TelasPrincipais/agendar-consulta/agendar-consulta.component';
import { AgendadasConsulComponent } from './Telas/TelasPrincipais/agendadas-consul/agendadas-consul.component';
import { MinhasConsultasComponent } from './Telas-Veterinario/minhas-consultas/minhas-consultas.component';
import { InicialVetComponent } from './Telas-Veterinario/inicial-vet/inicial-vet.component';
import { VisualizarConsultaVetComponent } from './Telas-Veterinario/visualizar-consulta-vet/visualizar-consulta-vet.component';
import { VisualizarConsultalComponent } from './Telas/TelasPrincipais/visualizar-consultal/visualizar-consultal.component';

//Componentes Criados.
import { NavgenericComponent } from './Componentes/Navs/navgeneric/navgeneric.component';
import { NavinicialComponent } from './Componentes/Navs/navinicial/navinicial.component';
import { NavbarComponent } from './Componentes/Navs/navbar/navbar.component';
import { NavVetComponent } from './Componentes/Navs/nav-vet/nav-vet.component';
import { SignaturePadComponent } from './Componentes/shared/signature-pad/signature-pad.component';
import { TesteFuncionalidadesComponent } from './Telas/teste-funcionalidades/teste-funcionalidades.component'; 
import { AdicionarProntuarioComponent } from './Telas-Veterinario/adicionar-prontuario/adicionar-prontuario.component';


//node_modules/ngx-toastr/toastr.css

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuComponent,
    PerfilUsuComponent,
    NavbarComponent,
    TelaInicialComponent,
    LoginVeterinarioComponent,
    CadastroVeterinarioComponent,
    LoginADMComponent,
    TabelaCrudVeterinarioComponent,
    EditarVeterinarioComponent,
    PerfilVeterinarioComponent,
    InicialUsuComponent,
    CadastroPetComponent,
    PerfilPetComponent,
    VisualizarPetsComponent,
    AgendarConsultaComponent,
    AgendadasConsulComponent,
    MinhasConsultasComponent,
    InicialVetComponent,
    NavVetComponent,
    VisualizarConsultaVetComponent,
    VisualizarConsultalComponent,
    NavgenericComponent,
    NavinicialComponent,
    SignaturePadComponent,
    TesteFuncionalidadesComponent,
    SignaturePadComponent,
    AdicionarProntuarioComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
