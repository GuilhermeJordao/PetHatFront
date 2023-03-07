import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { CadastroUsuComponent } from './Telas/cadastro-usu/cadastro-usu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
