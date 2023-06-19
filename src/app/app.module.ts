import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HttpClientModule } from '@angular/common/http';
import { PerfilUsuComponent } from './Telas/perfil-usu/perfil-usu.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TelaInicialComponent } from './Telas/tela-inicial/tela-inicial.component';
import { LoginVeterinarioComponent } from './Telas-Veterinario/login-veterinario/login-veterinario.component';
import { CadastroVeterinarioComponent } from './Telas-Veterinario/cadastro-veterinario/cadastro-veterinario.component';
import { LoginADMComponent } from './Telas-Adm/login-adm/login-adm.component';
import { TabelaCrudVeterinarioComponent } from './Telas-Adm/tabela-crud-veterinario/tabela-crud-veterinario.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { EditarVeterinarioComponent } from './Telas-Veterinario/editar-veterinario/editar-veterinario.component';
import { PerfilVeterinarioComponent } from './Telas-Veterinario/perfil-veterinario/perfil-veterinario.component';
import { InicialUsuComponent } from './Telas/inicial-usu/inicial-usu.component';
import { CadastroPetComponent } from './Telas/Pets/cadastro-pet/cadastro-pet.component';
import { PerfilPetComponent } from './Telas/Pets/perfil-pet/perfil-pet.component';
import { VisualizarPetsComponent } from './Telas/Pets/visualizar-pets/visualizar-pets.component';
import { MatCardModule } from '@angular/material/card';
import { AgendarConsultaComponent } from './Telas/agendar-consulta/agendar-consulta.component';
import { AgendadasConsulComponent } from './Telas/agendadas-consul/agendadas-consul.component';
import { MinhasConsultasComponent } from './Telas/Telas-Veterinario/minhas-consultas/minhas-consultas.component';
import { InicialVetComponent } from './Telas/Telas-Veterinario/inicial-vet/inicial-vet.component';
import { NavVetComponent } from './Componentes/nav-vet/nav-vet.component';
import { VisualizarConsultaVetComponent } from './Telas/Telas-Veterinario/visualizar-consulta-vet/visualizar-consulta-vet.component';
import { VisualizarConsultalComponent } from './Telas/visualizar-consultal/visualizar-consultal.component';
import { NavgenericComponent } from './Componentes/navgeneric/navgeneric.component';

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
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MdbCollapseModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MdbCarouselModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
