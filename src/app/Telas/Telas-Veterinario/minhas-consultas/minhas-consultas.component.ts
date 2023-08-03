import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from '../../model/consulta';
import { ConsultaService } from '../../service/consulta.service';

@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.component.html',
  styleUrls: ['./minhas-consultas.component.scss'],
})
export class MinhasConsultasComponent {
  consultas: Consulta[] | undefined;
  email: any = localStorage.getItem('email');

  constructor(
    private consultaService: ConsultaService,
    private router: Router
  ) {
    this.consultaService.listarConsulta(this.email).subscribe((data) => {
      this.consultas = data;
    });
  }

  detalhesConsulta(consulta: Consulta) {
    console.log(consulta);
    this.router.navigate([`/VisualConsulVet/${consulta._id}`]); // Use backticks for template literals
  }
}
