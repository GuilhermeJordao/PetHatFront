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
import { StorageService } from './Telas/service/storage.service';
import { TelaInicialComponent } from './Telas/tela-inicial/tela-inicial.component';
import { LoginAdmComponent } from './Telas-Adm/login-adm/login-adm.component';
import { NavbarAdmComponent } from './Componentes/navbar-adm/navbar-adm.component';

//node_modules/ngx-toastr/toastr.css

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuComponent,
    PerfilUsuComponent,
    NavbarComponent,
    TelaInicialComponent,
    LoginAdmComponent,
    NavbarAdmComponent,
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
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
