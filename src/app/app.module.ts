import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HttpClientModule } from '@angular/common/http';
import { PerfilUsuComponent } from './Telas/perfil-usu/perfil-usu.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuComponent,
    PerfilUsuComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MdbCollapseModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
