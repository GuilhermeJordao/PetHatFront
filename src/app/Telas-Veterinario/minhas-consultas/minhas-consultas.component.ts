import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from '../../Telas/TelasPrincipais/model/consulta';
import { ConsultaService } from '../../Telas/TelasPrincipais/service/consulta.service';

@Component({
  selector: 'app-minhas-consultas',
  templateUrl: './minhas-consultas.component.html',
  styleUrls: ['./minhas-consultas.component.scss'],
})
export class MinhasConsultasComponent {
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
    this.router.navigate([`/VisualConsulVet/${consulta._id}`]); // Use backticks for template literals
  }
}
