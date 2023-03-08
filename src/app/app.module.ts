import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';
import { CrudUsuComponent } from './Telas/crud-usu/crud-usu.component';
import { NavbarCrudsComponent } from './Componentes/navbar-cruds/navbar-cruds.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuComponent,
    CrudUsuComponent,
    NavbarCrudsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MdbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
