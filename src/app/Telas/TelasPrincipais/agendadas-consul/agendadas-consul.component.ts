import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-agendadas-consul',
  templateUrl: './agendadas-consul.component.html',
  styleUrls: ['./agendadas-consul.component.scss'],
})
export class AgendadasConsulComponent {
  consultas: Consulta[] | undefined;
  consultasPendentes: Consulta[] = []; 
  consultasConcluidas: Consulta[] = []; 
  email: any = localStorage.getItem('email');

  constructor(
    private consultaService: ConsultaService,
    private router: Router
  ) {
    this.consultaService.listarConsulta(this.email).subscribe((data) => {
      this.consultas = data;
      console.log(this.consultas);
      this.separateConsultas();
    });
  }
  private separateConsultas() {
    if (this.consultas) {
      this.consultasPendentes = this.consultas.filter(
        (consulta) => consulta.statusConsulta === 'PENDENTE'
      );

      this.consultasConcluidas = this.consultas.filter(
        (consulta) => consulta.statusConsulta === 'CONCLUIDO'
      );
    }
  }
  detalhesConsulta(consulta: Consulta) {
    console.log(consulta);
    this.router.navigate([`/VisualConsul/${consulta._id}`]); // Use backticks for template literals
  }
}
